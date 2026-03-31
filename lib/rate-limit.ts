type RateLimitEntry = {
  attempts: number
  windowStartedAt: number
  lastSubmissionAt: number
  lastFingerprint?: string
}

type RateLimitResult =
  | { ok: true }
  | { ok: false; reason: 'rate_limited' | 'duplicate'; retryAfterSeconds: number }

const WINDOW_MS = 60 * 60 * 1000
const MAX_ATTEMPTS = 5
const MIN_INTERVAL_MS = 30 * 1000
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000

const globalStore = globalThis as typeof globalThis & {
  __contactRateLimitStore__?: Map<string, RateLimitEntry>
}

const store = globalStore.__contactRateLimitStore__ ?? new Map<string, RateLimitEntry>()
globalStore.__contactRateLimitStore__ = store

export function checkContactRateLimit(key: string, fingerprint: string): RateLimitResult {
  const now = Date.now()
  const current = store.get(key)

  if (!current || now - current.windowStartedAt > WINDOW_MS) {
    store.set(key, {
      attempts: 1,
      windowStartedAt: now,
      lastSubmissionAt: now,
      lastFingerprint: fingerprint,
    })
    return { ok: true }
  }

  if (now - current.lastSubmissionAt < MIN_INTERVAL_MS) {
    return {
      ok: false,
      reason: 'rate_limited',
      retryAfterSeconds: Math.ceil((MIN_INTERVAL_MS - (now - current.lastSubmissionAt)) / 1000),
    }
  }

  if (
    current.lastFingerprint === fingerprint &&
    now - current.lastSubmissionAt < DUPLICATE_WINDOW_MS
  ) {
    return {
      ok: false,
      reason: 'duplicate',
      retryAfterSeconds: Math.ceil(
        (DUPLICATE_WINDOW_MS - (now - current.lastSubmissionAt)) / 1000,
      ),
    }
  }

  if (current.attempts >= MAX_ATTEMPTS) {
    return {
      ok: false,
      reason: 'rate_limited',
      retryAfterSeconds: Math.ceil((WINDOW_MS - (now - current.windowStartedAt)) / 1000),
    }
  }

  current.attempts += 1
  current.lastSubmissionAt = now
  current.lastFingerprint = fingerprint
  store.set(key, current)

  return { ok: true }
}
