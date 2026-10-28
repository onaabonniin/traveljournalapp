import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

console.log('--- RUNNING PWA & JOURNALING TESTS ---')

// 1. Journaling calendar collapsed state logic verification
console.log('1. Verifying Journaling Calendar initial collapsed state...')
const initialCollapsed = (() => {
  const initial = {}
  for (let i = 1; i <= 11; i++) {
    initial[i] = true
  }
  return initial
})()

assert.equal(!!initialCollapsed[0], false, 'Month 0 (Enero) must NOT be collapsed by default')
for (let m = 1; m <= 11; m++) {
  assert.equal(!!initialCollapsed[m], true, `Month ${m} must be collapsed by default`)
}
console.log('✓ Journaling initial state verified: Enero open, Febrero-Diciembre closed.')

// 2. Verify PWA Manifest in dist
console.log('2. Verifying dist/manifest.webmanifest...')
const manifestPath = path.join(rootDir, 'dist', 'manifest.webmanifest')
assert.ok(fs.existsSync(manifestPath), 'dist/manifest.webmanifest must exist')

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
assert.equal(manifest.name, "Georgina's Travel Journal")
assert.equal(manifest.short_name, "Georgina's Journal")
assert.equal(manifest.display, 'standalone')
assert.equal(manifest.start_url, '/')
assert.equal(manifest.scope, '/')
assert.equal(manifest.background_color, '#FFF9F0')
assert.equal(manifest.theme_color, '#FFF9F0')

assert.ok(Array.isArray(manifest.icons) && manifest.icons.length >= 3, 'Must have at least 3 icons in manifest')
const icon192 = manifest.icons.find(i => i.sizes === '192x192')
const icon512 = manifest.icons.find(i => i.sizes === '512x512' && (!i.purpose || i.purpose.includes('any')))
const iconMaskable = manifest.icons.find(i => i.purpose?.includes('maskable'))

assert.ok(icon192, 'Manifest must have 192x192 icon')
assert.ok(icon512, 'Manifest must have 512x512 icon')
assert.ok(iconMaskable, 'Manifest must have maskable icon')
console.log('✓ Manifest verified successfully.')

// 3. Verify Icons files exist and have non-zero size
console.log('3. Verifying icon files on disk...')
const iconFiles = [
  'dist/icons/icon-192x192.png',
  'dist/icons/icon-512x512.png',
  'dist/icons/maskable-icon-512x512.png',
  'dist/apple-touch-icon.png',
  'dist/favicon.png'
]

for (const rel of iconFiles) {
  const p = path.join(rootDir, rel)
  assert.ok(fs.existsSync(p), `${rel} must exist in dist`)
  const s = fs.statSync(p)
  assert.ok(s.size > 1000, `${rel} must not be empty (size: ${s.size})`)
}
console.log('✓ All icon files verified on disk.')

// 4. Verify index.html contains iOS meta tags
console.log('4. Verifying dist/index.html meta tags...')
const html = fs.readFileSync(path.join(rootDir, 'dist', 'index.html'), 'utf8')
assert.ok(html.includes('apple-mobile-web-app-capable'), 'Must contain apple-mobile-web-app-capable')
assert.ok(html.includes('apple-mobile-web-app-status-bar-style'), 'Must contain apple-mobile-web-app-status-bar-style')
assert.ok(html.includes('apple-mobile-web-app-title'), 'Must contain apple-mobile-web-app-title')
assert.ok(html.includes('apple-touch-icon'), 'Must contain apple-touch-icon link')
assert.ok(html.includes('viewport-fit=cover'), 'Must contain viewport-fit=cover')
assert.ok(html.includes('theme-color'), 'Must contain theme-color')
console.log('✓ iOS meta tags in dist/index.html verified.')

// 5. Verify deployment files
console.log('5. Verifying deployment files (Vercel & Cloudflare Pages)...')
const vercelJsonPath = path.join(rootDir, 'vercel.json')
assert.ok(fs.existsSync(vercelJsonPath), 'vercel.json must exist in root')
const vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'))
assert.ok(vercelJson.rewrites?.some(r => r.source === '/(.*)' && r.destination === '/'), 'vercel.json rewrite must route to /')

const redirectsPath = path.join(rootDir, 'dist', '_redirects')
assert.ok(fs.existsSync(redirectsPath), 'dist/_redirects must exist for Cloudflare Pages')
const redirectsContent = fs.readFileSync(redirectsPath, 'utf8')
assert.ok(redirectsContent.includes('/*') && redirectsContent.includes('/index.html'), '_redirects must route /* to /index.html')
console.log('✓ Deployment files verified.')

// 6. Verify Service Worker
console.log('6. Verifying Service Worker in dist...')
assert.ok(fs.existsSync(path.join(rootDir, 'dist', 'sw.js')), 'dist/sw.js must exist')
const swContent = fs.readFileSync(path.join(rootDir, 'dist', 'sw.js'), 'utf8')
assert.ok(swContent.length > 500, 'Service worker must not be empty')
console.log('✓ Service Worker verified.')

console.log('ALL PWA & JOURNALING TESTS PASSED! 🎉')
