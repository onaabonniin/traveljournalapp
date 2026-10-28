import { useState } from 'react'
import { AppLayout } from './components/layout/AppLayout'
import { HomeView } from './features/home/HomeView'
import { LettersView } from './features/letters/LettersView'
import { MusicView } from './features/music/MusicView'
import { PlansView } from './features/plans/PlansView'
import { PhotosView } from './features/photos/PhotosView'
import type { NavigationTab } from './types/navigation'

function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home')

  const renderCurrentView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView onNavigate={setCurrentTab} />
      case 'letters':
        return <LettersView />
      case 'music':
        return <MusicView />
      case 'inspiration':
        return <PlansView />
      case 'photos':
        return <PhotosView />
      default:
        return <HomeView onNavigate={setCurrentTab} />
    }
  }

  return (
    <AppLayout currentTab={currentTab} onSelectTab={setCurrentTab}>
      {renderCurrentView()}
    </AppLayout>
  )
}

export default App
