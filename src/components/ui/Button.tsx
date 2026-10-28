import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-medium rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none'

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 min-h-[44px]',
    lg: 'text-base px-6 py-3 min-h-[48px]',
  }[size]

  const variantStyles = {
    primary:
      'bg-[#D9578B] text-white shadow-[0_3px_10px_rgba(217,87,139,0.35)] hover:bg-[#c44779] hover:shadow-[0_4px_14px_rgba(217,87,139,0.45)] focus-visible:outline-[#D9578B]',
    secondary:
      'bg-[#F3B8CE] text-[#332B2D] hover:bg-[#eb9eb9] focus-visible:outline-[#D9578B]',
    outline:
      'border-2 border-[#D9578B] text-[#D9578B] bg-transparent hover:bg-[#FBE6EE]/60 focus-visible:outline-[#D9578B]',
    ghost:
      'text-[#75513F] hover:bg-[#FBE6EE]/50 hover:text-[#D9578B] focus-visible:outline-[#D9578B]',
  }[variant]

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
