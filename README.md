# Georgina 26

Aplicación web personal y mobile-first para acompañar a Georgina durante su año en Australia.

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Desarrollo local

```sh
npm install
npm run dev
```

## Comprobaciones

```sh
npm run typecheck
npm run build
npm run lint
```

## Estructura

- `src/app`: composición de la aplicación y configuración de navegación.
- `src/components`: componentes compartidos de interfaz y layout.
- `src/features`: áreas funcionales de la aplicación.
- `src/content`: contenido editorial escrito para la experiencia.
- `src/lib`: utilidades y adaptadores.
- `src/styles`: estilos y tokens globales.
- `src/types`: tipos compartidos.
- `public`: recursos estáticos y configuración de la PWA.

Las carpetas de funcionalidades se irán completando por fases. Supabase y los datos personales todavía no están configurados.
