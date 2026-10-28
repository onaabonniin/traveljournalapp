import { useEffect, type FC } from 'react'
import { WELCOME_LETTER_DATA } from '../../content/welcomeLetterData'
import { PaperCard } from '../../components/ui/PaperCard'
import { Button } from '../../components/ui/Button'

interface WelcomeLetterViewProps {
  onClose: () => void
}

export const WelcomeLetterView: FC<WelcomeLetterViewProps> = ({ onClose }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="space-y-4 px-4 pb-8 animate-fadeIn">
      {/* Barra superior de volver */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[#75513F] hover:text-[#D9578B] py-1.5 px-3 rounded-full bg-[#FFFBF6] border border-[#E8D7C5] transition-colors cursor-pointer shadow-sm"
          aria-label="Volver a la pantalla de inicio"
        >
          <span className="text-base leading-none">←</span>
          <span>Volver a inicio</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          className="text-xs font-heading font-medium text-[#7A6B70] hover:text-[#D9578B] py-1 px-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Cerrar ✕
        </button>
      </div>

      {/* Carta de bienvenida con diseño scrapbook cálido */}
      <PaperCard
        tape={true}
        tapeColor="pink"
        tapePosition="center"
        variant="cream"
        className="pt-7 pb-6 px-5 sm:px-7 space-y-4 border-[#E8D7C5] shadow-[0_6px_22px_-3px_rgba(117,81,63,0.12)]"
      >
        {/* Cabecera de la carta */}
        <div className="text-center space-y-1.5 border-b border-dashed border-[#E8D7C5] pb-4">
          <span className="inline-block text-[11px] uppercase tracking-wider font-heading font-black text-[#D9578B] bg-[#FBE6EE] px-3 py-0.5 rounded-full">
            Carta especial de bienvenida 💌
          </span>

          <h1 className="text-xl sm:text-2xl font-heading font-bold text-[#332B2D] leading-tight pt-1">
            {WELCOME_LETTER_DATA.title}
          </h1>

          <p className="font-heading font-semibold text-xs sm:text-sm text-[#75513F] italic">
            {WELCOME_LETTER_DATA.subtitle}
          </p>
        </div>

        {/* Texto completo de la carta */}
        <div className="space-y-3.5 font-sans text-sm sm:text-[15px] text-[#332B2D] leading-relaxed pt-1">
          {WELCOME_LETTER_DATA.paragraphs.map((paragraph, index) => {
            const isLast = index === WELCOME_LETTER_DATA.paragraphs.length - 1
            return (
              <p
                key={index}
                className={`leading-relaxed ${
                  isLast
                    ? 'font-heading font-bold text-[#D9578B] pt-2 text-base'
                    : ''
                }`}
              >
                {paragraph}
              </p>
            )
          })}
        </div>
      </PaperCard>

      {/* Botón inferior para cerrar */}
      <div className="pt-2">
        <Button
          variant="primary"
          size="md"
          onClick={onClose}
          className="w-full justify-center shadow-md"
        >
          Cerrar carta y volver a inicio ♡
        </Button>
      </div>
    </div>
  )
}
