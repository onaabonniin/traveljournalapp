import assert from 'node:assert/strict'

const DEFAULT_AUSTRALIAN_TIMEZONE = 'Australia/Sydney'
const UNLOCK_YEAR = 2027

function getAustralianDateParts(date = new Date(), timeZone = DEFAULT_AUSTRALIAN_TIMEZONE) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  })

  const parts = formatter.formatToParts(date)
  const partMap = {}
  for (const part of parts) {
    if (part.type !== 'literal') {
      partMap[part.type] = parseInt(part.value, 10)
    }
  }

  const hour = (partMap.hour ?? 0) % 24

  return {
    year: partMap.year ?? 0,
    month: partMap.month ?? 0,
    day: partMap.day ?? 0,
    hour,
    minute: partMap.minute ?? 0,
    second: partMap.second ?? 0,
  }
}

function isLetterUnlocked(monthNumber, currentDate = new Date(), timeZone = DEFAULT_AUSTRALIAN_TIMEZONE) {
  if (monthNumber < 1 || monthNumber > 12) {
    return false
  }

  const parts = getAustralianDateParts(currentDate, timeZone)

  if (parts.year < UNLOCK_YEAR) {
    return false
  }

  if (parts.year > UNLOCK_YEAR) {
    return true
  }

  return parts.month >= monthNumber
}

console.log('--- STARTING UNLOCK TESTS ---')

// 1. Current real date (2026): all letters must be locked
const now = new Date()
for (let m = 1; m <= 12; m++) {
  assert.equal(isLetterUnlocked(m, now), false, `Month ${m} must be locked today in 2026`)
}
console.log('✓ Test 1 Passed: In 2026 (current time), all 12 letters are locked.')

// 2. Just before 2027-01-01 00:00:00 Sydney time (which is 2026-12-31 12:59:59 UTC):
const oneSecBeforeJan2027 = new Date('2026-12-31T12:59:59.000Z')
for (let m = 1; m <= 12; m++) {
  assert.equal(isLetterUnlocked(m, oneSecBeforeJan2027), false, `Month ${m} must be locked right before Jan 1, 2027`)
}
console.log('✓ Test 2 Passed: 1 second before Jan 1, 2027 in Sydney, all 12 letters are locked.')

// 3. Exactly at 2027-01-01 00:00:00 Sydney time (2026-12-31 13:00:00 UTC):
const jan1Midnight = new Date('2026-12-31T13:00:00.000Z')
assert.equal(isLetterUnlocked(1, jan1Midnight), true, 'January must unlock at 00:00 on Jan 1, 2027 Sydney')
for (let m = 2; m <= 12; m++) {
  assert.equal(isLetterUnlocked(m, jan1Midnight), false, `Month ${m} must still be locked on Jan 1, 2027`)
}
console.log('✓ Test 3 Passed: At 00:00:00 on Jan 1, 2027 in Sydney, only Enero is unlocked.')

// 4. Test each month transition in 2027
const monthSydneyUtcStarts = [
  { m: 1, name: 'Enero', utcStart: '2026-12-31T13:00:00.000Z' },      // AEDT (UTC+11)
  { m: 2, name: 'Febrero', utcStart: '2027-01-31T13:00:00.000Z' },    // AEDT (UTC+11)
  { m: 3, name: 'Marzo', utcStart: '2027-02-28T13:00:00.000Z' },      // AEDT (UTC+11)
  { m: 4, name: 'Abril', utcStart: '2027-03-31T13:00:00.000Z' },      // AEDT (UTC+11) (DST ends first Sunday of April, April 4 2027)
  { m: 5, name: 'Mayo', utcStart: '2027-04-30T14:00:00.000Z' },       // AEST (UTC+10)
  { m: 6, name: 'Junio', utcStart: '2027-05-31T14:00:00.000Z' },      // AEST (UTC+10)
  { m: 7, name: 'Julio', utcStart: '2027-06-30T14:00:00.000Z' },      // AEST (UTC+10)
  { m: 8, name: 'Agosto', utcStart: '2027-07-31T14:00:00.000Z' },     // AEST (UTC+10)
  { m: 9, name: 'Septiembre', utcStart: '2027-08-31T14:00:00.000Z' }, // AEST (UTC+10)
  { m: 10, name: 'Octubre', utcStart: '2027-09-30T14:00:00.000Z' },   // AEST (UTC+10) (DST starts first Sunday of Oct, Oct 3 2027)
  { m: 11, name: 'Noviembre', utcStart: '2027-10-31T13:00:00.000Z' }, // AEDT (UTC+11)
  { m: 12, name: 'Diciembre', utcStart: '2027-11-30T13:00:00.000Z' }, // AEDT (UTC+11)
]

for (const { m, name, utcStart } of monthSydneyUtcStarts) {
  const atStart = new Date(utcStart)
  const oneSecBefore = new Date(atStart.getTime() - 1000)

  // 1 sec before month m starts in Sydney
  assert.equal(isLetterUnlocked(m, oneSecBefore), false, `${name} must NOT be unlocked 1 sec before Sydney 00:00 on the 1st`)
  if (m > 1) {
    assert.equal(isLetterUnlocked(m - 1, oneSecBefore), true, `Previous month ${m - 1} must still be unlocked`)
  }

  // Exactly at 00:00:00 on the 1st of month m
  assert.equal(isLetterUnlocked(m, atStart), true, `${name} must be unlocked at Sydney 00:00 on the 1st`)
  if (m < 12) {
    assert.equal(isLetterUnlocked(m + 1, atStart), false, `Next month ${m + 1} must remain locked`)
  }
}
console.log('✓ Test 4 Passed: All 12 monthly transitions in 2027 unlock at exact Sydney 00:00:00 moments (including DST switches).')

// 5. Test post-2027 (e.g. 2028, 2029): all 12 letters must be unlocked permanently
const in2028 = new Date('2028-06-15T12:00:00.000Z')
for (let m = 1; m <= 12; m++) {
  assert.equal(isLetterUnlocked(m, in2028), true, `Month ${m} must remain unlocked in 2028`)
}
console.log('✓ Test 5 Passed: All 12 letters remain permanently unlocked in 2028 and beyond.')

// 6. Test invalid month inputs
assert.equal(isLetterUnlocked(0, in2028), false)
assert.equal(isLetterUnlocked(13, in2028), false)
console.log('✓ Test 6 Passed: Invalid month numbers return false.')

console.log('ALL UNLOCK TESTS PASSED SUCCESSFULLY! 🎉')
