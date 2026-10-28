import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outputDir = path.join(rootDir, 'public', 'musica')

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

export const SONGS_INPUT = [
  { id: 1, title: 'Crayolas', artist: 'Danny Ocean', trackId: '6cWhEExHUKZR3boz4yC2Mf' },
  { id: 2, title: 'Antídoto y veneno', artist: 'Eddie Santiago', trackId: '6qLWTeDmgrC5Id2lTb4Hdq' },
  { id: 3, title: 'Deseándote', artist: 'Frankie Ruiz', trackId: '6eRmG7DPom2FfRNAoCmjqb' },
  { id: 4, title: 'Jennifer', artist: 'Els Catarres', trackId: '7hiceWoDGGP4RadNyGxRdm' },
  { id: 5, title: 'Rock and Roll', artist: 'Els Catarres', trackId: '35g0jh3U6x63NZgq8zKX2m' },
  { id: 6, title: 'Dichavate', artist: 'Ya Ice Dilan, Rey Toni y El Abusador', trackId: '6Ab2trdJulkRRhaJ9zVGQa' },
  { id: 7, title: 'Contigo', artist: 'Lucho RK', trackId: '4YfiXtaSvZsRKwHwdI0qcL' },
  { id: 8, title: 'Que no s\'acabi', artist: 'Figa Flawas', trackId: '2GwrUTD1fCrJAdzQD8Y0Cl' },
  { id: 9, title: 'La Graciosa', artist: 'Quevedo', trackId: '0b3Bkp0UfCkNqquAUmoP5m' },
  { id: 10, title: 'Superestrella', artist: 'Aitana', trackId: '6hpuesKPNa3WhV48O7Fa47' },
  { id: 11, title: 'Menorca', artist: 'The Tyets', trackId: '6ktnF4Y4TNzaDTylC92DL8' },
  { id: 12, title: 'Ni Borracho', artist: 'Quevedo', trackId: '55ADnsCq80j9s8tzSrXKW1' },
  { id: 13, title: 'Besos en guerra', artist: 'Morat y Juanes', trackId: '1mlGScrDQqHqmhdIqE8MmA' },
  { id: 14, title: 'Cómo te atreves a volver', artist: 'Morat', trackId: '7M6CFruBrM5x7u0lTMtm6r' },
  { id: 15, title: 'Toto de loca', artist: 'Métrica', trackId: '3uSN0SuaW9gMtWGUK7FPup' },
  { id: 16, title: 'La perla', artist: 'Rosalía', trackId: '4oVO4fGNRRvEn0CRuFO4qv' },
  { id: 17, title: 'Qué locura', artist: 'DJ Excel y Cacao Chu', trackId: '2J0Nuqw3GbSPRRrTO7P6V8' },
  { id: 18, title: 'Tengo pensamientos', artist: 'Amaia', trackId: '3S2W0ZX1Cc74sl7ch0ZYQ3' },
  { id: 19, title: 'Dardos', artist: 'Romeo Santos y Prince Royce', trackId: '5SudOD9R1Of6CsJVWZy6CQ' },
  { id: 20, title: 'Dame un AAA', artist: 'Ya Ice Dilan, Rey Toni y El Abusador', trackId: '1lDY4hcckXUyMTjB62fd00' },
  { id: 21, title: 'Deslocado', artist: 'NAPA', trackId: '31CsSZ9KlQmEu0JvWSkM3j' },
  { id: 22, title: 'Con los nenes y las neneas', artist: 'Naia', trackId: '70EMIXle7aQrMrz1uepW0v' },
  { id: 23, title: 'Daale', artist: 'MVRK', trackId: '1O4S7iSaxFJh6SuUvFrdvJ' },
  { id: 24, title: 'Mi loco cowboy', artist: 'Gara Durán', trackId: '5XiFK0lqhOUlGPXFyfrIbc' },
  { id: 25, title: 'BAILE INoLVIDABLE', artist: 'Bad Bunny', trackId: '2lTm559tuIvatlT1u0JYG2' },
  { id: 26, title: 'La villa', artist: 'Ryan Castro, Kapo y Gangsta', trackId: '6YkGw5op7PeyP2gmMMMrfJ' },
  { id: 27, title: 'Limbo', artist: 'Daddy Yankee', trackId: '3pDhN3qB33AOPhQEkUCaWt' },
  { id: 28, title: 'Qué hubiera sido', artist: 'Karol G', trackId: '6WatFBLVB0x077xWeoVc2k' },
  { id: 29, title: 'Dónde están las gatas', artist: 'Alex Gargolas, Daddy Yankee y Nicky Jam', trackId: '0tIpUUbOYIWqvI50Ksf7D5' },
  { id: 30, title: 'A la sombra de la sierra', artist: 'La Raíz', trackId: '4qfFh2l9keVDx6wE4oQqaA' },
  { id: 31, title: 'Entre poetas y presos', artist: 'La Raíz', trackId: '02oe37NGzj18s0AFnCufE8' },
  { id: 32, title: 'Yo te esperaré', artist: 'Cali y El Dandee', trackId: '0mGvaKpwLYoybnIoboC3uS' },
  { id: 33, title: 'La morocha', artist: 'Luck Ra y BM', trackId: '7aPsseax6rNFyipHn9A5CR' },
  { id: 34, title: 'La Marina Sta Morena', artist: 'Figa Flawas', trackId: '3gxOPs7aBe5SJUcvYew6Ax' },
  { id: 35, title: 'Angelito', artist: 'Bad Gyal y Trueno', trackId: '1gRaHuKLW9Uo9qYkb7MvGP' },
  { id: 36, title: 'Gasolina', artist: 'Daddy Yankee', trackId: '5YoITs1m0q8UOQ4AW7N5ga' },
  { id: 37, title: 'Pobre diabla', artist: 'Don Omar', trackId: '0H0iOExW3XWT5xVdfClsFr' },
  { id: 38, title: 'Una vaina loca', artist: 'Fuego', trackId: '6YYmoV9YbBefsspGmqFHbs' },
  { id: 39, title: 'Purpurina', artist: 'Alberto Gambino', trackId: '4FrThBco0jLqXEMULUhSM9' },
  { id: 40, title: 'Mi vecinita', artist: 'Plan B', trackId: '5iptcoD2Oi6gY3pyW1xKgL' },
  { id: 41, title: 'Me rehúso', artist: 'Danny Ocean', trackId: '6De0lHrwBfPfrhorm9q1Xl' },
  { id: 42, title: 'Salió el sol', artist: 'Don Omar', trackId: '48NXpYRuvv9izul4oXhqS9' },
  { id: 43, title: 'La despedida', artist: 'Daddy Yankee', trackId: '0fqrZVSenCW6vD2eFMx5pt' },
  { id: 44, title: 'Angelitos sin alas', artist: 'DCS y Juan Magán', trackId: '3qZRT8P3XzmoHqkXYCybd4' },
  { id: 45, title: 'Candies', artist: 'Plan B', trackId: '2YAQa5dl4GWo0GuVliWvdR' },
  { id: 46, title: 'Té de campana', artist: 'Atómico Otro Güey', trackId: '1mISgMoXw5fKI3ESj03tPd' },
  { id: 47, title: 'Ella me levantó', artist: 'Daddy Yankee', trackId: '0nhbuIdjSaPEdflhu3fK2l' },
  { id: 48, title: 'Princesas', artist: 'Pereza', trackId: '3hlWUNjAlbZ6nOjAbrivBv' },
  { id: 49, title: 'Zapatillas', artist: 'El Canto del Loco', trackId: '42VgiRyg0YjtRVLiPFNxPJ' },
  { id: 50, title: 'Atrévete-te-te', artist: 'Calle 13', trackId: '1q8NdCAQ9QUjpYiqzdd3mv' },
  { id: 51, title: 'Baila morena', artist: 'Héctor y Tito', trackId: '4qbi9JDziBh3cxi9SFUbeu' },
  { id: 52, title: 'Choca', artist: 'Plan B', trackId: '15actjx4Wa7QVrq75SURHV' },
  { id: 53, title: 'Duro de verdad, parte 2', artist: 'Los Sufridos y Bad Gyal', trackId: '0glj70T9fN3kyJzYmTKzy1' },
  { id: 54, title: 'Fiebre', artist: 'Bad Gyal', trackId: '3e4EFbKbdLvnW42xGB6tIx' },
  { id: 55, title: 'Una vida pasada', artist: 'Camilo y Carín León', trackId: '7y91nQBMhyeHWTn9wVvhKl' },
  { id: 56, title: 'Latidos', artist: 'Fresto Music', trackId: '5DtNvoodq0pZB9gSKJpS4k' },
  { id: 57, title: 'Valió la pena', artist: 'Marc Anthony', trackId: '2AMDKSt4HJWZbuLupJuNrj' },
  { id: 58, title: 'Propuesta indecente', artist: 'Romeo Santos', trackId: '5PycBIeabfvX3n9ILG7Vrv' },
  { id: 59, title: 'Bonito, bonito', artist: 'Tiago Navarro', trackId: '7F0XhdpLPUYgOaDtMx1Vl4' },
  { id: 60, title: 'Te pintaron pajaritos', artist: 'Yandar & Yostin', trackId: '742LzX1KeUGhYjB1WEtyEY' },
]

async function fetchThumbnailUrl(trackId) {
  const oembedUrl = `https://open.spotify.com/oembed?url=https://open.spotify.com/track/${trackId}`
  const res = await fetch(oembedUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
    }
  })
  if (!res.ok) throw new Error(`oEmbed failed with status ${res.status}`)
  const data = await res.json()
  return data.thumbnail_url
}

async function downloadImage(url, destPath) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download failed with status ${res.status}`)
  const arrayBuffer = await res.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  fs.writeFileSync(destPath, buffer)
  return buffer.length
}

async function main() {
  console.log(`Starting download for ${SONGS_INPUT.length} song covers...`)
  const results = []

  for (const song of SONGS_INPUT) {
    const filename = `song-${song.id}.jpg`
    const dest = path.join(outputDir, filename)

    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
      console.log(`[${song.id}/59] Exists: ${song.title} (${fs.statSync(dest).size} bytes)`)
      results.push({ ...song, cover: `/musica/${filename}` })
      continue
    }

    try {
      console.log(`[${song.id}/59] Fetching cover for: ${song.title} — ${song.artist}...`)
      const thumbUrl = await fetchThumbnailUrl(song.trackId)
      // Spotify thumbnails usually have ab67616d00001e02 (300x300) or ab67616d0000b273 (640x640)
      // 300x300 or 640x640: let's use the thumbUrl directly (it is official 300x300 JPEG, ~30-40KB, super lightweight!)
      const bytes = await downloadImage(thumbUrl, dest)
      console.log(`  -> Downloaded ${filename} (${bytes} bytes) from ${thumbUrl}`)
      results.push({ ...song, cover: `/musica/${filename}` })
      // Small pause to be polite
      await new Promise(r => setTimeout(r, 120))
    } catch (err) {
      console.error(`  -> Failed for ${song.title}:`, err.message)
      results.push({ ...song, cover: `/musica/${filename}` })
    }
  }

  // Generate musicData.ts
  const dataFileContent = `// Catálogo oficial de las 59 canciones de Georgina's Travel Journal
// Mantener el orden exacto especificado en los requisitos del proyecto.

export interface SongItem {
  id: number
  title: string
  artist: string
  cover: string
  trackId: string
  spotifyUrl: string
}

export const SPOTIFY_PLAYLIST_URL =
  'https://open.spotify.com/playlist/5juT6B6vZqV6V2hwNKcUtY?si=e85f7d6565e44b63'

export const SONGS_DATA: readonly SongItem[] = [
${SONGS_INPUT.map(
  (s) => `  {
    id: ${s.id},
    title: ${JSON.stringify(s.title)},
    artist: ${JSON.stringify(s.artist)},
    cover: '/musica/song-${s.id}.jpg',
    trackId: ${JSON.stringify(s.trackId)},
    spotifyUrl: 'https://open.spotify.com/track/${s.trackId}',
  },`,
).join('\n')}
] as const
`

  const musicDataPath = path.join(rootDir, 'src', 'features', 'music', 'musicData.ts')
  fs.mkdirSync(path.dirname(musicDataPath), { recursive: true })
  fs.writeFileSync(musicDataPath, dataFileContent, 'utf-8')
  console.log(`Created ${musicDataPath} with 59 songs!`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
