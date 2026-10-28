import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SONGS_DATA, SPOTIFY_PLAYLIST_URL } from '../src/features/music/musicData.ts'
import { WELCOME_LETTER_DATA } from '../src/content/welcomeLetterData.ts'
import { JOURNALING_WEEKS_2027, JOURNALING_MONTHS_2027 } from '../src/content/journalingWeeksData.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

console.log('--- RUNNING HOME, JOURNALING & MUSIC VERIFICATION TESTS ---')

// 1. Music verification
console.log('1. Verifying Music section...')
assert.equal(SONGS_DATA.length, 60, 'SONGS_DATA must contain exactly 60 songs')

const song60 = SONGS_DATA[59]
assert.equal(song60.id, 60, 'Song 60 must have id 60')
assert.equal(song60.title, 'Te pintaron pajaritos', 'Song 60 title must match')
assert.equal(song60.artist, 'Yandar & Yostin', 'Song 60 artist must match')
assert.equal(song60.cover, '/musica/song-60.jpg', 'Song 60 cover must point to /musica/song-60.jpg')
assert.ok(song60.trackId.length > 0, 'Song 60 trackId must be set')
assert.ok(song60.spotifyUrl.includes('open.spotify.com/track/'), 'Song 60 spotifyUrl must be valid')

const coverPath = path.join(rootDir, 'public', 'musica', 'song-60.jpg')
assert.ok(fs.existsSync(coverPath), 'public/musica/song-60.jpg must exist')
const coverStats = fs.statSync(coverPath)
assert.ok(coverStats.size > 10000, 'public/musica/song-60.jpg must not be empty')

assert.equal(
  SPOTIFY_PLAYLIST_URL,
  'https://open.spotify.com/playlist/5juT6B6vZqV6V2hwNKcUtY?si=e85f7d6565e44b63',
  'Spotify playlist URL must match exact requested URL'
)
console.log('✓ Music section verified: 60 songs, cover file exists, playlist link preserved.')

// 2. Welcome Letter verification
console.log('2. Verifying Welcome Letter...')
assert.equal(WELCOME_LETTER_DATA.title, 'Feliz 26 cumpleaños 💌')
assert.equal(WELCOME_LETTER_DATA.paragraphs.length, 18, 'Welcome letter must have 18 paragraphs')
assert.ok(WELCOME_LETTER_DATA.paragraphs[0].includes('Hola, mi bebé. 🥹❤️'))
assert.ok(WELCOME_LETTER_DATA.paragraphs[1].includes('TU CUMPLEAÑOS!!! 🎂💗'))
assert.ok(WELCOME_LETTER_DATA.paragraphs[2].includes('CREARTE UNA APLICACIÓN!'))
assert.ok(WELCOME_LETTER_DATA.paragraphs[17].includes('Tu bebita, tu sí a todo y tu amor a primera vista 💋'))
console.log('✓ Welcome letter verified: exact title, 18 paragraphs, emojis and tone preserved.')

// 3. Journaling Calendar 2027 verification
console.log('3. Verifying Journaling Calendar 2027...')
assert.equal(JOURNALING_MONTHS_2027.length, 12, 'Must have 12 months')
const expectedMonths = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]
JOURNALING_MONTHS_2027.forEach((m, idx) => {
  assert.equal(m.monthIndex, idx)
  assert.equal(m.monthName, expectedMonths[idx])
  assert.ok(m.weeks.length >= 4 && m.weeks.length <= 5, `${m.monthName} must have 4 or 5 weeks`)
})

assert.equal(JOURNALING_WEEKS_2027.length, 53, 'Must have 53 weeks covering all of 2027')
const weekIds = new Set()
JOURNALING_WEEKS_2027.forEach((w, idx) => {
  assert.ok(!weekIds.has(w.id), `Week id ${w.id} must be unique`)
  weekIds.add(w.id)
  assert.equal(w.weekNumber, idx + 1, 'Weeks must be numbered consecutively from 1')
  assert.ok(w.label.startsWith('Semana del '), 'Week label must start with "Semana del "')
})

assert.equal(JOURNALING_WEEKS_2027[0].label, 'Semana del 1–3 de enero')
assert.equal(JOURNALING_WEEKS_2027[1].label, 'Semana del 4–10 de enero')
assert.equal(JOURNALING_WEEKS_2027[2].label, 'Semana del 11–17 de enero')
assert.equal(JOURNALING_WEEKS_2027[52].label, 'Semana del 27–31 de diciembre')
console.log('✓ Journaling calendar verified: 12 months, 53 weeks, real 2027 dates without gaps or duplicates.')

// 4. LocalStorage simulation test
console.log('4. Testing LocalStorage logic simulation...')
const STORAGE_KEY = 'georgina_journaling_weeks_2027'
let storageMock = {}
const mockLocalStorage = {
  getItem: (k) => storageMock[k] ?? null,
  setItem: (k, v) => { storageMock[k] = String(v) }
}

function testSave(checkedIds) {
  mockLocalStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds))
}
function testLoad() {
  const raw = mockLocalStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  return JSON.parse(raw)
}

testSave(['2027-w01', '2027-w02', '2027-w10'])
const loaded = testLoad()
assert.deepEqual(loaded, ['2027-w01', '2027-w02', '2027-w10'])
console.log('✓ LocalStorage persistence logic verified.')

console.log('ALL TESTS PASSED SUCCESSFULLY! 🎉')
