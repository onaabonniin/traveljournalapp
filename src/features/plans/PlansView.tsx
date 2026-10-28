import { useState, useMemo, type FC } from 'react'
import { Header } from '../../components/layout/Header'
import {
  PLANS_DATA,
  PLAN_CATEGORIES,
  type PlanCategory,
  type PlanItem,
} from './plansData'

// Paleta de colores suave y distintiva para cada categoría de plan
const CATEGORY_STYLES: Record<
  Exclude<PlanCategory, 'Todos'>,
  { badge: string; text: string; dot: string; icon: string }
> = {
  Naturaleza: {
    badge: 'bg-[#EBF4EC] text-[#2F613A] border-[#C8E2CC]',
    text: 'text-[#2F613A]',
    dot: 'bg-[#2F613A]',
    icon: '🌿',
  },
  Animales: {
    badge: 'bg-[#FEF5E7] text-[#9A5A12] border-[#FADBB0]',
    text: 'text-[#9A5A12]',
    dot: 'bg-[#9A5A12]',
    icon: '🦘',
  },
  Aventura: {
    badge: 'bg-[#E8F3FA] text-[#1E5D88] border-[#BEDEF2]',
    text: 'text-[#1E5D88]',
    dot: 'bg-[#1E5D88]',
    icon: '🌊',
  },
  'Ciudades y cultura': {
    badge: 'bg-[#F5EDF8] text-[#71328C] border-[#E4CAEC]',
    text: 'text-[#71328C]',
    dot: 'bg-[#71328C]',
    icon: '🎭',
  },
  'Comida y bebida': {
    badge: 'bg-[#FDF0E9] text-[#A3431D] border-[#F7CFBD]',
    text: 'text-[#A3431D]',
    dot: 'bg-[#A3431D]',
    icon: '☕',
  },
}

export const PlansView: FC = () => {
  // Filtro activo, por defecto 'Todos'
  const [selectedCategory, setSelectedCategory] = useState<PlanCategory>('Todos')

  // Filtrado reactivo de los 35 planes
  const filteredPlans = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return PLANS_DATA
    }
    return PLANS_DATA.filter((plan) => plan.category === selectedCategory)
  }, [selectedCategory])

  // Conteo dinámico de planes por categoría
  const countByCategory = useMemo(() => {
    const counts: Record<PlanCategory, number> = {
      Todos: PLANS_DATA.length,
      Naturaleza: 0,
      Animales: 0,
      Aventura: 0,
      'Ciudades y cultura': 0,
      'Comida y bebida': 0,
    }
    for (const plan of PLANS_DATA) {
      counts[plan.category] = (counts[plan.category] || 0) + 1
    }
    return counts
  }, [])

  return (
    <div className="space-y-4 pb-8 select-none">
      <Header
        title="Planes en Australia"
        subtitle="35 aventuras y recuerdos inolvidables por vivir"
      />

      <div className="px-4 space-y-4">
        {/* Barra horizontal de filtros por categoría estilo chips */}
        <section aria-label="Filtros de categoría" className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#7A6B70] px-0.5">
            <span className="font-heading font-semibold text-[#75513F] uppercase tracking-wider text-[11px]">
              Explorar por categoría
            </span>
            <span className="text-[11px]">
              {filteredPlans.length} {filteredPlans.length === 1 ? 'plan' : 'planes'}
            </span>
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar scroll-smooth"
            role="tablist"
            aria-label="Categorías de planes"
          >
            {PLAN_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat
              const count = countByCategory[cat]

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`group shrink-0 inline-flex items-center gap-1.5 text-xs font-heading font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#D9578B] text-white border-[#D9578B] shadow-[0_2px_8px_rgba(217,87,139,0.35)] scale-[1.02]'
                      : 'bg-[#FFFBF6] text-[#75513F] border-[#E8D7C5] hover:bg-[#FBE6EE]/60 hover:border-[#F3B8CE]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold transition-colors ${
                      isSelected
                        ? 'bg-white/25 text-white'
                        : 'bg-[#F2E5D7] text-[#75513F] group-hover:bg-[#FBE6EE]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* Lista de fichas visuales de cada plan */}
        <section aria-label="Lista de planes" className="space-y-4">
          {filteredPlans.map((plan: PlanItem) => {
            const catStyle = CATEGORY_STYLES[plan.category]

            return (
              <article
                key={plan.id}
                className="bg-[#FFFBF6] border border-[#E8D7C5] rounded-2xl overflow-hidden p-3 shadow-[0_4px_16px_-2px_rgba(117,81,63,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(117,81,63,0.14)]"
              >
                {/* Contenedor fotográfico con marco scrapbook */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-[#F7F2EB] to-[#EFE7DC] border border-[#E8D7C5]/70">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />

                  {/* Número de plan (#1 a #35) tipo sello postal */}
                  <div className="absolute top-2.5 left-2.5 z-10 bg-[#FFF9F0]/95 backdrop-blur-sm border border-[#E8D7C5] text-[#75513F] text-[11px] font-heading font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    #{plan.id}
                  </div>

                  {/* Etiqueta de categoría en la fotografía */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-heading font-semibold border backdrop-blur-sm shadow-sm ${catStyle.badge}`}
                    >
                      <span aria-hidden="true">{catStyle.icon}</span>
                      <span>{plan.category}</span>
                    </span>
                  </div>
                </div>

                {/* Contenido descriptivo del plan */}
                <div className="pt-3 px-1 space-y-1.5">
                  <h3 className="font-heading font-bold text-base text-[#332B2D] leading-snug">
                    {plan.title}
                  </h3>

                  <p className="font-sans text-xs text-[#7A6B70] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Crédito sutil de la fotografía respetando autoría y licencia abierta */}
                  <div className="pt-1.5 flex items-center justify-between text-[10px] text-[#A89890] border-t border-[#E8D7C5]/40">
                    <span className="truncate max-w-[240px]">
                      Foto: {plan.photoAuthor}
                    </span>
                    <span className="shrink-0 font-medium text-[#75513F]/70">
                      {plan.photoLicense}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </section>

        {/* Nota cálida de cierre de sección */}
        <div className="text-center pt-2 pb-4 space-y-1 text-xs text-[#7A6B70]">
          <p className="font-handwriting text-2xl text-[#332B2D]">
            35 aventuras soñadas para ti ♡
          </p>
          <p className="font-sans text-[11px]">
            Australia está llena de magia esperando tus pasos.
          </p>
        </div>
      </div>
    </div>
  )
}
