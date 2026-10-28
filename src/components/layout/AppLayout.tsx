import type { FC, ReactNode } from 'react'
import { BottomNavigation } from './BottomNavigation'
import type { NavigationTab } from '../../types/navigation'

interface AppLayoutProps {
  children: ReactNode
  currentTab: NavigationTab
  onSelectTab: (tab: NavigationTab) => void
}

export const AppLayout: FC<AppLayoutProps> = ({
  children,
  currentTab,
  onSelectTab,
}) => {
  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#332B2D] flex justify-center selection:bg-[#F3B8CE] selection:text-[#332B2D]">
      {/* Contenedor mobile-first simulando un diario personal */}
      <div className="w-full max-w-md min-h-screen bg-[#FFF9F0] flex flex-col relative sm:border-x sm:border-[#E8D7C5]/80 sm:shadow-[0_0_30px_rgba(117,81,63,0.06)]">
        {/* Contenido principal con espacio inferior seguro para la barra de navegación */}
        <main className="flex-1 pb-safe overflow-y-auto">
          {children}
        </main>

        {/* Navegación inferior fija */}
        <BottomNavigation
          currentTab={currentTab}
          onSelectTab={onSelectTab}
        />
      </div>
    </div>
  )
}
