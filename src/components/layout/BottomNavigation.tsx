import type { FC } from 'react'
import {
  HomeNavIcon,
  LettersNavIcon,
  MusicNavIcon,
  InspirationNavIcon,
  PhotosNavIcon,
} from '../icons/NavIcons'
import { NAVIGATION_ITEMS, type NavigationTab } from '../../types/navigation'

interface BottomNavigationProps {
  currentTab: NavigationTab
  onSelectTab: (tab: NavigationTab) => void
}

export const BottomNavigation: FC<BottomNavigationProps> = ({
  currentTab,
  onSelectTab,
}) => {
  const getIcon = (id: NavigationTab, active: boolean) => {
    switch (id) {
      case 'home':
        return <HomeNavIcon active={active} size={25} />
      case 'letters':
        return <LettersNavIcon active={active} size={25} />
      case 'music':
        return <MusicNavIcon active={active} size={25} />
      case 'inspiration':
        return <InspirationNavIcon active={active} size={25} />
      case 'photos':
        return <PhotosNavIcon active={active} size={25} />
    }
  }

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#FFFBF6]/95 backdrop-blur-md border-t border-[#E8D7C5] shadow-[0_-4px_16px_rgba(117,81,63,0.08)]"
    >
      <div className="max-w-md mx-auto px-2 pt-2 bottom-nav-safe flex items-center justify-around">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = currentTab === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              aria-label={item.ariaLabel}
              aria-current={isActive ? 'page' : undefined}
              className={`group flex flex-1 flex-col items-center justify-center min-h-[48px] py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[#D9578B] ${
                isActive
                  ? 'text-[#D9578B]'
                  : 'text-[#7A6B70] hover:text-[#75513F]'
              }`}
            >
              <div
                className={`transition-transform duration-200 ${
                  isActive ? 'scale-110 -translate-y-0.5' : 'group-hover:scale-105'
                }`}
              >
                {getIcon(item.id, isActive)}
              </div>
              <span
                className={`text-[11px] tracking-tight mt-1 transition-all duration-200 ${
                  isActive
                    ? 'font-bold font-heading text-[#D9578B]'
                    : 'font-medium font-sans text-[#7A6B70]'
                }`}
              >
                {item.label}
              </span>
              {/* Indicador de pestaña activa tipo detalle de papel */}
              <div
                className={`w-1.5 h-1.5 rounded-full mt-0.5 transition-all duration-200 ${
                  isActive ? 'bg-[#D9578B] scale-100 opacity-100' : 'bg-transparent scale-0 opacity-0'
                }`}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
