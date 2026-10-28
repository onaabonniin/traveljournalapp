import { useState, useEffect, useRef, useCallback, type FC } from 'react'
import { Header } from '../../components/layout/Header'
import { WashiTape } from '../../components/ui/WashiTape'
import { PHOTOS_DATA, createShuffledDeck, type PhotoMemory } from './photosData'

const TAPE_COLORS: readonly ('pink' | 'kraft' | 'yellow')[] = ['pink', 'kraft', 'yellow'] as const
const ROTATION_CLASSES = ['-rotate-1', 'rotate-1', '-rotate-0.5', 'rotate-0.5', 'rotate-0'] as const

export const PhotosView: FC = () => {
  // Baraja aleatoria completa sin repetición por ciclo
  const [deck, setDeck] = useState<PhotoMemory[]>(() => createShuffledDeck())
  const [currentIndex, setCurrentIndex] = useState(0)

  // Estado para la transición visual suave
  const [isFading, setIsFading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Estilo visual artesanal rotativo por cada cambio
  const [tapeIndex, setTapeIndex] = useState(0)
  const [rotationIndex, setRotationIndex] = useState(0)

  // Referencia para evitar pulsaciones múltiples durante la transición
  const isTransitioningRef = useRef(false)

  const currentPhoto = deck[currentIndex] ?? PHOTOS_DATA[0]

  // Precargar en segundo plano la siguiente fotografía del ciclo para una transición instantánea
  useEffect(() => {
    const nextIndex = currentIndex + 1 < deck.length ? currentIndex + 1 : 0
    const nextPhoto = deck[nextIndex]
    if (nextPhoto?.src) {
      const preloadImg = new Image()
      preloadImg.src = nextPhoto.src
    }
  }, [currentIndex, deck])

  // Manejar el cambio a la siguiente foto sin repetición hasta agotar el ciclo
  const handleNextPhoto = useCallback(() => {
    if (isTransitioningRef.current || deck.length <= 1) return

    isTransitioningRef.current = true
    setIsFading(true)

    setTimeout(() => {
      let nextIndex = currentIndex + 1

      // Si se han mostrado todas las fotos del ciclo actual, generar una nueva baraja aleatoria
      if (nextIndex >= deck.length) {
        const lastPhotoId = deck[deck.length - 1]?.id
        const newDeck = createShuffledDeck(lastPhotoId)
        setDeck(newDeck)
        nextIndex = 0
      }

      setCurrentIndex(nextIndex)
      setHasError(false)
      setIsLoading(false)

      setTapeIndex((prev) => (prev + 1) % TAPE_COLORS.length)
      setRotationIndex((prev) => (prev + 1) % ROTATION_CLASSES.length)

      setTimeout(() => {
        setIsFading(false)
        isTransitioningRef.current = false
      }, 50)
    }, 180)
  }, [currentIndex, deck])

  const handleImageError = () => {
    setHasError(true)
    setIsLoading(false)
    isTransitioningRef.current = false
  }

  const handleCardClick = () => {
    if (typeof window !== 'undefined' && 'navigator' in window && navigator.vibrate) {
      try {
        navigator.vibrate(12)
      } catch {
        // Ignorar si el dispositivo no soporta vibración
      }
    }
    handleNextPhoto()
  }

  const currentTapeColor = TAPE_COLORS[tapeIndex]
  const currentRotation = ROTATION_CLASSES[rotationIndex]

  return (
    <div className="space-y-4 pb-6 select-none">
      <Header
        title="Nuestro rinconcito de recuerdos"
        subtitle="Una pequeña galería de recuerdos juntis 💗"
      />

      <div className="px-4 space-y-3">
        {/* Tarjeta interactiva tipo marco Polaroid */}
        <section aria-label="Fotografía del diario">
          <div
            className={`relative mx-auto transition-transform duration-300 ease-out ${currentRotation}`}
          >
            {/* Cinta adhesiva washi tape superior */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none drop-shadow-sm">
              <WashiTape color={currentTapeColor} width="w-28" />
            </div>

            {/* Contenedor interactivo tipo foto Polaroid */}
            <div
              role="button"
              tabIndex={0}
              onClick={handleCardClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleCardClick()
                }
              }}
              aria-label="Toca la foto para descubrir otro recuerdo"
              className="group cursor-pointer block w-full bg-[#FFFDF9] border border-[#E8D7C5] p-3 pb-4 rounded-2xl shadow-[0_12px_32px_-6px_rgba(117,81,63,0.18),0_4px_12px_rgba(117,81,63,0.08)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(117,81,63,0.22)] active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-[#D9578B] overflow-hidden"
            >
              {/* Área del marco fotográfico */}
              <div className="relative w-full aspect-[4/5] max-h-[56vh] bg-gradient-to-b from-[#F7F2EB] to-[#ECE3D6] rounded-xl overflow-hidden border border-[#E8D7C5]/70 flex items-center justify-center">
                {/* Fondo sutil desenfocado de la misma foto para armonizar formatos */}
                {!hasError && currentPhoto && (
                  <img
                    src={currentPhoto.src}
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30 pointer-events-none transition-opacity duration-300 ${
                      isFading ? 'opacity-10' : 'opacity-30'
                    }`}
                  />
                )}

                {/* Fotografía principal nítida sin deformación */}
                {!hasError && currentPhoto ? (
                  <img
                    key={currentPhoto.id}
                    src={currentPhoto.src}
                    alt={`Recuerdo fotográfico: ${currentPhoto.originalName}`}
                    loading="eager"
                    decoding="async"
                    onError={handleImageError}
                    onLoad={() => setIsLoading(false)}
                    className={`relative z-10 w-full h-full object-contain select-none transition-all duration-300 ease-out ${
                      isFading || isLoading
                        ? 'opacity-30 scale-[0.98] blur-[1px]'
                        : 'opacity-100 scale-100 blur-0'
                    }`}
                  />
                ) : (
                  <div className="relative z-10 p-6 text-center space-y-2">
                    <span className="text-4xl block" role="img" aria-label="Corazón">
                      💌
                    </span>
                    <p className="text-sm font-heading font-semibold text-[#332B2D]">
                      Un recuerdo especial
                    </p>
                    <p className="text-xs text-[#7A6B70]">
                      Toca aquí para descubrir otra fotografía de nuestro álbum.
                    </p>
                  </div>
                )}

                {/* Esquinas decorativas de fijación tipo álbum vintage */}
                <div
                  aria-hidden="true"
                  className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C6A17B]/60 rounded-tl-sm pointer-events-none z-10"
                />
                <div
                  aria-hidden="true"
                  className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C6A17B]/60 rounded-tr-sm pointer-events-none z-10"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C6A17B]/60 rounded-bl-sm pointer-events-none z-10"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C6A17B]/60 rounded-br-sm pointer-events-none z-10"
                />

                {/* Efecto hover suave */}
                <div className="absolute inset-0 bg-[#332B2D]/0 group-hover:bg-[#332B2D]/5 transition-colors duration-200 pointer-events-none z-10" />
              </div>

              {/* Pie de foto estilo Polaroid con indicación táctil */}
              <div className="pt-3 px-2 text-center">
                <p className="font-handwriting text-2xl text-[#332B2D] leading-tight">
                  Toca la foto para descubrir otro recuerdo ✨
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contador discreto del álbum */}
        <div className="text-center pt-1">
          <p className="text-[11px] font-sans text-[#7A6B70]">
            Recuerdo {currentIndex + 1} de {deck.length} · {PHOTOS_DATA.length} fotos en el álbum ♡
          </p>
        </div>
      </div>
    </div>
  )
}
