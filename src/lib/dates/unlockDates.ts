export const DEFAULT_AUSTRALIAN_TIMEZONE = 'Australia/Sydney'
export const UNLOCK_YEAR = 2027

export interface AustralianDateParts {
  year: number
  month: number // 1-12
  day: number // 1-31
  hour: number // 0-23
  minute: number
  second: number
}

/**
 * Extracts date and time components in the target Australian IANA timezone.
 * Uses Intl.DateTimeFormat with hour12: false to accurately parse timeZone components.
 */
export function getAustralianDateParts(
  date: Date = new Date(),
  timeZone: string = DEFAULT_AUSTRALIAN_TIMEZONE
): AustralianDateParts {
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
  const partMap: Record<string, number> = {}
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

/**
 * Checks whether a specific month's letter (1 to 12) is unlocked at the given date
 * according to Australian local time in the specified IANA timezone.
 * - Before 2027-01-01 00:00:00 Australian time: returns false for all months.
 * - In 2027: month m unlocks at 00:00:00 on the 1st of month m, and remains unlocked.
 * - After 2027 (year >= 2028): returns true for all months.
 */
export function isLetterUnlocked(
  monthNumber: number,
  currentDate: Date = new Date(),
  timeZone: string = DEFAULT_AUSTRALIAN_TIMEZONE
): boolean {
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

  // In 2027: month m unlocks at 00:00:00 on day 1 of month m
  return parts.month >= monthNumber
}

/**
 * Returns the effective date for the application.
 * Supports an optional URL query parameter ?previewDate=... for testing without altering system clocks.
 */
export function getCurrentAppDate(): Date {
  if (typeof window !== 'undefined' && window.location?.search) {
    try {
      const params = new URLSearchParams(window.location.search)
      const preview = params.get('previewDate')
      if (preview) {
        const parsed = new Date(preview)
        if (!isNaN(parsed.getTime())) {
          return parsed
        }
      }
    } catch {
      // fallback to current date
    }
  }
  return new Date()
}
