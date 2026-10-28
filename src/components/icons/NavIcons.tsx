import type { FC } from 'react'

interface IconProps {
  active?: boolean
  className?: string
  size?: number
}

/**
 * 1. Inicio: Casita acogedora con corazón y chimenea estilo ilustración artesanal
 */
export const HomeNavIcon: FC<IconProps> = ({ active = false, className = '', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Chimenea con voluta sutil */}
      <path
        d="M19 6V10"
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Tejado redondeado */}
      <path
        d="M4.5 13L13.1 5.3C13.6 4.9 14.4 4.9 14.9 5.3L23.5 13"
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cuerpo de la casa */}
      <rect
        x="6.5"
        y="12.5"
        width="15"
        height="11"
        rx="2.5"
        fill={active ? '#FBE6EE' : '#FFFBF6'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
      />
      {/* Puertita con forma de corazón */}
      <path
        d="M14 16.5C14 16.5 12 15 12 16.2C12 17.1 14 18.5 14 18.5C14 18.5 16 17.1 16 16.2C16 15 14 16.5 14 16.5Z"
        fill={active ? '#D9578B' : '#C6A17B'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="1"
      />
    </svg>
  )
}

/**
 * 2. Cartas: Sobre postal doblado con sello de corazón
 */
export const LettersNavIcon: FC<IconProps> = ({ active = false, className = '', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Contenedor del sobre */}
      <rect
        x="4"
        y="7"
        width="20"
        height="14"
        rx="2.5"
        fill={active ? '#FBE6EE' : '#FFFBF6'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
      />
      {/* Pliegue superior en V */}
      <path
        d="M4.5 8L13.3 14.3C13.7 14.6 14.3 14.6 14.7 14.3L23.5 8"
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sellito de corazón en el cierre */}
      <path
        d="M14 13.5C14 13.5 12.3 12.2 12.3 13.2C12.3 14 14 15.2 14 15.2C14 15.2 15.7 14 15.7 13.2C15.7 12.2 14 13.5 14 13.5Z"
        fill={active ? '#D9578B' : '#F3B8CE'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="0.8"
      />
    </svg>
  )
}

/**
 * 3. Música: Notas musicales con estilo scrapbook y toques coquette
 */
export const MusicNavIcon: FC<IconProps> = ({ active = false, className = '', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Primera nota (izquierda) */}
      <ellipse
        cx="8.5"
        cy="19"
        rx="3.5"
        ry="2.7"
        transform="rotate(-20 8.5 19)"
        fill={active ? '#FBE6EE' : '#FFFBF6'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
      />
      {/* Segunda nota (derecha, más alta) */}
      <ellipse
        cx="19.5"
        cy="16"
        rx="3.5"
        ry="2.7"
        transform="rotate(-20 19.5 16)"
        fill={active ? '#FBE6EE' : '#FFFBF6'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
      />
      {/* Plica izquierda */}
      <path
        d="M11.5 18V8"
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Plica derecha */}
      <path
        d="M22.5 15V5"
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Barra superior de unión (beam) */}
      <path
        d="M11 9L23 6"
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Pequeño detalle de corazón coquette o nota melodiosa */}
      <path
        d="M17 9.5C16.2 8.5 14.5 9.2 15.2 10.5C15.8 11.5 17 12.3 17 12.3C17 12.3 18.2 11.5 18.8 10.5C19.5 9.2 17.8 8.5 17 9.5Z"
        fill={active ? '#D9578B' : '#F3B8CE'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="0.8"
      />
    </svg>
  )
}

/**
 * 4. Planes: Brújula de exploración y viaje con estrella y detalles de aventura
 */
export const InspirationNavIcon: FC<IconProps> = ({ active = false, className = '', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Esfera exterior de brújula de viaje */}
      <circle
        cx="14"
        cy="14"
        r="10"
        fill={active ? '#FBE6EE' : '#FFFBF6'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
      />
      {/* Marcas cardinales en los bordes */}
      <path
        d="M14 4.5V6.5M14 21.5V23.5M4.5 14H6.5M21.5 14H23.5"
        stroke={active ? '#D9578B' : '#C6A17B'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Aguja de orientación Norte (hacia arriba a la derecha) */}
      <path
        d="M14 14L18.5 7.5L15 13.5L14 14Z"
        fill={active ? '#D9578B' : '#D9578B'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Aguja de orientación Sur */}
      <path
        d="M14 14L9.5 20.5L13 14.5L14 14Z"
        fill={active ? '#F3B8CE' : '#C6A17B'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Centro de la brújula */}
      <circle
        cx="14"
        cy="14"
        r="1.5"
        fill={active ? '#FFF9F0' : '#FFFBF6'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="1.2"
      />
    </svg>
  )
}

export const PlansNavIcon = InspirationNavIcon

/**
 * 5. Fotos: Marco fotográfico instantáneo (Polaroid) con detalle
 */
export const PhotosNavIcon: FC<IconProps> = ({ active = false, className = '', size = 26 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Marco exterior de la instantánea con ligera inclinación estética */}
      <rect
        x="5"
        y="5"
        width="18"
        height="18"
        rx="2"
        fill={active ? '#FBE6EE' : '#FFFBF6'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="2"
      />
      {/* Ventana de la fotografía dentro del marco */}
      <rect
        x="7.5"
        y="7.5"
        width="13"
        height="10"
        rx="1"
        fill={active ? '#F3B8CE' : '#E8D7C5'}
        stroke={active ? '#D9578B' : '#75513F'}
        strokeWidth="1.2"
      />
      {/* Pequeño sol/corazón en la foto */}
      <circle
        cx="10.5"
        cy="10.5"
        r="1.3"
        fill={active ? '#D9578B' : '#75513F'}
      />
      {/* Silueta de montaña/paisaje dentro de la foto */}
      <path
        d="M8.5 15.5L12 12.5L14.5 14.5L17.5 12L19.5 15.5H8.5Z"
        fill={active ? '#D9578B' : '#75513F'}
      />
    </svg>
  )
}
