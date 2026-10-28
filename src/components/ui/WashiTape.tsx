import type { FC } from 'react'

interface WashiTapeProps {
  color?: 'pink' | 'kraft' | 'yellow'
  rotation?: 'left' | 'right' | 'none'
  className?: string
  width?: string
}

export const WashiTape: FC<WashiTapeProps> = ({
  color = 'pink',
  rotation = 'none',
  className = '',
  width = 'w-24',
}) => {
  const colorClass =
    color === 'pink'
      ? 'washi-tape-pink border-t border-b border-pink-200/50'
      : color === 'kraft'
        ? 'washi-tape-kraft border-t border-b border-amber-900/20'
        : 'washi-tape-yellow border-t border-b border-yellow-300/40'

  const rotationClass =
    rotation === 'left'
      ? '-rotate-2'
      : rotation === 'right'
        ? 'rotate-2'
        : 'rotate-0'

  return (
    <div
      aria-hidden="true"
      className={`h-4.5 ${width} ${colorClass} ${rotationClass} rounded-[2px] opacity-90 transition-transform ${className}`}
      style={{
        // Borde dentado artesanal en los laterales con clip-path sutil
        maskImage:
          'linear-gradient(to right, transparent 0px, black 3px, black calc(100% - 3px), transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0px, black 3px, black calc(100% - 3px), transparent 100%)',
      }}
    />
  )
}
