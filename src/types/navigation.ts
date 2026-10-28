export type NavigationTab = 'home' | 'letters' | 'music' | 'inspiration' | 'photos'

export interface NavItem {
  id: NavigationTab
  label: string
  ariaLabel: string
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'home', label: 'Inicio', ariaLabel: 'Ir a Inicio' },
  { id: 'letters', label: 'Cartas', ariaLabel: 'Ir a Cartas mensuales' },
  { id: 'music', label: 'Música', ariaLabel: 'Ir a Canciones que me recuerdan a ti' },
  { id: 'inspiration', label: 'Planes', ariaLabel: 'Ir a Planes de Australia' },
  { id: 'photos', label: 'Fotos', ariaLabel: 'Ir a Galería de fotos' },
]
