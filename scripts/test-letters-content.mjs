import assert from 'node:assert/strict'
import { LETTERS_DATA } from '../src/content/lettersData.ts'

console.log('--- VERIFYING LETTERS DATA ---')

assert.equal(LETTERS_DATA.length, 12, 'Must have exactly 12 letters')

const EXPECTED_TITLES = [
  'El principio de la aventura',
  'Empieza de verdad',
  'Ahora sí: vive la aventura',
  'No dejemos de encontrarnos',
  'Ya eres medio australiana',
  'Recuérdate a ti misma',
  'Las personas correctas siempre se quedan',
  'El dream team sigue intacto',
  'Mi único regalo',
  'Mira todo lo que has conseguido',
  'Feliz cumpleaños',
  'Gracias por vivir este regalo conmigo',
]

const EXPECTED_MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

LETTERS_DATA.forEach((letter, index) => {
  const monthNum = index + 1
  assert.equal(letter.monthNumber, monthNum, `Month number must be ${monthNum}`)
  assert.equal(letter.monthName, EXPECTED_MONTH_NAMES[index], `Month name must be ${EXPECTED_MONTH_NAMES[index]}`)
  assert.equal(letter.title, EXPECTED_TITLES[index], `Title of month ${monthNum} must match "${EXPECTED_TITLES[index]}"`)
  assert.ok(letter.content.length > 50, `Content of month ${monthNum} must not be empty`)
  assert.ok(letter.paragraphs.length > 0, `Paragraphs of month ${monthNum} must be populated`)
  assert.equal(letter.challenges.length, 4, `Month ${monthNum} must have exactly 4 challenges`)

  letter.challenges.forEach((ch, cIndex) => {
    assert.equal(ch.week, cIndex + 1, `Challenge ${cIndex + 1} must be week ${cIndex + 1}`)
    assert.equal(ch.weekLabel, `Semana ${cIndex + 1}`, `Challenge weekLabel must be Semana ${cIndex + 1}`)
    assert.ok(ch.description.length > 10, `Challenge ${cIndex + 1} description must not be empty`)
  })
})

console.log('✓ All 12 months verified with exact titles, non-empty contents, and exactly 4 weekly challenges each.')
console.log('LETTERS DATA VERIFICATION SUCCESSFUL! 🎉')
