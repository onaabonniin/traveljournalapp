export interface WeeklyChallenge {
  week: 1 | 2 | 3 | 4
  weekLabel: string
  description: string
}

export interface MonthLetter {
  monthNumber: number
  monthName: string
  monthEmoji: string
  fullMonthTitle: string
  title: string
  unlockDateFormatted: string
  content: string
  paragraphs: string[]
  challengesTitle: string
  challenges: WeeklyChallenge[]
}

export const LETTERS_DATA: MonthLetter[] = [
  {
    monthNumber: 1,
    monthName: 'Enero',
    monthEmoji: '✈️🤍',
    fullMonthTitle: 'Enero ✈️🤍',
    title: 'El principio de la aventura',
    unlockDateFormatted: '1 de enero de 2027',
    content: `Hola, bebé. 🥹❤️

No sé si ahora mismo estás leyendo esto rodeada de cajas, ropa por todas partes y con la cabeza hecha un lío intentando que no se te olvide absolutamente nada. Pero quiero que sea lo que sea que estés haciendo, disfrutes de cada paso del proceso. Cada pequeño escalón es parte de este viaje que no olvidarás nunca, así que atesóralo con todas tus ganas. Un día mirarás atrás y querrás volver a vivir incluso hacer las maletas.

Estoy tan increíblemente orgullosa de ti que creo que todavía no soy capaz de ponerle palabras. No me puedo creer cuánto has crecido ya como persona y todo lo que te queda por delante. Eres MUY valiente Georgina, estás a punto de empezar la experiencia que más te cambiará la vida hasta ahora.

Y bueno, quiero pedirte una cosa muy importante. Antes de subirte a ese avión, antes de que Australia empiece a cambiarte... párate un momento y piensa un momento solo en ti, solo en Georgina. ¿Qué quieres sacar de esta aventura? ¿Quién quieres ser cuando vuelvas? ¿Qué cosas quieres vivir sí o sí?

Este viaje no es para demostrarle nada a nadie. Es para ti. Te lo mereces.

Empaqueta tranquila, despídete de una forma especial de toda la gente que quieres, llora si hace falta y recuerda que el miedo no significa que no puedas hacerlo. Significa que estás dando un paso ENORME.

Y una cosa más… recuerda que no vas a hacer este viaje sola.

Yo estaré contigo en cada aeropuerto, en cada vuelo, en cada café nuevo, en cada paseo y en cada momento en el que necesites acordarte de casa. ❤️

Te quiero tanto que me duele el corazón, tu bebita.`,
    paragraphs: [
      'Hola, bebé. 🥹❤️',
      'No sé si ahora mismo estás leyendo esto rodeada de cajas, ropa por todas partes y con la cabeza hecha un lío intentando que no se te olvide absolutamente nada. Pero quiero que sea lo que sea que estés haciendo, disfrutes de cada paso del proceso. Cada pequeño escalón es parte de este viaje que no olvidarás nunca, así que atesóralo con todas tus ganas. Un día mirarás atrás y querrás volver a vivir incluso hacer las maletas.',
      'Estoy tan increíblemente orgullosa de ti que creo que todavía no soy capaz de ponerle palabras. No me puedo creer cuánto has crecido ya como persona y todo lo que te queda por delante. Eres MUY valiente Georgina, estás a punto de empezar la experiencia que más te cambiará la vida hasta ahora.',
      'Y bueno, quiero pedirte una cosa muy importante. Antes de subirte a ese avión, antes de que Australia empiece a cambiarte... párate un momento y piensa un momento solo en ti, solo en Georgina. ¿Qué quieres sacar de esta aventura? ¿Quién quieres ser cuando vuelvas? ¿Qué cosas quieres vivir sí o sí?',
      'Este viaje no es para demostrarle nada a nadie. Es para ti. Te lo mereces.',
      'Empaqueta tranquila, despídete de una forma especial de toda la gente que quieres, llora si hace falta y recuerda que el miedo no significa que no puedas hacerlo. Significa que estás dando un paso ENORME.',
      'Y una cosa más… recuerda que no vas a hacer este viaje sola.',
      'Yo estaré contigo en cada aeropuerto, en cada vuelo, en cada café nuevo, en cada paseo y en cada momento en el que necesites acordarte de casa. ❤️',
      'Te quiero tanto que me duele el corazón, tu bebita.',
    ],
    challengesTitle: 'Retos de enero 📝',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Dedica 30 minutos a escribir una lista con todas las experiencias que quieres vivir sí o sí en Australia.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Haz la maleta definitiva sin dejarte nada importante.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Despídete de cada persona especial de una forma bonita.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Cuando llegues, investiga cafeterías y rincones monos cerca de donde vivas.',
      },
    ],
  },
  {
    monthNumber: 2,
    monthName: 'Febrero',
    monthEmoji: '☀️☕',
    fullMonthTitle: 'Febrero ☀️☕',
    title: 'Empieza de verdad',
    unlockDateFormatted: '1 de febrero de 2027',
    content: `Hola, bebé. 💗

Mmmmmmmm… confiesa…...

¿Ya me estás echando de menos? Porque yo a ti sí. Muchísimo.

Según el plan que tenías cuando estaba escribiendo esto, ahora ya deberías estar instalada en Australia. Espero que tengas la maleta completamente deshecha (sí, te estoy vigilando 👀) y que ya me hayas mandado tres mil vídeos, room tours, fotos de las calles de tu barrio, comida rara y absolutamente todo lo que hayas hecho hasta ahora.

Quiero verlo TODO.

Espero que el sitio donde vivís os esté haciendo sentir en casa poquito a poco. Sé que al principio todo parecerá raro: los horarios, la gente, las calles... pero también sé que acabarás haciendo tuyos todos los lugares.

Pero bueno, la verdad es que el periodo de adaptación está terminando bebé. Ahora empieza de verdad tu aventura.

Empieza a curiosear, a perderte un poquito, a decir que sí a planes nuevos y a construir una rutina que sea vuestra, pero sobre todo tuya.

Apóyate muchísimo en Jean ❤️. Vais a vivir cosas increíbles juntos.

Y prométeme una cosa.

No dejes nunca de enseñarme tu mundo nuevo. ¡Que no decaigan las videollamadas!

Te quiere, la persona más graciosa que conoces.`,
    paragraphs: [
      'Hola, bebé. 💗',
      'Mmmmmmmm… confiesa…...',
      '¿Ya me estás echando de menos? Porque yo a ti sí. Muchísimo.',
      'Según el plan que tenías cuando estaba escribiendo esto, ahora ya deberías estar instalada en Australia. Espero que tengas la maleta completamente deshecha (sí, te estoy vigilando 👀) y que ya me hayas mandado tres mil vídeos, room tours, fotos de las calles de tu barrio, comida rara y absolutamente todo lo que hayas hecho hasta ahora.',
      'Quiero verlo TODO.',
      'Espero que el sitio donde vivís os esté haciendo sentir en casa poquito a poco. Sé que al principio todo parecerá raro: los horarios, la gente, las calles... pero también sé que acabarás haciendo tuyos todos los lugares.',
      'Pero bueno, la verdad es que el periodo de adaptación está terminando bebé. Ahora empieza de verdad tu aventura.',
      'Empieza a curiosear, a perderte un poquito, a decir que sí a planes nuevos y a construir una rutina que sea vuestra, pero sobre todo tuya.',
      'Apóyate muchísimo en Jean ❤️. Vais a vivir cosas increíbles juntos.',
      'Y prométeme una cosa.',
      'No dejes nunca de enseñarme tu mundo nuevo. ¡Que no decaigan las videollamadas!',
      'Te quiere, la persona más graciosa que conoces.',
    ],
    challengesTitle: 'Retos de febrero 🌿',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Ve sola a desayunar o merendar a una cafetería bonita.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Haz una búsqueda de un hobby o deporte nuevo que puedas empezar allí próximamente.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Descubre un parque cercano y date un paseo.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Escribe al menos una página cada 15 días en tu journal.',
      },
    ],
  },
  {
    monthNumber: 3,
    monthName: 'Marzo',
    monthEmoji: '🌸✨',
    fullMonthTitle: 'Marzo 🌸✨',
    title: 'Ahora sí: vive la aventura',
    unlockDateFormatted: '1 de marzo de 2027',
    content: `Bebé.

Vale…¡Tu nueva vida empieza a ser real! 😌❤️

Has tenido enero para despedirte. Febrero para aterrizar. Y en marzo toca empezar a vivir.

Quiero que te acuerdes muchísimo de aquella conversación que tuvimos. De cada palabra. De todo lo que soñabas hacer antes de irte.

No has venido hasta Australia para sobrevivir ni para ir con el modo automático.

Has venido para descubrir quién es Georgina cuando nadie espera nada de ella.

Así que sal de tu zona de confort.

Habla con gente. Haz cosas aunque te den vergüenza. Atrévete (salte del closet, destápate quítate el esmalte).

Porque dentro de unos meses mirarás atrás y querrás haber dicho muchos más "sí" que "ojalá".

Estoy orgullosísima de ti. De verdad. No lo olvides. Y quiero que tú también empieces a sentir ese orgullo cuando te mires al espejo.

Estás construyendo una versión de ti que seguramente todavía ni conoces.

¿Qué emoción no?

Te quiero muchísimo. Tu compi de boxeo ❤️`,
    paragraphs: [
      'Bebé.',
      'Vale…¡Tu nueva vida empieza a ser real! 😌❤️',
      'Has tenido enero para despedirte. Febrero para aterrizar. Y en marzo toca empezar a vivir.',
      'Quiero que te acuerdes muchísimo de aquella conversación que tuvimos. De cada palabra. De todo lo que soñabas hacer antes de irte.',
      'No has venido hasta Australia para sobrevivir ni para ir con el modo automático.',
      'Has venido para descubrir quién es Georgina cuando nadie espera nada de ella.',
      'Así que sal de tu zona de confort.',
      'Habla con gente. Haz cosas aunque te den vergüenza. Atrévete (salte del closet, destápate quítate el esmalte).',
      'Porque dentro de unos meses mirarás atrás y querrás haber dicho muchos más "sí" que "ojalá".',
      'Estoy orgullosísima de ti. De verdad. No lo olvides. Y quiero que tú también empieces a sentir ese orgullo cuando te mires al espejo.',
      'Estás construyendo una versión de ti que seguramente todavía ni conoces.',
      '¿Qué emoción no?',
      'Te quiero muchísimo. Tu compi de boxeo ❤️',
    ],
    challengesTitle: 'Retos de marzo 🚀',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Consigue el Instagram o WhatsApp de una persona nueva.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Si todavía no has hecho una amiga cercana, atrévete a dar tú el primer paso!!!',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Prueba una clase de los hobbies o deportes que encontraste el mes pasado (si realizaste los retos jajaj).',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Da un paseo completamente sola, solo contigo y tu música (sin mirar el móvil!).',
      },
    ],
  },
  {
    monthNumber: 4,
    monthName: 'Abril',
    monthEmoji: '🌷💌',
    fullMonthTitle: 'Abril 🌷💌',
    title: 'No dejemos de encontrarnos',
    unlockDateFormatted: '1 de abril de 2027',
    content: `Hola, mi bebé.

No me puedo creer que ya lleves cuatro meses.

Y quiero pedirte una cosa seriamente… No dejemos nunca que la distancia nos haga hablar menos.

Si algún día notas que estamos hablando menos de lo que nos gustaría... mándame una captura de esta carta. Recuérdamelo porque tenemos que cuidar de nuestra amistad.

Quiero videollamadas, audio podcasts, continuar contándonos nuestros dramas, reírnos sin parar estirando las bromas y seguir sintiendo que formas parte de mi día aunque estés al otro lado del mundo.

A lo mejor ahora empiezas a echar muchísimo de menos a tu familia, a tus amigos y a tu casa. Y es normal, no significa que estés haciendo nada mal.

Solo significa que has dejado personas (y gatis jeje) aquí que te queremos muchísimo. Pero todos estamos aquí esperándote y aquí seguiremos cuando vuelvas.

Mientras tanto... sigue construyendo tu vida allí. Sigue construyendo a la Georgina que siempre has querido ser.

Porque esta oportunidad no vuelve.

Te echo de menos, tu catalufa ❤️`,
    paragraphs: [
      'Hola, mi bebé.',
      'No me puedo creer que ya lleves cuatro meses.',
      'Y quiero pedirte una cosa seriamente… No dejemos nunca que la distancia nos haga hablar menos.',
      'Si algún día notas que estamos hablando menos de lo que nos gustaría... mándame una captura de esta carta. Recuérdamelo porque tenemos que cuidar de nuestra amistad.',
      'Quiero videollamadas, audio podcasts, continuar contándonos nuestros dramas, reírnos sin parar estirando las bromas y seguir sintiendo que formas parte de mi día aunque estés al otro lado del mundo.',
      'A lo mejor ahora empiezas a echar muchísimo de menos a tu familia, a tus amigos y a tu casa. Y es normal, no significa que estés haciendo nada mal.',
      'Solo significa que has dejado personas (y gatis jeje) aquí que te queremos muchísimo. Pero todos estamos aquí esperándote y aquí seguiremos cuando vuelvas.',
      'Mientras tanto... sigue construyendo tu vida allí. Sigue construyendo a la Georgina que siempre has querido ser.',
      'Porque esta oportunidad no vuelve.',
      'Te echo de menos, tu catalufa ❤️',
    ],
    challengesTitle: 'Retos de abril 🎉',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Sal de fiesta con gente nueva (con Jean o con tus nuevos amigos).',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Visita un lugar emblemático de tu ciudad.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Ve a la playa o a la montaña sola un rato.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Haz una videollamada conmigo!',
      },
    ],
  },
  {
    monthNumber: 5,
    monthName: 'Mayo',
    monthEmoji: '🌼🦘',
    fullMonthTitle: 'Mayo 🌼🦘',
    title: 'Ya eres medio australiana',
    unlockDateFormatted: '1 de mayo de 2027',
    content: `Hola, australianaaaa. 😌

Qué fuerte, ya vives ahí, tendrás tus rutinas, tus cafeterías favoritas, tu supermercado de confianza, incluso amigas que estarán intentando sustituirme… qué fuerteeeee! Bueno, les deseo toda la suerte del mundo porque no lo van a conseguir.

Este mes te he puesto algunos retos para que te des un caprichito. Recuerda el inmenso esfuerzo que estás haciendo, estás en la otra punta del mundo trabajando de algo que no es tu vocación únicamente para ahorrar dinero. Así que sí, de tanto en tanto te mereces un capricho.

Recorre mercadillos o tiendas de ropa que te guste y cómprate algo bonitooo. Siempre me puedes echar la culpa a mi.

Te quiero, tu bebita.`,
    paragraphs: [
      'Hola, australianaaaa. 😌',
      'Qué fuerte, ya vives ahí, tendrás tus rutinas, tus cafeterías favoritas, tu supermercado de confianza, incluso amigas que estarán intentando sustituirme… qué fuerteeeee! Bueno, les deseo toda la suerte del mundo porque no lo van a conseguir.',
      'Este mes te he puesto algunos retos para que te des un caprichito. Recuerda el inmenso esfuerzo que estás haciendo, estás en la otra punta del mundo trabajando de algo que no es tu vocación únicamente para ahorrar dinero. Así que sí, de tanto en tanto te mereces un capricho.',
      'Recorre mercadillos o tiendas de ropa que te guste y cómprate algo bonitooo. Siempre me puedes echar la culpa a mi.',
      'Te quiero, tu bebita.',
    ],
    challengesTitle: 'Retos de mayo 🛍️',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Compra algo bonito para ti sin sentirte culpable.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Descubre un mercadillo local.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Cocina un postre saludable que te haga ilusión.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Haz una excursión de un día con Jean.',
      },
    ],
  },
  {
    monthNumber: 6,
    monthName: 'Junio',
    monthEmoji: '🌊☀️',
    fullMonthTitle: 'Junio 🌊☀️',
    title: 'Recuérdate a ti misma',
    unlockDateFormatted: '1 de junio de 2027',
    content: `Holaaa bebé 🥹❤️

Aquí empieza el verano y no te voy a mentir, inevitablemente me acuerdo de todos nuestros veranos juntas. De salir a bailar, de improvisar planes de la nada, de reírnos por cualquier tontería y de acabar haciendo mil cosas que seguramente ni habíamos planeado. Y sí, te echo muchísimo de menos. Ojalá pudieras estar aquí para vivirlo conmigo, pero bueno, nos quedan tantísimos veranos juntas que este te lo voy a perdonar. 😌💗

Pero ahora quiero que te centres en el tuyo, porque tú también estás viviendo algo increíble. Ya llevas medio año en Australia, bebé. ¡MEDIO AÑO! ¿Cómo puede ser?? Espero que estés disfrutando muchísimo, que estés conociendo a gente que te haga feliz y que estés haciendo planes que ni te habrías imaginado antes de irte.

Eso sí, quiero que aproveches este mes para parar un poquito y pensar en ti. Acuérdate de aquella Georgina que hizo la maleta, de todas las cosas que quería vivir y de todo lo que se prometió antes de subir al avión. ¿Estás haciendo las cosas que te gustan? ¿Estás descubriendo cosas nuevas? ¿Te estás dando tiempo para ti? ¿Estás siendo la Georgina que quieres ser?

No te olvides de las cosas que te hacen feliz, bebé. No tienes que convertirte en otra persona para crecer. Se trata de conocerte mejor, de descubrir qué quieres y de construir una vida en la que tú también estés a gusto.

Estoy súper orgullosa de ti y te quiero una barbaridad. ❤️

Tu sí a todo, que ya está deseando vivir otro verano contigo. 🥹`,
    paragraphs: [
      'Holaaa bebé 🥹❤️',
      'Aquí empieza el verano y no te voy a mentir, inevitablemente me acuerdo de todos nuestros veranos juntas. De salir a bailar, de improvisar planes de la nada, de reírnos por cualquier tontería y de acabar haciendo mil cosas que seguramente ni habíamos planeado. Y sí, te echo muchísimo de menos. Ojalá pudieras estar aquí para vivirlo conmigo, pero bueno, nos quedan tantísimos veranos juntas que este te lo voy a perdonar. 😌💗',
      'Pero ahora quiero que te centres en el tuyo, porque tú también estás viviendo algo increíble. Ya llevas medio año en Australia, bebé. ¡MEDIO AÑO! ¿Cómo puede ser?? Espero que estés disfrutando muchísimo, que estés conociendo a gente que te haga feliz y que estés haciendo planes que ni te habrías imaginado antes de irte.',
      'Eso sí, quiero que aproveches este mes para parar un poquito y pensar en ti. Acuérdate de aquella Georgina que hizo la maleta, de todas las cosas que quería vivir y de todo lo que se prometió antes de subir al avión. ¿Estás haciendo las cosas que te gustan? ¿Estás descubriendo cosas nuevas? ¿Te estás dando tiempo para ti? ¿Estás siendo la Georgina que quieres ser?',
      'No te olvides de las cosas que te hacen feliz, bebé. No tienes que convertirte en otra persona para crecer. Se trata de conocerte mejor, de descubrir qué quieres y de construir una vida en la que tú también estés a gusto.',
      'Estoy súper orgullosa de ti y te quiero una barbaridad. ❤️',
      'Tu sí a todo, que ya está deseando vivir otro verano contigo. 🥹',
    ],
    challengesTitle: 'Retos de junio 🌞',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Haz una lista de todas las cosas que has conseguido desde que llegaste a Australia.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Sé constante con el deporte durante todo el mes.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Hazte una sesión de fotos por tu ciudad. Busca rincones bonitos, ponte monísima y recuerda que estás viviendo una aventura que merece tener fotones.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Llévate pinturas, acuarelas o un cuaderno a un parque o a la naturaleza y dedica una tarde a pintar y colorear. Sin prisas y sin mirar el móvil!!!!',
      },
    ],
  },
  {
    monthNumber: 7,
    monthName: 'Julio',
    monthEmoji: '💃🌺',
    fullMonthTitle: 'Julio 💃🌺',
    title: 'Las personas correctas siempre se quedan',
    unlockDateFormatted: '1 de julio de 2027',
    content: `Holi bebé. ❤️

A ver, ahora mismo seguramente estaríamos planeando salir a bailar, diciendo que nos vamos a tomar algo tranquilamente y acabando haciendo mil planes más, o pensando en alguna escapada a Menorca. Y no te voy a engañar, me da una pena increíble no poder vivir esas cosas contigo este verano. Pero nos queda toda la vida por delante para hacerlas juntas, así que ahora te toca vivir tu propia aventura.

Espero que estés disfrutando muchísimo, que estés saliendo, bailando, conociendo gente y haciendo todas esas cosas que luego me contarás durante tres horas seguidas en una videollamada. Porque te conozco y quiero el chisme completo, con contexto, detalles y psico análisis posterior JAJAJA 💋

Pero este mes también quiero recordarte que tienes que rodearte de personas que te hagan sentir bien, que te valoren, que te quieran como eres y con las que puedas ser tú misma. No tienes que cambiar tu forma de ser para caerle bien a nadie, ni hacerte pequeña para encajar en un grupo. Tú eres una persona increíble y quien tenga la suerte de conocerte debería poder verlo.

Y si alguien no te valora, te hace sentir mal o no te trata como mereces, pues nada me llamar y yo le caigo a Australia y le meto un crochet que le mato 😌 No has cruzado medio mundo para perder el tiempo con gente que no te aporta nada.

Estoy muy orgullosa de ti. Disfruta muchísimo, atrévete a hacer planes y no te olvides de lo mucho que vales. Aquí tienes a un montón de personas que te quieren y que te esperan con los brazos abiertos.

Tu bebita, que está deseando volver a salir a bailar contigooo 💃🏼`,
    paragraphs: [
      'Holi bebé. ❤️',
      'A ver, ahora mismo seguramente estaríamos planeando salir a bailar, diciendo que nos vamos a tomar algo tranquilamente y acabando haciendo mil planes más, o pensando en alguna escapada a Menorca. Y no te voy a engañar, me da una pena increíble no poder vivir esas cosas contigo este verano. Pero nos queda toda la vida por delante para hacerlas juntas, así que ahora te toca vivir tu propia aventura.',
      'Espero que estés disfrutando muchísimo, que estés saliendo, bailando, conociendo gente y haciendo todas esas cosas que luego me contarás durante tres horas seguidas en una videollamada. Porque te conozco y quiero el chisme completo, con contexto, detalles y psico análisis posterior JAJAJA 💋',
      'Pero este mes también quiero recordarte que tienes que rodearte de personas que te hagan sentir bien, que te valoren, que te quieran como eres y con las que puedas ser tú misma. No tienes que cambiar tu forma de ser para caerle bien a nadie, ni hacerte pequeña para encajar en un grupo. Tú eres una persona increíble y quien tenga la suerte de conocerte debería poder verlo.',
      'Y si alguien no te valora, te hace sentir mal o no te trata como mereces, pues nada me llamar y yo le caigo a Australia y le meto un crochet que le mato 😌 No has cruzado medio mundo para perder el tiempo con gente que no te aporta nada.',
      'Estoy muy orgullosa de ti. Disfruta muchísimo, atrévete a hacer planes y no te olvides de lo mucho que vales. Aquí tienes a un montón de personas que te quieren y que te esperan con los brazos abiertos.',
      'Tu bebita, que está deseando volver a salir a bailar contigooo 💃🏼',
    ],
    challengesTitle: 'Retos de julio 🌺',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Ve a un social de salsa y bachata australianooo.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Organiza tú un plan con tus amigos.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Escribe una carta para tu "yo del futuro" en el journal, captura qué sientes ahora para poder volverlo a sentir después de esta aventura.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Prueba una comida australiana nueva.',
      },
    ],
  },
  {
    monthNumber: 8,
    monthName: 'Agosto',
    monthEmoji: '🍉✨',
    fullMonthTitle: 'Agosto 🍉✨',
    title: 'El dream team sigue intacto',
    unlockDateFormatted: '1 de agosto de 2027',
    content: `Hola, mi bebé. 🥹❤️

Me parece increíble que ya estemos en agosto. ¿En qué momento ha pasado todo este tiempoooo? Te imagino viviendo al otro lado del mundo, con tus rutinas, tus planes, tus sitios favoritos y tu nueva vida. Y me hace muchísima ilusión pensar en todas las cosas que estás viviendo y en todo lo que todavía te queda por descubrir.

Por aquí el dreamteam sigue en pie y te estamos esperando. Juls y yo nos acordamos muchísimo de ti y hay muchísimas cosas que no son lo mismo sin nuestra tercera integrante. Pero tranquila, que cuando vuelvas volveremos a estar las tres juntas partiendo la pista de baile 💃🏼

También espero que estés disfrutando muchísimo con Jean y que estéis construyendo recuerdos preciosos juntos. Seguro que vivir una aventura así tiene momentos increíbles y otros más complicados, porque compartir una experiencia tan grande también significa aprender muchísimo el uno del otro. Espero que os estéis cuidando, que os apoyéis y que estéis disfrutando de todo lo que estáis viviendo.

Estoy muy orgullosa de ti y espero que tú también lo estés. Disfruta muchísimo de agosto, haz planes, descubre lugares nuevos y sigue acumulando historias que algún día les contarás a tus hijos (mis sobrinos).

Tu compi del dreamteam, que te echa de menos una barbaridad 🥹`,
    paragraphs: [
      'Hola, mi bebé. 🥹❤️',
      'Me parece increíble que ya estemos en agosto. ¿En qué momento ha pasado todo este tiempoooo? Te imagino viviendo al otro lado del mundo, con tus rutinas, tus planes, tus sitios favoritos y tu nueva vida. Y me hace muchísima ilusión pensar en todas las cosas que estás viviendo y en todo lo que todavía te queda por descubrir.',
      'Por aquí el dreamteam sigue en pie y te estamos esperando. Juls y yo nos acordamos muchísimo de ti y hay muchísimas cosas que no son lo mismo sin nuestra tercera integrante. Pero tranquila, que cuando vuelvas volveremos a estar las tres juntas partiendo la pista de baile 💃🏼',
      'También espero que estés disfrutando muchísimo con Jean y que estéis construyendo recuerdos preciosos juntos. Seguro que vivir una aventura así tiene momentos increíbles y otros más complicados, porque compartir una experiencia tan grande también significa aprender muchísimo el uno del otro. Espero que os estéis cuidando, que os apoyéis y que estéis disfrutando de todo lo que estáis viviendo.',
      'Estoy muy orgullosa de ti y espero que tú también lo estés. Disfruta muchísimo de agosto, haz planes, descubre lugares nuevos y sigue acumulando historias que algún día les contarás a tus hijos (mis sobrinos).',
      'Tu compi del dreamteam, que te echa de menos una barbaridad 🥹',
    ],
    challengesTitle: 'Retos de agosto 🌿',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Organiza una escapada de un día con Jean a algún lugar bonito cerca de donde vivís.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Visita algún santuario o lugar donde puedas ver animales australianos.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Empieza un hobby nuevo (crochet, acuarelas, cerámica...).',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Organiza un picnic bonito en un parque o en la naturaleza.',
      },
    ],
  },
  {
    monthNumber: 9,
    monthName: 'Septiembre',
    monthEmoji: '🎂💗',
    fullMonthTitle: 'Septiembre 🎂💗',
    title: 'Mi único regalo',
    unlockDateFormatted: '1 de septiembre de 2027',
    content: `Hola, beibiiiii ❤️

Bueno, bueno, bueno… ha llegado septiembre, lo que significa que se acerca mi cumple 🥳🎂 Y sí, obviamente me vas a echar muchísimo de menos, porque ¿cómo vas a celebrar mi cumpleaños sin mí al lado? Inaceptable, la verdad. JAJJAJA

Ahora en serio, ya llevamos nueve meses separadas y no me puedo creer que haya pasado tanto tiempo. A veces pienso en lo muchísimo que me gustaría tenerte aquí para contarte cualquier tontería en persona, quedar sin tener que cuadrar horarios imposibles o simplemente estar juntas haciendo absolutamente nada. Te echo muchísimo de menos y hay momentos en los que me encantaría poder darte un abrazo :(

Pero, por encima de todo, quiero que sepas que me hace muchísima ilusión verte construir tu vida y vivir una aventura tan grande. Espero que estés conociendo a gente maravillosa, que estés haciendo planes increíbles y que cada vez te sientas más tú misma allí.

Y ahora te voy a pedir mi regalo de cumple 🎁 Quiero que sigamos contándonos nuestros dramas, haciendo videollamadas y riéndonos de las mismas tonterías de siempre. Y si algún día notas que estamos perdiendo un poco el contacto, me lo dices, ¿vale? No quiero que ninguna de las dos dé por hecho que la otra ya sabe cuánto la quiere. Quiero que sigamos cuidando nuestra amistad, incluso desde la otra punta del mundo.

Porque tú eres una de mis personas favoritas y quiero que lo sigas siendo durante muchísimos años más.

Te quiero, te adoro y te echo muchísimo de menos. ❤️`,
    paragraphs: [
      'Hola, beibiiiii ❤️',
      'Bueno, bueno, bueno… ha llegado septiembre, lo que significa que se acerca mi cumple 🥳🎂 Y sí, obviamente me vas a echar muchísimo de menos, porque ¿cómo vas a celebrar mi cumpleaños sin mí al lado? Inaceptable, la verdad. JAJJAJA',
      'Ahora en serio, ya llevamos nueve meses separadas y no me puedo creer que haya pasado tanto tiempo. A veces pienso en lo muchísimo que me gustaría tenerte aquí para contarte cualquier tontería en persona, quedar sin tener que cuadrar horarios imposibles o simplemente estar juntas haciendo absolutamente nada. Te echo muchísimo de menos y hay momentos en los que me encantaría poder darte un abrazo :(',
      'Pero, por encima de todo, quiero que sepas que me hace muchísima ilusión verte construir tu vida y vivir una aventura tan grande. Espero que estés conociendo a gente maravillosa, que estés haciendo planes increíbles y que cada vez te sientas más tú misma allí.',
      'Y ahora te voy a pedir mi regalo de cumple 🎁 Quiero que sigamos contándonos nuestros dramas, haciendo videollamadas y riéndonos de las mismas tonterías de siempre. Y si algún día notas que estamos perdiendo un poco el contacto, me lo dices, ¿vale? No quiero que ninguna de las dos dé por hecho que la otra ya sabe cuánto la quiere. Quiero que sigamos cuidando nuestra amistad, incluso desde la otra punta del mundo.',
      'Porque tú eres una de mis personas favoritas y quiero que lo sigas siendo durante muchísimos años más.',
      'Te quiero, te adoro y te echo muchísimo de menos. ❤️',
    ],
    challengesTitle: 'Retos de septiembre 🌸',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Hagamos una videollamada especial, sin prisaas!',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'No te olvides de que te gusta crear contenido y compartir tus experiencias.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Invita a alguien a tomar un café.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Haz eso que tienes pendiente de hacer desde hace meses.',
      },
    ],
  },
  {
    monthNumber: 10,
    monthName: 'Octubre',
    monthEmoji: '🍂🤎',
    fullMonthTitle: 'Octubre 🍂🤎',
    title: 'Mira todo lo que has conseguido',
    unlockDateFormatted: '1 de octubre de 2027',
    content: `Hola mi bebitaa. ❤️

Hoy vengo a recordarte que… ERES UNA MÁQUINA. Y quiero que te lo repitas las veces que haga falta, porque a veces creo que no eres del todo consciente de lo que estás haciendo.

No me puedo creer que estés a punto de cumplir un año viviendo esta aventura. Un año, Georgina. Un año desde que hiciste las maletas, te despediste de todo lo que conocías y te fuiste a la otra punta del mundo a empezar de cero. ¿Tú te das cuenta de lo que significa eso?

Has tenido que adaptarte a un país nuevo, conocer gente, aprender a vivir de otra manera, enfrentarte a momentos que seguramente no esperabas y resolver mil cosas por tu cuenta. Y estoy segura de que has aprendido muchísimo, incluso en aquellos días en los que sentías que no estabas avanzando nada.

Por eso quiero que este mes dejes de mirar tanto lo que te falta por hacer y empieces a mirar todo lo que ya has conseguido. No minimices tus logros, no te compares con los demás y no te digas que las cosas que has hecho no son para tanto. Claro que son para tanto, bebé. 

Estoy convencida de que la Georgina que está leyendo esta carta es diferente de la que hizo la maleta en Castefa.  Así que abraza ese cambio, disfruta de lo que queda y, si hay algo que no está saliendo como esperabas, recuerda que todavía estás a tiempo de cambiarlo.

Tu fan número uno, que sabía que podías con esto y con muchísimo más. 🥹`,
    paragraphs: [
      'Hola mi bebitaa. ❤️',
      'Hoy vengo a recordarte que… ERES UNA MÁQUINA. Y quiero que te lo repitas las veces que haga falta, porque a veces creo que no eres del todo consciente de lo que estás haciendo.',
      'No me puedo creer que estés a punto de cumplir un año viviendo esta aventura. Un año, Georgina. Un año desde que hiciste las maletas, te despediste de todo lo que conocías y te fuiste a la otra punta del mundo a empezar de cero. ¿Tú te das cuenta de lo que significa eso?',
      'Has tenido que adaptarte a un país nuevo, conocer gente, aprender a vivir de otra manera, enfrentarte a momentos que seguramente no esperabas y resolver mil cosas por tu cuenta. Y estoy segura de que has aprendido muchísimo, incluso en aquellos días en los que sentías que no estabas avanzando nada.',
      'Por eso quiero que este mes dejes de mirar tanto lo que te falta por hacer y empieces a mirar todo lo que ya has conseguido. No minimices tus logros, no te compares con los demás y no te digas que las cosas que has hecho no son para tanto. Claro que son para tanto, bebé.',
      'Estoy convencida de que la Georgina que está leyendo esta carta es diferente de la que hizo la maleta en Castefa.  Así que abraza ese cambio, disfruta de lo que queda y, si hay algo que no está saliendo como esperabas, recuerda que todavía estás a tiempo de cambiarlo.',
      'Tu fan número uno, que sabía que podías con esto y con muchísimo más. 🥹',
    ],
    challengesTitle: 'Retos de octubre 📸',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Escribe una lista en el journal de diez cosas de las que te sientas orgullosa desde que llegaste a Australia.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Vuelve a tu cafetería favorita y disfruta de un desayuno o una merienda sin prisas.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Ves a ver el atardecer (o el amanecer).',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Regálate una tarde completamente libre. Nada de obligaciones ni de sentirte culpable por descansar. Haz lo que te apetezca y punto.',
      },
    ],
  },
  {
    monthNumber: 11,
    monthName: 'Noviembre',
    monthEmoji: '🎉🎂',
    fullMonthTitle: 'Noviembre 🎉🎂',
    title: 'Feliz cumpleaños',
    unlockDateFormatted: '1 de noviembre de 2027',
    content: `FELIZ CUMPLEAÑOS, MI AMOR. 🥹🎂💗

¡¡¡27 AÑOS!!! Y encima los cumples en Australia, viviendo la aventura más grande de tu vida hasta ahora. QUÉ JEVY. ¿Quién nos iba a decir hace un tiempo que estarías celebrando tus 27 al otro lado del mundo? Espero que hoy te pares un momento a pensar en todo lo que has vivido y en lo increíble que es poder decir que te has atrevido a hacer algo así.

Ojalá hoy estés rodeada de muchísima gente que te quiera, que te haga reír, que te cuide y que te recuerde lo especial que eres. Espero que tengas un día precioso, que te mimen muchísimo Y que comas algo rico¡Te lo mereces todoooo! ❤️

Y si en algún momento del día echas de menos España, tu familia, tus amigos o las celebraciones de siempre, acuérdate de que aquí estamos todos pensando en ti. Desde Barcelona te mandamos un abrazo enorme y estamos celebrando tu cumpleaños contigo, aunque sea a distancia. Yo no paro de pensar en ti y me estoy muriendo de ganas de poder darte un abrazo (y de celebrar tu cumple partiendo la pista).

Eso sí, quiero dejar una cosa muy clara: te perdono que este cumpleaños lo pases en Australia, pero los siguientes SESENTA cumpleaños me pertenecen. No te perdono ni uno más💋

Espero que este nuevo año de vida te traiga muchísimas cosas bonitas, que sigas creciendo, que te atrevas a hacer todo lo que te apetezca y que nunca olvides lo muchísimo que vales.

Tu amiga, que te quiere hoy, mañana y durante los próximos sesenta cumpleaños. 💗`,
    paragraphs: [
      'FELIZ CUMPLEAÑOS, MI AMOR. 🥹🎂💗',
      '¡¡¡27 AÑOS!!! Y encima los cumples en Australia, viviendo la aventura más grande de tu vida hasta ahora. QUÉ JEVY. ¿Quién nos iba a decir hace un tiempo que estarías celebrando tus 27 al otro lado del mundo? Espero que hoy te pares un momento a pensar en todo lo que has vivido y en lo increíble que es poder decir que te has atrevido a hacer algo así.',
      'Ojalá hoy estés rodeada de muchísima gente que te quiera, que te haga reír, que te cuide y que te recuerde lo especial que eres. Espero que tengas un día precioso, que te mimen muchísimo Y que comas algo rico¡Te lo mereces todoooo! ❤️',
      'Y si en algún momento del día echas de menos España, tu familia, tus amigos o las celebraciones de siempre, acuérdate de que aquí estamos todos pensando en ti. Desde Barcelona te mandamos un abrazo enorme y estamos celebrando tu cumpleaños contigo, aunque sea a distancia. Yo no paro de pensar en ti y me estoy muriendo de ganas de poder darte un abrazo (y de celebrar tu cumple partiendo la pista).',
      'Eso sí, quiero dejar una cosa muy clara: te perdono que este cumpleaños lo pases en Australia, pero los siguientes SESENTA cumpleaños me pertenecen. No te perdono ni uno más💋',
      'Espero que este nuevo año de vida te traiga muchísimas cosas bonitas, que sigas creciendo, que te atrevas a hacer todo lo que te apetezca y que nunca olvides lo muchísimo que vales.',
      'Tu amiga, que te quiere hoy, mañana y durante los próximos sesenta cumpleaños. 💗',
    ],
    challengesTitle: 'Retos de noviembre 🎈',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Celebra tu cumpleaños haciendo algo especial. ¡Hoy la protagonista eres tú!',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: 'Escribe una carta de agradecimiento por todo lo que has vivido este año: las personas que has conocido, las oportunidades que has tenido y las cosas que has aprendido.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Organiza un plan con tus amigos australianos (propuesto por ti).',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Haz una foto pro para después enmarcar y recordar siempre ese año en australia.',
      },
    ],
  },
  {
    monthNumber: 12,
    monthName: 'Diciembre',
    monthEmoji: '🎄❤️',
    fullMonthTitle: 'Diciembre 🎄❤️',
    title: 'Gracias por vivir este regalo conmigo',
    unlockDateFormatted: '1 de diciembre de 2027',
    content: `Hola, mi bebita 🥹❤️

Y bueno… hasta aquí llega mi regalo. Espero de corazón que estas cartas te hayan acompañado durante todo este tiempo. Que hayas abierto alguna en un día en el que necesitabas un poquito de cariño, que te hayas reído y que hayas sentido que estaba un poquito más cerca de ti. Porque, aunque no haya podido estar físicamente a tu lado para vivir todo esto, quería encontrar una manera de acompañarte y de recordarte que aquí tienes a alguien que te quiere muchísimo.

Espero que hayas aprovechado esta app, que hayas escrito en tu journal, que hayas cumplido algunos de los retos y que hayas llenado la galería de fotos preciosas. Pero, sobre todo, espero que hayas vivido. Que hayas conocido a gente increíble, descubierto lugares nuevos, salido de tu zona de confort y aprendido cosas sobre ti que no habrías descubierto quedándote aquí.

No sé qué estarás haciendo cuando leas esto. A lo mejor ya estás preparando la vuelta a Barcelona y yo estoy contando los días para verte. O a lo mejor habéis decidido quedaros un año más en Australia. Egoístamente, espero que vuelvas prontito porque te echo muchísimo de menos, pero si decidís quedaros, será porque tenéis mil motivos para hacerlo. Y yo voy a seguir estando aquí, orgullosa de ti y deseando que me cuentes todo.

Guarda esta app en tu móvil. Vuelve a ella cuando quieras, mira las fotos, relee las cartas y acuérdate de todo lo que has vivido y de cuánto te quiero.

Gracias por ser mi amiga, por formar parte de mi vida y por dejarme acompañarte en este viaje.

Tu bebita, que se muere por volver a tenerte cerca. 💗`,
    paragraphs: [
      'Hola, mi bebita 🥹❤️',
      'Y bueno… hasta aquí llega mi regalo. Espero de corazón que estas cartas te hayan acompañado durante todo este tiempo. Que hayas abierto alguna en un día en el que necesitabas un poquito de cariño, que te hayas reído y que hayas sentido que estaba un poquito más cerca de ti. Porque, aunque no haya podido estar físicamente a tu lado para vivir todo esto, quería encontrar una manera de acompañarte y de recordarte que aquí tienes a alguien que te quiere muchísimo.',
      'Espero que hayas aprovechado esta app, que hayas escrito en tu journal, que hayas cumplido algunos de los retos y que hayas llenado la galería de fotos preciosas. Pero, sobre todo, espero que hayas vivido. Que hayas conocido a gente increíble, descubierto lugares nuevos, salido de tu zona de confort y aprendido cosas sobre ti que no habrías descubierto quedándote aquí.',
      'No sé qué estarás haciendo cuando leas esto. A lo mejor ya estás preparando la vuelta a Barcelona y yo estoy contando los días para verte. O a lo mejor habéis decidido quedaros un año más en Australia. Egoístamente, espero que vuelvas prontito porque te echo muchísimo de menos, pero si decidís quedaros, será porque tenéis mil motivos para hacerlo. Y yo voy a seguir estando aquí, orgullosa de ti y deseando que me cuentes todo.',
      'Guarda esta app en tu móvil. Vuelve a ella cuando quieras, mira las fotos, relee las cartas y acuérdate de todo lo que has vivido y de cuánto te quiero.',
      'Gracias por ser mi amiga, por formar parte de mi vida y por dejarme acompañarte en este viaje.',
      'Tu bebita, que se muere por volver a tenerte cerca. 💗',
    ],
    challengesTitle: 'Retos de diciembre 🎁',
    challenges: [
      {
        week: 1,
        weekLabel: 'Semana 1',
        description: 'Recorre todas las fotos de este año en Australia y revive tus recuerdos favoritos.',
      },
      {
        week: 2,
        weekLabel: 'Semana 2',
        description: ': Escribe tu última página del journal resumiendo el año. Cuenta cómo llegaste, qué has vivido, qué te ha sorprendido y cómo te sientes ahora.',
      },
      {
        week: 3,
        weekLabel: 'Semana 3',
        description: 'Haz una lista de 27 cosas que Australia te ha enseñado.',
      },
      {
        week: 4,
        weekLabel: 'Semana 4',
        description: 'Abre la primera página que escribiste en el journal y compara esa Georgina con la persona en la que te has convertido. Date cuenta de todo lo que has crecido y siéntete orgullosa de ti.',
      },
    ],
  },
]
