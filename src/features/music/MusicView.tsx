import { useState, type FC } from 'react'
import { Header } from '../../components/layout/Header'
import { SONGS_DATA, SPOTIFY_PLAYLIST_URL, type SongItem } from './musicData'

interface SongCardProps {
  song: SongItem
  index: number
}

const SongCard: FC<SongCardProps> = ({ song, index }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-[#FFFBF6] border border-[#E8D7C5]/70 shadow-[0_2px_8px_rgba(117,81,63,0.04)] hover:border-[#D9578B]/40 hover:shadow-[0_4px_16px_rgba(217,87,139,0.12)] transition-all duration-200">
      {/* Posición en la lista */}
      <span className="w-6 shrink-0 text-center font-heading font-bold text-xs text-[#7A6B70] group-hover:text-[#D9578B] transition-colors select-none">
        {index + 1}
      </span>

      {/* Portada cuadrada uniforme con fallback estético */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl overflow-hidden bg-[#FBE6EE] border border-[#E8D7C5]/60 shadow-xs">
        {!imageError ? (
          <img
            src={song.cover}
            alt={`Portada de ${song.title} - ${song.artist}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FBE6EE] to-[#FFF9F0] text-[#D9578B]">
            <span className="text-xl" role="img" aria-label="Nota musical">🎵</span>
          </div>
        )}
      </div>

      {/* Título y artista */}
      <div className="flex-1 min-w-0 pr-1">
        <h3 className="font-heading font-bold text-sm sm:text-base text-[#332B2D] truncate group-hover:text-[#D9578B] transition-colors">
          {song.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#7A6B70] truncate mt-0.5">
          {song.artist}
        </p>
      </div>

      {/* Detalle decorativo coquette */}
      <span className="shrink-0 text-xs text-[#E8D7C5] group-hover:text-[#D9578B] transition-colors pr-1 select-none">
        ♡
      </span>
    </div>
  )
}

export const MusicView: FC = () => {
  return (
    <div className="space-y-4">
      {/* Cabecera de la sección */}
      <Header
        title="Canciones que me recuerdan a ti 🎶💗"
        subtitle={`${SONGS_DATA.length} canciones con un pedacito de nosotras`}
      />

      <div className="px-4 space-y-4">
        {/* Tarjeta decorativa estilo scrapbook de bienvenida */}
        <section aria-label="Presentación musical" className="text-center py-2 space-y-1">
          <span className="inline-block text-[11px] uppercase tracking-wider font-bold text-[#D9578B] bg-[#FBE6EE] px-3 py-0.5 rounded-full mb-1">
            Nuestra banda sonora 🎀
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#332B2D]">
            Canciones que me recuerdan a ti 🎶💗
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#7A6B70] max-w-xs mx-auto">
            Cada melodía tiene una historia, un recuerdo, una risa o un pensamiento en el que siempre estás tú.
          </p>
        </section>

        {/* Lista vertical de las 59 canciones en el orden exacto */}
        <section aria-label="Lista de canciones" className="space-y-2.5 pb-36">
          {SONGS_DATA.map((song, index) => (
            <SongCard
              key={song.id}
              song={song}
              index={index}
            />
          ))}
        </section>
      </div>

      {/* Botón flotante fijo para abrir Spotify durante todo el recorrido */}
      <div className="fixed bottom-[calc(env(safe-area-inset-bottom,0px)+68px)] left-0 right-0 z-40 px-4 pointer-events-none">
        <div className="max-w-md mx-auto flex justify-center">
          <a
            href={SPOTIFY_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto w-full max-w-xs sm:max-w-sm flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-[#1DB954] to-[#169C46] text-white font-heading font-bold text-sm sm:text-base tracking-wide shadow-[0_6px_20px_rgba(29,185,84,0.38)] hover:shadow-[0_8px_26px_rgba(29,185,84,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/20 select-none text-center cursor-pointer"
            aria-label="Ir a la playlist de Spotify"
          >
            Ir a la playlist de Spotify 🎧
          </a>
        </div>
      </div>
    </div>
  )
}
