import { useState, useEffect, type FC } from 'react'
import { Header } from '../../components/layout/Header'
import { PaperCard } from '../../components/ui/PaperCard'
import { Button } from '../../components/ui/Button'
import { LETTERS_DATA } from '../../content/lettersData'
import { isLetterUnlocked, getCurrentAppDate } from '../../lib/dates/unlockDates'
import { LetterDetailView } from './LetterDetailView'

export const LettersView: FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const [currentDate, setCurrentDate] = useState<Date>(getCurrentAppDate)

  // Actualiza la fecha periódicamente para reflejar cambios en tiempo real
  useEffect(() => {
    const update = () => setCurrentDate(getCurrentAppDate())
    const interval = setInterval(update, 60000)
    window.addEventListener('focus', update)
    return () => {
      clearInterval(interval)
      window.removeEventListener('focus', update)
    }
  }, [])

  // Si hay un mes seleccionado, verificar que sea válido y esté desbloqueado
  const activeLetter = selectedMonth
    ? LETTERS_DATA.find((l) => l.monthNumber === selectedMonth)
    : null

  const isSelectedUnlocked =
    activeLetter && isLetterUnlocked(activeLetter.monthNumber, currentDate)

  // Si está abierta una carta desbloqueada, mostrar la vista de lectura completa
  if (activeLetter && isSelectedUnlocked) {
    return (
      <div className="space-y-4">
        <Header
          title={activeLetter.fullMonthTitle}
          subtitle={`«${activeLetter.title}»`}
        />
        <LetterDetailView
          letter={activeLetter}
          onClose={() => setSelectedMonth(null)}
        />
      </div>
    )
  }

  const handleOpenLetter = (monthNumber: number) => {
    // Protección estricta: si la carta no está desbloqueada, no se permite abrir
    if (!isLetterUnlocked(monthNumber, currentDate)) {
      return
    }
    setSelectedMonth(monthNumber)
  }

  return (
    <div className="space-y-4">
      <Header
        title="Cartas y Retos"
        subtitle="12 sobres para acompañarte cada mes"
      />

      <div className="px-4 space-y-4">
        {/* Nota explicativa de scrapbook con texto solicitado */}
        <div className="bg-[#FFFBF6] border border-[#E8D7C5] rounded-2xl p-4 text-xs text-[#7A6B70] space-y-1.5 shadow-sm">
          <p className="font-heading font-bold text-[#332B2D] flex items-center gap-1.5 text-sm">
            <span>📮</span> Un sobre para cada etapa del viaje
          </p>
          <p className="font-sans text-xs sm:text-[13px] text-[#7A6B70] leading-relaxed">
            Cada mes se desbloqueará una nueva carta, escrita con todo el cariño del mundo para que me sientas un poquito más cerca, estés donde estés. Dentro encontrarás un mensaje solo para ti y cuatro pequeños retos para animarte a salir de tu zona de confort, descubrir Australia y aprovechar al máximo esta aventura. 💌✨
          </p>
        </div>

        {/* Lista de las 12 cartas mensuales */}
        <div className="space-y-3 pb-6">
          {LETTERS_DATA.map((letter) => {
            const isUnlocked = isLetterUnlocked(letter.monthNumber, currentDate)

            return (
              <PaperCard
                key={letter.monthNumber}
                variant={isUnlocked ? 'cream' : 'ivory'}
                className={`transition-all duration-200 ${
                  isUnlocked
                    ? 'border-[#F3B8CE] hover:shadow-md cursor-pointer'
                    : 'opacity-85 border-dashed border-[#E8D7C5] bg-[#FFF9F0]/70 cursor-default'
                }`}
                onClick={isUnlocked ? () => handleOpenLetter(letter.monthNumber) : undefined}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    {/* Identificador del mes */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-xs font-heading font-black px-2 py-0.5 rounded-md ${
                          isUnlocked
                            ? 'text-[#D9578B] bg-[#FBE6EE]'
                            : 'text-[#75513F] bg-[#E8D7C5]/50'
                        }`}
                      >
                        Mes {letter.monthNumber}
                      </span>
                      <h3 className="text-base font-heading font-bold text-[#332B2D] leading-tight truncate">
                        {letter.fullMonthTitle}
                      </h3>
                    </div>

                    {/* Título exacto de la carta */}
                    <p className="text-xs sm:text-sm font-heading font-semibold text-[#75513F] italic leading-snug">
                      «{letter.title}»
                    </p>

                    {/* Estado o resumen */}
                    <p className="text-[11px] font-sans text-[#7A6B70] pt-0.5">
                      {isUnlocked ? (
                        <span className="text-[#D9578B] font-medium flex items-center gap-1">
                          <span>✨</span> Carta disponible · 4 retos semanales
                        </span>
                      ) : (
                        <span className="text-[#75513F] flex items-center gap-1">
                          <span>🔒</span> Se desbloquea el {letter.unlockDateFormatted}
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Acción según estado de desbloqueo */}
                  <div className="shrink-0 text-right pt-0.5">
                    {isUnlocked ? (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOpenLetter(letter.monthNumber)
                        }}
                      >
                        Abrir carta ♡
                      </Button>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-heading font-medium text-[#75513F] bg-[#E8D7C5]/60 px-2.5 py-1.5 rounded-full select-none">
                        🔒 Bloqueada
                      </span>
                    )}
                  </div>
                </div>
              </PaperCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}
