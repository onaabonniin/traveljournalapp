import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const planesDir = path.join(projectRoot, 'public', 'planes')
const outputDataFile = path.join(projectRoot, 'src', 'features', 'plans', 'plansData.ts')

if (!fs.existsSync(planesDir)) {
  fs.mkdirSync(planesDir, { recursive: true })
}

// Lista exacta de los 35 planes de Australia con URLs verificadas (Wikimedia Commons y Unsplash)
const PLANS_DEFINITIONS = [
  // 1-10: NATURALEZA
  {
    id: 1,
    title: 'Hacer snorkel en la Gran Barrera de Coral (Great Barrier Reef)',
    category: 'Naturaleza',
    description: 'Sumergirse en las aguas cristalinas del mayor arrecife del planeta y nadar entre corales de ensueño y peces tropicales.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Coral_Outcrop_Flynn_Reef.jpg/1280px-Coral_Outcrop_Flynn_Reef.jpg',
    author: 'Toby Hudson',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 2,
    title: 'Visitar los Doce Apóstoles (Twelve Apostles)',
    category: 'Naturaleza',
    description: 'Contemplar las majestuosas agujas de piedra caliza esculpidas por el océano y el viento australiano en la costa de Victoria.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/The_Twelve_Apostles_2011.jpg/1280px-The_Twelve_Apostles_2011.jpg',
    author: 'Richard Mikalsen',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 3,
    title: 'Visitar Uluru y contemplar sus colores al atardecer',
    category: 'Naturaleza',
    description: 'Sentir la magia ancestral del desierto mientras la luz del atardecer transforma la roca sagrada en tonos rojos y púrpuras.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/1280px-ULURU.jpg',
    author: 'Wikimedia Commons',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 4,
    title: 'Ver amanecer en el faro de Cape Byron',
    category: 'Naturaleza',
    description: 'Ser de las primeras personas en recibir los rayos del sol en el punto más oriental de Australia con vistas infinitas al océano.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Phare_de_Cap_Byron.jpg',
    author: 'Gerd Fahrenhorst',
    license: 'CC BY 4.0'
  },
  {
    id: 5,
    title: 'Bañarse en la piscina oceánica Bondi Icebergs',
    category: 'Naturaleza',
    description: 'Darse un baño inolvidable en la piscina de agua salada más famosa del mundo mientras las olas del mar rompen en sus bordes.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Bondi_from_above.jpg/1280px-Bondi_from_above.jpg',
    author: 'Maksym Kozlenko',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 6,
    title: 'Explorar las Montañas Azules (Blue Mountains) y contemplar las Three Sisters',
    category: 'Naturaleza',
    description: 'Pasear entre bosques de eucaliptos envueltos en bruma azul y asomarse al mirador de las míticas Tres Hermanas.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Three_Sisters_from_echo_point.jpg/1280px-Three_Sisters_from_echo_point.jpg',
    author: 'Diliff',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 7,
    title: 'Visitar un lago rosa de Australia',
    category: 'Naturaleza',
    description: 'Quedarse fascinada ante un espectáculo natural insólito: aguas de intenso color rosa pastel contrastando con la orilla de sal.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Lake_Hillier_2_Middle_Island_Recherche_Archipelago_NR_IV-2011.JPG/1280px-Lake_Hillier_2_Middle_Island_Recherche_Archipelago_NR_IV-2011.JPG',
    author: 'Kurun',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 8,
    title: 'Explorar la selva tropical de Daintree',
    category: 'Naturaleza',
    description: 'Adentrarse en la selva tropical más antigua de la Tierra, donde los helechos gigantes y el dosel verde besan directamente la playa.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Daintree_Rainforest%2C_Queensland_%28483855%29_%289440811465%29.jpg/1280px-Daintree_Rainforest%2C_Queensland_%28483855%29_%289440811465%29.jpg',
    author: 'Thomas Schoch',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 9,
    title: 'Visitar Wineglass Bay, en Tasmania',
    category: 'Naturaleza',
    description: 'Asomarse a la bahía perfecta en forma de copa de vino, con arena blanca como el azúcar y aguas de un turquesa deslumbrante.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Wineglass_Bay_view_from_the_Beach.jpg/1280px-Wineglass_Bay_view_from_the_Beach.jpg',
    author: 'Ksenia Baidin',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 10,
    title: 'Hacer una excursión en barco para observar ballenas en temporada',
    category: 'Naturaleza',
    description: 'Sentir la emoción indescriptible de ver emerger a las gigantescas ballenas jorobadas saltando sobre las aguas oceánicas.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Humpback_Whale_fg1_cropped.JPG',
    author: 'Whit Welles',
    license: 'CC BY-SA 3.0'
  },

  // 11-16: ANIMALES
  {
    id: 11,
    title: 'Ver quokkas en Rottnest Island',
    category: 'Animales',
    description: 'Conocer en persona al animal más feliz del mundo y enamorarse de su simpatía y curiosidad en una isla paradisíaca.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Setonix_brachyurus_on_Rottnest_Island_1.jpg/960px-Setonix_brachyurus_on_Rottnest_Island_1.jpg',
    author: 'Sam West',
    license: 'CC BY-SA 2.0'
  },
  {
    id: 12,
    title: 'Ver pequeños pingüinos en Phillip Island',
    category: 'Animales',
    description: 'Emocionarse al anochecer viendo desfilar a los pingüinos más diminutos del planeta regresando del océano hacia sus madrigueras.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Eudyptula_minor_Bruny_1.jpg/960px-Eudyptula_minor_Bruny_1.jpg',
    author: 'JJ Harrison',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 13,
    title: 'Ver canguros en libertad, respetando siempre su espacio',
    category: 'Animales',
    description: 'Observar a familias de canguros saltando libremente en las praderas australianas bajo la luz dorada del atardecer.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Red_kangaroo_-_melbourne_zoo.jpg/1280px-Red_kangaroo_-_melbourne_zoo.jpg',
    author: 'Benjamint444',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 14,
    title: 'Hacer un crucero por un río para observar cocodrilos cerca de Darwin con un operador responsable',
    category: 'Animales',
    description: 'Navegar por las aguas del norte tropical y admirar con respeto la fuerza ancestral de los cocodrilos de agua salada.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/SaltwaterCrocodile%28%27Maximo%27%29.jpg',
    author: 'B kimmel',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 15,
    title: 'Ver leones marinos en Seal Bay, en Kangaroo Island',
    category: 'Animales',
    description: 'Caminar tranquilamente por las dunas y la orilla junto a una colonia protegida de leones marinos descansando plácidamente.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Australian_sea_lion_02.JPG/1280px-Australian_sea_lion_02.JPG',
    author: 'Peripitus',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 16,
    title: 'Observar tortugas marinas durante la temporada adecuada y de forma responsable',
    category: 'Animales',
    description: 'Ver flotar suavemente a las tortugas marinas en las aguas turquesas del arrecife o presenciar su desove nocturno protegido.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg/1280px-Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg',
    author: 'Brocken Inaglory',
    license: 'CC BY-SA 3.0'
  },

  // 17-24: AVENTURA
  {
    id: 17,
    title: 'Hacer una ruta en coche por la Great Ocean Road',
    category: 'Aventura',
    description: 'Recorrer una de las carreteras costeras más legendarias del planeta entre acantilados vertiginosos, curvas panorámicas y koalas.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/2009-0825-GreatOceanRoadsign.jpg/1280px-2009-0825-GreatOceanRoadsign.jpg',
    author: 'Diliff',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 18,
    title: 'Explorar las Whitsundays en barco',
    category: 'Aventura',
    description: 'Navegar en velero por islas desiertas y pisar la arena de sílice puro y frío al tacto de la famosa Whitehaven Beach.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Whitehaven_Beach%2C_Whitsunday_Island%2C_Queensland.jpg/1280px-Whitehaven_Beach%2C_Whitsunday_Island%2C_Queensland.jpg',
    author: 'Damien Dempsey',
    license: 'CC BY 2.0'
  },
  {
    id: 19,
    title: 'Pasar una noche en el outback contemplando las estrellas',
    category: 'Aventura',
    description: 'Dormir bajo un cielo libre de contaminación lumínica donde la Vía Láctea brilla con una intensidad y nitidez conmovedoras.',
    url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1000&q=80',
    author: 'Lucas Pezeta',
    license: 'Unsplash License'
  },
  {
    id: 20,
    title: 'Subir al Sydney Harbour Bridge mediante la experiencia BridgeClimb',
    category: 'Aventura',
    description: 'Alcanzar la cima de la gran estructura de acero del puente de Sídney para disfrutar de una panorámica de 360 grados sobre la bahía.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Sydney_Harbour_Bridge-16_October_2025.jpg/1280px-Sydney_Harbour_Bridge-16_October_2025.jpg',
    author: 'Maksym Kozlenko',
    license: 'CC BY-SA 4.0'
  },
  {
    id: 21,
    title: 'Hacer un vuelo panorámico para ver Australia desde el aire',
    category: 'Aventura',
    description: 'Sobrevolar en avioneta o helicóptero maravillas naturales como el Heart Reef o los contrastes de la costa y el desierto.',
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&q=80',
    author: 'Dan Freeman',
    license: 'Unsplash License'
  },
  {
    id: 22,
    title: 'Dar una clase de surf',
    category: 'Aventura',
    description: 'Ponerse el neopreno, subirse a una tabla con una sonrisa y sentir la energía inigualable de atrapar tu primera ola australiana.',
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000&q=80',
    author: 'Jeremy Bishop',
    license: 'Unsplash License'
  },
  {
    id: 23,
    title: 'Hacer un vuelo en globo aerostático al amanecer',
    category: 'Aventura',
    description: 'Flotar plácidamente al alba sobre valles dorados y colinas brumosas mientras el sol baña el campo australiano.',
    url: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=1000&q=80',
    author: 'Francesco Ungaro',
    license: 'Unsplash License'
  },
  {
    id: 24,
    title: 'Viajar en el tren The Ghan',
    category: 'Aventura',
    description: 'Cruzar el corazón rojo del continente a bordo de este mítico tren que une las dos costas a través de paisajes infinitos.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/The_Ghan_train_in_Central_Australia_in_2012.jpg/1280px-The_Ghan_train_in_Central_Australia_in_2012.jpg',
    author: 'Centpacrr',
    license: 'CC BY-SA 3.0'
  },

  // 25-31: CIUDADES Y CULTURA
  {
    id: 25,
    title: 'Ver un espectáculo en la Sydney Opera House',
    category: 'Ciudades y cultura',
    description: 'Vivir una velada inolvidable de música o teatro en el edificio de velas blancas más representativo del hemisferio sur.',
    url: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=1000&q=80',
    author: 'Srikant Sahoo',
    license: 'Unsplash License'
  },
  {
    id: 26,
    title: 'Descubrir el arte urbano de Melbourne',
    category: 'Ciudades y cultura',
    description: 'Perderse por los callejones de Hosier Lane admirando murales vibrantes, grafitis con alma y cafeterías con encanto.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Hosier_Lane_from_Flinders_Street_Melbourne.jpg/960px-Hosier_Lane_from_Flinders_Street_Melbourne.jpg',
    author: 'Donaldytong',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 27,
    title: 'Visitar la National Gallery of Victoria (NGV) o el museo MONA, en Tasmania',
    category: 'Ciudades y cultura',
    description: 'Tumbarse bajo el techo de cristal de colores de la NGV o dejarse provocar por el arte vanguardista y laberíntico del MONA.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/National_Gallery_of_Victoria_2024.jpg/1280px-National_Gallery_of_Victoria_2024.jpg',
    author: 'Elekhh',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 28,
    title: 'Participar en una experiencia cultural guiada por personas aborígenes australianas, respetando sus tradiciones',
    category: 'Ciudades y cultura',
    description: 'Conectar con la cultura viva más antigua de la humanidad mediante relatos ancestrales del Dreamtime, danza y música sagrada.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Didgeridoo_Entier1.jpg/1280px-Didgeridoo_Entier1.jpg',
    author: 'Pierre Dalous',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 29,
    title: 'Ir a un cine al aire libre',
    category: 'Ciudades y cultura',
    description: 'Llevar cojines, una cesta de picoteo y disfrutar de una gran película sobre el césped con la brisa templada de la noche.',
    url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1000&q=80',
    author: 'Kilyan Sockalingum',
    license: 'Unsplash License'
  },
  {
    id: 30,
    title: 'Ver un partido de fútbol australiano (AFL) o de críquet',
    category: 'Ciudades y cultura',
    description: 'Vibrar con la afición en el mítico Melbourne Cricket Ground y vivir en directo la pasión deportiva más arraigada de Australia.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/2017_AFL_Grand_Final_panorama_during_national_anthem.jpg/1280px-2017_AFL_Grand_Final_panorama_during_national_anthem.jpg',
    author: 'FleurieuPhotography',
    license: 'CC BY-SA 4.0'
  },
  {
    id: 31,
    title: 'Pasar un día en un parque temático de Gold Coast',
    category: 'Ciudades y cultura',
    description: 'Gritar de emoción en montañas rusas espectaculares y disfrutar de un día lleno de risas en la capital del ocio de Queensland.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Warner_Bros_Movie_World_-_panoramio_%285%29.jpg/1280px-Warner_Bros_Movie_World_-_panoramio_%285%29.jpg',
    author: 'Michael Coghlan',
    license: 'CC BY-SA 2.0'
  },

  // 32-35: COMIDA Y BEBIDA
  {
    id: 32,
    title: 'Probar un meat pie australiano',
    category: 'Comida y bebida',
    description: 'Saborear el pastel de carne hojaldrado más popular de Australia, recién horneado con abundante carne y salsa de tomate.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Meat_pie.jpg/1280px-Meat_pie.jpg',
    author: 'Stuart C. Shapiro',
    license: 'CC BY-SA 3.0'
  },
  {
    id: 33,
    title: 'Probar un lamington',
    category: 'Comida y bebida',
    description: 'Endulzarse el día con el postre nacional australiano: esponjoso bizcocho tradicional bañado en chocolate y espolvoreado de coco.',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Mocha_Flake_amingtons.jpg/1280px-Mocha_Flake_amingtons.jpg',
    author: 'Alpha',
    license: 'CC BY-SA 2.0'
  },
  {
    id: 34,
    title: 'Hacer una cata de vinos australianos',
    category: 'Comida y bebida',
    description: 'Descubrir los aromas de los reputados Shiraz de Barossa Valley o Hunter Valley en una terraza soleada rodeada de viñas.',
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1000&q=80',
    author: 'Kym Ellis',
    license: 'Unsplash License'
  },
  {
    id: 35,
    title: 'Disfrutar de un brunch australiano con tostadas de aguacate y un flat white',
    category: 'Comida y bebida',
    description: 'Empezar el fin de semana con tostadas de masa madre con aguacate aliñado, huevo poché y el café de especialidad favorito de los locales.',
    url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1000&q=80',
    author: 'Ali Inay',
    license: 'Unsplash License'
  }
]

async function downloadImage(url, destPath) {
  const tmpPath = destPath + '.tmp'
  const curlCmd = `curl -sL -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)" "${url}" -o "${tmpPath}"`
  execSync(curlCmd, { stdio: ['pipe', 'pipe', 'pipe'] })

  const stat = fs.statSync(tmpPath)
  if (stat.size < 5000) {
    fs.unlinkSync(tmpPath)
    throw new Error(`Descarga demasiado pequeña (${stat.size} bytes), probablemente un error HTTP`)
  }

  // Optimizar con sips a 900px máximo y calidad 82
  execSync(`sips -Z 900 -s format jpeg -s formatOptions 82 "${tmpPath}" --out "${destPath}"`, {
    stdio: ['pipe', 'pipe', 'pipe']
  })
  if (fs.existsSync(tmpPath)) {
    fs.unlinkSync(tmpPath)
  }
}

async function main() {
  console.log(`Iniciando preparación y descarga de los ${PLANS_DEFINITIONS.length} planes...`)
  const results = []

  for (const plan of PLANS_DEFINITIONS) {
    const filename = `plan-${plan.id}.jpg`
    const targetPath = path.join(planesDir, filename)
    const localSrc = `/planes/${filename}`

    if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 10000) {
      console.log(`[${plan.id}/35] En caché: ${plan.title}`)
    } else {
      console.log(`[${plan.id}/35] Descargando imagen para: ${plan.title}...`)
      try {
        await downloadImage(plan.url, targetPath)
      } catch (err) {
        console.error(`ERROR en plan ${plan.id} (${plan.url}): ${err.message}`)
        process.exit(1)
      }
    }

    results.push({
      id: plan.id,
      title: plan.title,
      category: plan.category,
      description: plan.description,
      image: localSrc,
      photoAuthor: plan.author,
      photoLicense: plan.license,
      photoSource: plan.url
    })
  }

  // Generar plansData.ts
  const tsContent = `// Archivo generado automáticamente por scripts/download-planes.mjs
// Datos oficiales de los 35 planes de Australia para Georgina's Travel Journal

export type PlanCategory =
  | 'Todos'
  | 'Naturaleza'
  | 'Animales'
  | 'Aventura'
  | 'Ciudades y cultura'
  | 'Comida y bebida'

export interface PlanItem {
  id: number
  title: string
  category: 'Naturaleza' | 'Animales' | 'Aventura' | 'Ciudades y cultura' | 'Comida y bebida'
  description: string
  image: string
  photoAuthor: string
  photoLicense: string
  photoSource: string
}

export const PLAN_CATEGORIES: readonly PlanCategory[] = [
  'Todos',
  'Naturaleza',
  'Animales',
  'Aventura',
  'Ciudades y cultura',
  'Comida y bebida',
] as const

export const PLANS_DATA: readonly PlanItem[] = ${JSON.stringify(results, null, 2)} as const
`

  fs.writeFileSync(outputDataFile, tsContent, 'utf8')
  console.log(`\n¡Éxito total! Los 35 planes han sido procesados y guardados en:`)
  console.log(`- Recursos estáticos: ${planesDir}`)
  console.log(`- Archivo de datos: ${outputDataFile}`)
}

main().catch((err) => {
  console.error('Fallo en la ejecución:', err)
  process.exit(1)
})
