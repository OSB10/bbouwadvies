import * as React from 'react'
import { cn } from '@/lib/utils'

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'monolith-input min-h-32 w-full resize-y text-sm text-on-surface placeholder:text-outline-variant/50',
      className,
    )}
    {...props}
  />
))

Textarea.displayName = 'Textarea'
