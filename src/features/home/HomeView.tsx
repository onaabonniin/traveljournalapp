import { useState, type FC } from 'react'
import headerImg from '../header.png'
import { PaperCard } from '../../components/ui/PaperCard'
import { Button } from '../../components/ui/Button'
import type { NavigationTab } from '../../types/navigation'
import { WelcomeLetterView } from './WelcomeLetterView'
import { JournalingCalendar } from './JournalingCalendar'
import { SONGS_DATA } from '../music/musicData'

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void
}

function getFormattedDate(): string {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date())
}

export const HomeView: FC<HomeViewProps> = ({ onNavigate }) => {
  const [todayFormatted] = useState(getFormattedDate)
  const [isWelcomeLetterOpen, setIsWelcomeLetterOpen] = useState(false)

  // Si la carta especial de bienvenida está abierta, mostrar su vista completa
  if (isWelcomeLetterOpen) {
    return <WelcomeLetterView onClose={() => setIsWelcomeLetterOpen(false)} />
  }

  return (
    <div className="px-4 py-2 space-y-5 pb-8">
      {/* 1. Cabecera visual de marca: Georgina's Travel Journal */}
      <section aria-label="Cabecera principal" className="pt-2 text-center">
        <div className="w-full max-w-[280px] xs:max-w-[310px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-[0_6px_20px_-4px_rgba(117,81,63,0.1)] bg-[#FFF9F0] border border-[#E8D7C5]/60 transition-transform duration-300 hover:scale-[1.01]">
          <img
            src={headerImg}
            alt="Georgina's Travel Journal"
            className="w-full h-full object-contain select-none"
            loading="eager"
          />
        </div>
      </section>

      {/* 2. Fecha actual y mensaje de bienvenida */}
      <section className="text-center space-y-1.5">
        <p className="text-xs uppercase tracking-widest text-[#75513F] font-bold">
          {todayFormatted}
        </p>
        <h2 className="text-2xl font-heading font-bold text-[#332B2D]">
          ¡Hola, Georgina! ♡
        </h2>
        <p className="text-sm font-sans text-[#7A6B70] max-w-xs mx-auto leading-relaxed">
          Hola Georgina, bienvenida a tu diario de viaje, aquí te acompañaré durante toda tu aventura en Australia.
        </p>
      </section>

      {/* 3. Carta especial de bienvenida (vista previa con desenfoque progresivo al final) */}
      <PaperCard
        tape={true}
        tapeColor="pink"
        tapePosition="center"
        variant="cream"
        className="pt-6 pb-5 px-5 space-y-3.5 border-[#E8D7C5] shadow-[0_4px_16px_-2px_rgba(117,81,63,0.08)]"
      >
        {/* Cabecera de la tarjeta */}
        <div className="flex items-center justify-between border-b border-dashed border-[#E8D7C5] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-lg">✉️</span>
            <h3 className="text-base font-heading font-bold text-[#332B2D]">
              Una carta para ti, mi bebé 💌
            </h3>
          </div>
          <span className="text-[11px] font-heading font-black text-[#D9578B] bg-[#FBE6EE] px-2.5 py-0.5 rounded-full">
            Especial
          </span>
        </div>

        {/* Primeras frases de la carta con desenfoque progresivo en la parte inferior */}
        <div className="relative overflow-hidden max-h-[140px] text-xs sm:text-[13px] font-sans text-[#332B2D] leading-relaxed space-y-2">
          <p className="font-heading font-bold text-[#D9578B]">
            Hola, mi bebé. 🥹❤️
          </p>
          <p>
            Si estás leyendo esto es porque hoy es 1 de noviembre, ¡¡¡TU CUMPLEAÑOS!!! 🎂💗 Espero de corazón haber podido sacar un ratito para verte hoy, aunque solo sea un ratito, y que hayas pasado un día precioso, que te hayan mimado muchísimo y que hayas disfrutado de todos tus regalitos.
          </p>
          <p>
            Evidentemente, espero que te hayan gustado todos los regalos que te he hecho, pero tengo que confesarte una cosa: este es el que más ilusión me hacía darte y, probablemente, al que más tiempo, cariño e ilusión le he dedicado. Y es que, como bien sabes, estoy de camino a convertirme en desarrolladora de aplicaciones y, cuando me puse a pensar en qué podía regalarte decidí… ¡CREARTE UNA APLICACIÓN! Sí, bebé, como lo oyes. Te he creado una aplicación. Para ti...
          </p>

          {/* Efecto de desenfoque progresivo sólo al final de la vista previa */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#FFFBF6] via-[#FFFBF6]/85 to-transparent pointer-events-none backdrop-blur-[1px]" />
        </div>

        {/* Botón visible y bonito para abrir la carta completa */}
        <div className="pt-1 text-center">
          <Button
            variant="primary"
            size="md"
            onClick={() => setIsWelcomeLetterOpen(true)}
            className="w-full sm:w-auto shadow-md"
          >
            Abrir mi carta 💌
          </Button>
        </div>
      </PaperCard>

      {/* 4. Calendario anual de journaling (2027) */}
      <JournalingCalendar />

      {/* 5. Accesos rápidos organizados: «Explora tu diario ✨» */}
      <section aria-label="Explora tu diario" className="space-y-2.5 pt-2">
        <h3 className="text-xs uppercase tracking-wider font-bold text-[#75513F] px-1 flex items-center gap-1.5">
          <span>Explora tu diario ✨</span>
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <PaperCard
            onClick={() => onNavigate('letters')}
            variant="cream"
            className="p-3.5 space-y-1.5"
          >
            <span className="text-2xl" role="img" aria-label="Cartas">💌</span>
            <h4 className="text-sm font-heading font-bold text-[#332B2D]">
              Cartas del año 💌
            </h4>
            <p className="text-[11px] font-sans text-[#7A6B70] leading-tight">
              12 cartas y retos mensuales para abrir mes a mes.
            </p>
          </PaperCard>

          <PaperCard
            onClick={() => onNavigate('music')}
            variant="cream"
            className="p-3.5 space-y-1.5"
          >
            <span className="text-2xl" role="img" aria-label="Música">🎧</span>
            <h4 className="text-sm font-heading font-bold text-[#332B2D]">
              Música 🎧
            </h4>
            <p className="text-[11px] font-sans text-[#7A6B70] leading-tight">
              {SONGS_DATA.length} canciones que me recuerdan a ti.
            </p>
          </PaperCard>

          <PaperCard
            onClick={() => onNavigate('inspiration')}
            variant="cream"
            className="p-3.5 space-y-1.5"
          >
            <span className="text-2xl" role="img" aria-label="Planes">✈️</span>
            <h4 className="text-sm font-heading font-bold text-[#332B2D]">
              Planes ✈️
            </h4>
            <p className="text-[11px] font-sans text-[#7A6B70] leading-tight">
              35 aventuras y rincones mágicos en Australia.
            </p>
          </PaperCard>

          <PaperCard
            onClick={() => onNavigate('photos')}
            variant="cream"
            className="p-3.5 space-y-1.5"
          >
            <span className="text-2xl" role="img" aria-label="Fotos">📸</span>
            <h4 className="text-sm font-heading font-bold text-[#332B2D]">
              Nuestras fotos 📸
            </h4>
            <p className="text-[11px] font-sans text-[#7A6B70] leading-tight">
              Álbum de recuerdos compartidos para tenernos cerca.
            </p>
          </PaperCard>
        </div>
      </section>
    </div>
  )
}
