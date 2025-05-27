# docusaurus-swagger-openapi-docs

# Template

This template is built for [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Usage

```bash
npx create-docusaurus@2.4.3 my-website --package-manager yarn
```

> When prompted to select a template choose `Git repository`.

Template Repository URL:

```bash
https://github.com/SamadbekDev/docusaurus-swagger-openapi-docs.git
```

> When asked how the template repo should be cloned choose "copy" (unless you know better).

```bash
yarn install
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

Generate API Documentation from OpenAPI

```bash
npx docusaurus gen-api-docs <name>
````

Replace <name> with the folder name where you want the generated API docs to be stored, e.g. trastpay.

This command uses the @docusaurus/plugin-openapi-docs plugin to automatically generate MDX-based documentation pages and sidebar configuration from an OpenAPI (Swagger) specification file (e.g. trastpay.yaml).
The generated files are placed in docs/<name>/.

Make sure your OpenAPI YAML file is placed in the project root and the docusaurus.config.js is configured to recognize it.
