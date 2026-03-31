import * as React from 'react'
import { cn } from '@/lib/utils'

export function Alert({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      role="alert"
      className={cn(
        'border border-outline-variant/30 bg-surface-container px-4 py-3 text-sm leading-7 text-on-surface',
        className,
      )}
      {...props}
    />
  )
}

export function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return <p className={cn('m-0', className)} {...props} />
}
