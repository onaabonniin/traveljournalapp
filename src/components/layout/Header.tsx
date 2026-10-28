import type { FC } from 'react'
import logoImg from '../../features/logo.png'

interface HeaderProps {
  title: string
  subtitle?: string
  showAvatar?: boolean
}

export const Header: FC<HeaderProps> = ({
  title,
  subtitle,
  showAvatar = true,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F0]/95 backdrop-blur-sm border-b border-[#E8D7C5]/70 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-heading font-bold text-[#332B2D] leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs font-sans text-[#7A6B70] leading-none mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {showAvatar && (
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-white shadow-[0_2px_6px_rgba(51,43,45,0.15)] overflow-hidden bg-[#F3B8CE] transition-transform hover:scale-105">
              <img
                src={logoImg}
                alt="Avatar de Georgina"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
