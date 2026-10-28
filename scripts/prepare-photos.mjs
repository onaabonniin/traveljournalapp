import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const sourceDir = path.join(projectRoot, 'public', 'fotos')
const targetDir = path.join(projectRoot, 'public', 'fotos-web')
const outputDataFile = path.join(projectRoot, 'src', 'features', 'photos', 'photosData.ts')

const force = process.argv.includes('--force')

if (!fs.existsSync(sourceDir)) {
  console.error(`Error: Carpeta de origen no encontrada: ${sourceDir}`)
  process.exit(1)
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

const allFiles = fs
  .readdirSync(sourceDir)
  .filter((f) => !f.startsWith('.') && !f.startsWith('_'))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

console.log(`Encontrados ${allFiles.length} archivos en ${sourceDir}`)

const items = []
let convertedCount = 0
let skippedCount = 0

function getImageDimensions(filePath) {
  try {
    const stdout = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    })
    const widthMatch = stdout.match(/pixelWidth:\s*(\d+)/)
    const heightMatch = stdout.match(/pixelHeight:\s*(\d+)/)
    if (widthMatch && heightMatch) {
      return {
        width: Number.parseInt(widthMatch[1], 10),
        height: Number.parseInt(heightMatch[1], 10),
      }
    }
  } catch (err) {
    console.warn(`Advertencia al obtener dimensiones de ${filePath}:`, err.message)
  }
  return { width: 1200, height: 900 }
}

for (let i = 0; i < allFiles.length; i++) {
  const originalName = allFiles[i]
  const sourcePath = path.join(sourceDir, originalName)
  const ext = path.extname(originalName).toLowerCase()

  if (!['.heic', '.jpg', '.jpeg', '.png'].includes(ext)) {
    console.warn(`Saltando archivo no soportado: ${originalName}`)
    continue
  }

  // Sanitizar nombre para URL web segura
  const baseName = path.parse(originalName).name.trim().replace(/\s+/g, '_')
  const targetFileName = `${baseName}.jpg`
  const targetPath = path.join(targetDir, targetFileName)

  const id = `photo-${i + 1}`
  const src = `/fotos-web/${encodeURIComponent(targetFileName)}`

  let needsProcessing = force || !fs.existsSync(targetPath)

  if (!needsProcessing) {
    const srcStat = fs.statSync(sourcePath)
    const tgtStat = fs.statSync(targetPath)
    if (tgtStat.size === 0 || srcStat.mtimeMs > tgtStat.mtimeMs) {
      needsProcessing = true
    }
  }

  if (needsProcessing) {
    // Obtener dimensiones originales
    const { width: origW, height: origH } = getImageDimensions(sourcePath)
    const maxDim = Math.max(origW, origH)

    // Si la imagen es más grande que 1600px, redimensionamos a 1600px max para optimizar en móvil
    // Manteniendo una calidad excelente (86%)
    const resizeArg = maxDim > 1600 ? '-Z 1600' : ''
    const cmd = `sips -s format jpeg -s formatOptions 86 ${resizeArg} "${sourcePath}" --out "${targetPath}"`

    try {
      execSync(cmd, { stdio: ['pipe', 'pipe', 'pipe'] })
      convertedCount++
    } catch (err) {
      console.error(`Error convirtiendo ${originalName}:`, err.message)
      continue
    }
  } else {
    skippedCount++
  }

  // Obtener dimensiones del archivo web resultante
  const { width, height } = getImageDimensions(targetPath)
  const aspectRatio = width && height ? Number((width / height).toFixed(3)) : 1.333
  const orientation =
    aspectRatio > 1.15 ? 'landscape' : aspectRatio < 0.85 ? 'portrait' : 'square'

  items.push({
    id,
    src,
    originalName,
    width,
    height,
    aspectRatio,
    orientation,
  })
}

console.log(
  `Procesamiento completado: ${convertedCount} procesadas/convertidas, ${skippedCount} en caché.`
)
console.log(`Total de fotos indexadas: ${items.length}`)

// Generar el archivo TypeScript con tipado fuerte y helpers
const tsContent = `// Archivo generado automáticamente por scripts/prepare-photos.mjs
// NO EDITAR MANUALMENTE

export interface PhotoMemory {
  id: string
  src: string
  originalName: string
  width: number
  height: number
  aspectRatio: number
  orientation: 'landscape' | 'portrait' | 'square'
}

export const PHOTOS_DATA: readonly PhotoMemory[] = ${JSON.stringify(items, null, 2)} as const

/**
 * Selecciona una foto aleatoria evitando repetir la actual
 */
export function getRandomPhoto(currentId?: string): PhotoMemory {
  if (PHOTOS_DATA.length === 0) {
    throw new Error('No hay fotos disponibles en el álbum.')
  }
  if (PHOTOS_DATA.length === 1) {
    return PHOTOS_DATA[0]
  }

  let nextIndex: number
  do {
    nextIndex = Math.floor(Math.random() * PHOTOS_DATA.length)
  } while (PHOTOS_DATA[nextIndex].id === currentId)

  return PHOTOS_DATA[nextIndex]
}

export function createShuffledDeck(excludeFirstId?: string): PhotoMemory[] {
  const deck: PhotoMemory[] = [...PHOTOS_DATA]
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }

  if (deck.length > 1 && excludeFirstId && deck[0].id === excludeFirstId) {
    const swapIndex = 1 + Math.floor(Math.random() * (deck.length - 1))
    const temp = deck[0]
    deck[0] = deck[swapIndex]
    deck[swapIndex] = temp
  }

  return deck
}
`

fs.writeFileSync(outputDataFile, tsContent, 'utf8')
console.log(`Índice de fotos generado en: ${outputDataFile}`)
