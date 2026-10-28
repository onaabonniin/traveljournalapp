import { useState, type FC } from 'react'
import {
  JOURNALING_WEEKS_2027,
  JOURNALING_MONTHS_2027,
} from '../../content/journalingWeeksData'
import { PaperCard } from '../../components/ui/PaperCard'

const STORAGE_KEY = 'georgina_journaling_weeks_2027'

function getInitialCompletedWeeks(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) {
      const validIds = new Set(JOURNALING_WEEKS_2027.map((w) => w.id))
      return new Set(parsed.filter((id) => typeof id === 'string' && validIds.has(id)))
    }
  } catch {
    // en caso de dato inválido en localStorage
  }
  return new Set()
}

function getEncouragingMessage(completed: number, total: number): string {
  if (completed === 0) {
    return 'Tu diario te está esperando para cuando te apetezca empezar ✍️💗'
  }
  const ratio = completed / total
  if (ratio < 0.15) {
    return 'Un ratito para ti también cuenta 💗'
  }
  if (ratio < 0.35) {
    return 'Poco a poco estás guardando recuerdos de esta aventura ✨'
  }
  if (ratio < 0.6) {
    return 'Qué bonito ver cómo vas cuidando este espacio para ti 🌸'
  }
  if (ratio < 0.85) {
    return 'Mira todo el tiempo que has dedicado a escucharte 🥹'
  }
  return '¡Increíble, Georgina! Has llenado este año de momentos inolvidables 🎉❤️'
}

export const JournalingCalendar: FC = () => {
  const [completedWeeks, setCompletedWeeks] = useState<Set<string>>(getInitialCompletedWeeks)
  // Enero (0) abierto por defecto, Febrero a Diciembre (1 a 11) recogidos por defecto
  const [collapsedMonths, setCollapsedMonths] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {}
    for (let i = 1; i <= 11; i++) {
      initial[i] = true
    }
    return initial
  })

  const totalWeeks = JOURNALING_WEEKS_2027.length
  const completedCount = completedWeeks.size
  const progressPercent = Math.round((completedCount / totalWeeks) * 100)
  const encouragingMessage = getEncouragingMessage(completedCount, totalWeeks)

  const toggleWeek = (id: string) => {
    setCompletedWeeks((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)))
      } catch {
        // proteger contra errores de quota
      }
      return next
    })
  }

  const toggleMonthCollapse = (monthIndex: number) => {
    setCollapsedMonths((prev) => ({
      ...prev,
      [monthIndex]: !prev[monthIndex],
    }))
  }

  return (
    <section aria-label="Calendario de journaling" className="space-y-3.5 pt-1">
      {/* 1. Tarjeta principal con título, texto y barra de progreso */}
      <PaperCard
        tape={true}
        tapeColor="yellow"
        tapePosition="left"
        variant="cream"
        className="pt-6 pb-5 px-5 space-y-3 border-[#E8D7C5]"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl">✍️</span>
            <h3 className="text-lg font-heading font-bold text-[#332B2D]">
              Mi año de journaling ✍️💗
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] font-sans text-[#7A6B70] leading-relaxed">
            Marca cada semana en la que hayas escrito en tu journal. No hace falta que escribas todos los días ni que tus reflexiones sean largas ni perfectas. Lo importante es encontrar un ratito para ti, poner en orden tus pensamientos y guardar un pedacito de esta aventura. Al final del año podrás ver todas las semanas que has dedicado a ti misma. 💌
          </p>
        </div>

        {/* Resumen visual de progreso */}
        <div className="bg-[#FFF9F0] border border-[#E8D7C5] rounded-2xl p-4 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-heading font-bold">
            <span className="text-[#332B2D]">
              Semanas completadas: <strong className="text-[#D9578B] font-black">{completedCount}</strong> de {totalWeeks}
            </span>
            <span className="text-[#D9578B] bg-[#FBE6EE] px-2 py-0.5 rounded-full font-black">
              {progressPercent}%
            </span>
          </div>

          {/* Barra de progreso */}
          <div
            className="w-full h-3 bg-[#E8D7C5]/50 rounded-full overflow-hidden p-0.5"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progreso anual de journaling"
          >
            <div
              className="h-full bg-gradient-to-r from-[#F3B8CE] to-[#D9578B] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Frase cariñosa que evoluciona */}
          <p className="text-xs font-sans text-[#75513F] italic text-center pt-0.5">
            «{encouragingMessage}»
          </p>
        </div>
      </PaperCard>

      {/* 2. Lista de meses y semanas interactivas para 2027 */}
      <div className="space-y-2.5">
        {JOURNALING_MONTHS_2027.map((month) => {
          const isCollapsed = !!collapsedMonths[month.monthIndex]
          const monthCompletedCount = month.weeks.filter((w) =>
            completedWeeks.has(w.id)
          ).length

          return (
            <div
              key={month.monthIndex}
              className="bg-[#FFFBF6] border border-[#E8D7C5] rounded-2xl p-3 sm:p-3.5 space-y-2 transition-all shadow-xs"
            >
              {/* Encabezado del mes con botón para plegar/desplegar */}
              <button
                type="button"
                onClick={() => toggleMonthCollapse(month.monthIndex)}
                className="w-full flex items-center justify-between text-left cursor-pointer group select-none"
                aria-expanded={!isCollapsed}
                aria-label={`Ver semanas de ${month.monthName}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-heading font-black text-[#75513F] tracking-wider uppercase">
                    {month.title}
                  </span>
                  <span className="text-[11px] font-sans font-medium text-[#7A6B70] bg-[#FFF9F0] border border-[#E8D7C5]/70 px-2 py-0.5 rounded-md">
                    {monthCompletedCount}/{month.weeks.length}
                  </span>
                </div>

                <span className="text-xs text-[#7A6B70] group-hover:text-[#D9578B] transition-colors">
                  {isCollapsed ? '▼' : '▲'}
                </span>
              </button>

              {/* Casillas de semanas del mes */}
              {!isCollapsed && (
                <div className="space-y-1.5 pt-1">
                  {month.weeks.map((week) => {
                    const isChecked = completedWeeks.has(week.id)

                    return (
                      <div
                        key={week.id}
                        onClick={() => toggleWeek(week.id)}
                        onKeyDown={(e) => {
                          if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault()
                            toggleWeek(week.id)
                          }
                        }}
                        role="checkbox"
                        aria-checked={isChecked}
                        tabIndex={0}
                        className={`w-full flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all duration-150 cursor-pointer select-none active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-[#D9578B] ${isChecked
                            ? 'bg-[#FBE6EE]/60 border-[#F3B8CE] shadow-xs'
                            : 'bg-[#FFF9F0]/70 border-[#E8D7C5]/70 hover:border-[#D9578B]/40 hover:bg-[#FFF9F0]'
                          }`}
                      >
                        {/* Casilla de verificación con corazón/check rosa */}
                        <div
                          className={`w-5 h-5 shrink-0 rounded-md flex items-center justify-center transition-all ${isChecked
                              ? 'bg-[#D9578B] text-white shadow-xs scale-105'
                              : 'border-2 border-[#E8D7C5] bg-white'
                            }`}
                        >
                          {isChecked && (
                            <span className="text-[11px] leading-none font-bold">
                              ✓
                            </span>
                          )}
                        </div>

                        {/* Etiqueta con rango de fechas real */}
                        <span
                          className={`text-xs sm:text-[13px] font-sans flex-1 leading-snug transition-colors ${isChecked
                              ? 'text-[#332B2D] font-medium'
                              : 'text-[#7A6B70]'
                            }`}
                        >
                          {week.label}
                        </span>

                        {/* Pequeño detalle de corazón cuando está completada */}
                        {isChecked && (
                          <span className="text-xs text-[#D9578B] shrink-0 animate-scaleIn">
                            💗
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
