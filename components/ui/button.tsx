import * as React from 'react'
import { cn } from '@/lib/utils'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost'
}

const variantClassNames: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'monolith-button monolith-button-primary',
  outline: 'monolith-button monolith-button-outline',
  ghost: 'monolith-button monolith-button-ghost',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        variantClassNames[variant],
        'disabled:pointer-events-none disabled:opacity-60',
        className,
      )}
      {...props}
    />
  ),
)

Button.displayName = 'Button'
