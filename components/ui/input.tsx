import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'monolith-input w-full text-sm text-on-surface placeholder:text-outline-variant/50',
        className,
      )}
      {...props}
    />
  ),
)

Input.displayName = 'Input'
