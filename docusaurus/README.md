# Sitio de Documentación (Docusaurus)

Este sitio está construido con [Docusaurus](https://docusaurus.io/), un generador de sitios estáticos moderno.

## Pasos para trabajar con la documentación

1) Instalar dependencias (solo dentro de la carpeta `docusaurus/`):

```bash
npm install
```

2) Ejecutar en desarrollo:

```bash
npm run start
```

Esto levanta el servidor de docs y abre el navegador. Los cambios se reflejan automáticamente.

3) Construir para producción:

```bash
npm run build
```

Esto genera el sitio estático en la carpeta `docusaurus/build`. Puedes publicarlo en cualquier hosting de contenido estático.

4) Desplegar en GitHub Pages (opcional):

```bash
# Usando SSH
USE_SSH=true npm run deploy

# Sin SSH
GIT_USER=<Tu usuario de GitHub> npm run deploy
```

El comando `deploy` construye el sitio y empuja el resultado a la rama `gh-pages`.

## ¿Dónde colocar los documentos?

- Las páginas de documentación viven en `docusaurus/docs/`.
- Tu documento de overview del proyecto fue movido a `docusaurus/docs/project-overview.md`.
- La sidebar está autogenerada a partir de la estructura de esa carpeta (ver `docusaurus/sidebars.ts`).

## Configuración del sitio

- Revisa `docusaurus/docusaurus.config.ts` y ajusta:
  - `url`: URL del sitio en producción (por ejemplo, `https://<tu_usuario>.github.io`). Para desarrollo local se usa `http://localhost`.
  - `baseUrl`: Subruta del sitio. En GitHub Pages para un repo suele ser `/<repo>/`. Para dominio propio, normalmente `/`.
  - `organizationName` y `projectName`: Para despliegue en GH Pages.

## Tips

- Si quieres generar documentación de API a partir del código TypeScript del proyecto, puedes usar `typedoc` y `typedoc-plugin-markdown` dentro de la carpeta `docusaurus/` para aislar dependencias.
- Ejemplo de script:

```bash
npm i -D typedoc typedoc-plugin-markdown
```

En `docusaurus/package.json` agrega:

```json
{
  "scripts": {
    "generate:api": "typedoc --plugin typedoc-plugin-markdown --out docs/api ../src/app"
  }
}
```

Y ejecuta:

```bash
npm run generate:api
```
