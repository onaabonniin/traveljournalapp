import { useEffect, type FC } from 'react'
import type { MonthLetter } from '../../content/lettersData'
import { PaperCard } from '../../components/ui/PaperCard'
import { Button } from '../../components/ui/Button'

interface LetterDetailViewProps {
  letter: MonthLetter
  onClose: () => void
}

export const LetterDetailView: FC<LetterDetailViewProps> = ({ letter, onClose }) => {
  // Scroll to top on mount so the user reads from the beginning
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="space-y-4 px-4 pb-8 animate-fadeIn">
      {/* Barra superior de navegación / volver */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold text-[#75513F] hover:text-[#D9578B] py-1.5 px-2.5 rounded-full bg-[#FFFBF6] border border-[#E8D7C5] transition-colors cursor-pointer shadow-sm"
          aria-label="Volver a la lista de cartas"
        >
          <span className="text-base leading-none">←</span>
          <span>Volver a las cartas</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          className="text-xs font-heading font-medium text-[#7A6B70] hover:text-[#D9578B] py-1 px-2 rounded-lg transition-colors cursor-pointer"
        >
          Cerrar ✕
        </button>
      </div>

      {/* 1. Carta principal con diseño scrapbook */}
      <PaperCard
        tape={true}
        tapeColor="pink"
        tapePosition="center"
        variant="cream"
        className="pt-7 pb-6 px-5 sm:px-6 space-y-4 border-[#E8D7C5] shadow-[0_6px_20px_-3px_rgba(117,81,63,0.12)]"
      >
        {/* Cabecera de la carta */}
        <div className="text-center space-y-1.5 border-b border-dashed border-[#E8D7C5] pb-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider font-heading font-black text-[#D9578B] bg-[#FBE6EE] px-2.5 py-0.5 rounded-full">
              Mes {letter.monthNumber} · 2027
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#332B2D] leading-tight">
            {letter.fullMonthTitle}
          </h2>

          <p className="font-heading font-semibold text-base sm:text-lg text-[#75513F] italic">
            «{letter.title}»
          </p>
        </div>

        {/* Cuerpo de la carta con párrafos respetados */}
        <div className="space-y-3.5 font-sans text-sm sm:text-[15px] text-[#332B2D] leading-relaxed pt-1">
          {letter.paragraphs.map((paragraph, index) => {
            const isLast = index === letter.paragraphs.length - 1
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

      {/* 2. Sección de los 4 retos semanales del mes */}
      <PaperCard
        tape={true}
        tapeColor="kraft"
        tapePosition="left"
        variant="ivory"
        className="pt-6 pb-5 px-5 sm:px-6 space-y-3.5 border-[#E8D7C5]"
      >
        <div className="border-b border-[#E8D7C5]/70 pb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌿</span>
            <h3 className="text-base sm:text-lg font-heading font-bold text-[#332B2D]">
              {letter.challengesTitle}
            </h3>
          </div>
          <p className="text-xs font-sans text-[#7A6B70] mt-0.5">
            Cuatro pequeños retos para salir de tu zona de confort y vivir al máximo este mes.
          </p>
        </div>

        {/* Lista de los 4 retos */}
        <div className="space-y-2.5 pt-1">
          {letter.challenges.map((challenge) => (
            <div
              key={challenge.week}
              className="bg-[#FFFBF6] border border-[#E8D7C5]/90 rounded-xl p-3 flex items-start gap-3 transition-colors hover:border-[#F3B8CE]"
            >
              <span className="shrink-0 text-xs font-heading font-bold text-[#75513F] bg-[#FBE6EE] border border-[#F3B8CE]/60 px-2 py-1 rounded-md">
                {challenge.weekLabel}
              </span>
              <p className="text-xs sm:text-sm font-sans text-[#332B2D] leading-snug pt-0.5">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </PaperCard>

      {/* 3. Botón inferior para cerrar la carta */}
      <div className="pt-2">
        <Button
          variant="primary"
          size="md"
          onClick={onClose}
          className="w-full justify-center shadow-md"
        >
          Cerrar carta ♡
        </Button>
      </div>
    </div>
  )
}
