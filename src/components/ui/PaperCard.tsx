import type { FC, ReactNode } from 'react'
import { WashiTape } from './WashiTape'

interface PaperCardProps {
  children: ReactNode
  className?: string
  tape?: boolean
  tapeColor?: 'pink' | 'kraft' | 'yellow'
  tapePosition?: 'center' | 'left' | 'right'
  variant?: 'ivory' | 'cream' | 'pink-soft' | 'lined'
  onClick?: () => void
}

export const PaperCard: FC<PaperCardProps> = ({
  children,
  className = '',
  tape = false,
  tapeColor = 'pink',
  tapePosition = 'center',
  variant = 'cream',
  onClick,
}) => {
  const bgStyles = {
    ivory: 'bg-[#FFF9F0] border-[#E8D7C5]',
    cream: 'bg-[#FFFBF6] border-[#E8D7C5]/80',
    'pink-soft': 'bg-[#FBE6EE]/80 border-[#F3B8CE]',
    lined:
      'bg-[#FFFBF6] border-[#E8D7C5] bg-[linear-gradient(transparent_27px,#E8D7C5_28px)] bg-[size:100%_28px]',
  }[variant]

  const tapePosClasses = {
    center: 'left-1/2 -translate-x-1/2',
    left: 'left-6',
    right: 'right-6',
  }[tapePosition]

  const tapeRotation =
    tapePosition === 'left' ? 'left' : tapePosition === 'right' ? 'right' : 'none'

  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      onClick={onClick}
      className={`relative rounded-2xl border p-5 text-left transition-all duration-200 ${bgStyles} ${
        onClick
          ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(117,81,63,0.14)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[#D9578B]'
          : 'shadow-[0_4px_14px_-2px_rgba(117,81,63,0.08)]'
      } ${className}`}
    >
      {tape && (
        <div
          className={`absolute -top-2.5 z-10 pointer-events-none ${tapePosClasses}`}
        >
          <WashiTape color={tapeColor} rotation={tapeRotation} />
        </div>
      )}
      {children}
    </Component>
  )
}
