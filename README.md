# Pruebas Automatizadas (Playwright + JS)

_Este repositorio incluye los siguientes items._

-   Reportes en XML al ejecutar en modo headless
-   Carpeta y path correspondiente para POM (pages)
-   Configuración necesaria para generar reportes de pruebas
-   Configuración de VScode

## Comenzando 🚀

Clonar repositorio:

```markdown
git clone https://github.com/LauraMont/LR-Playwright.git
```

### Pre-requisitos 📋

Debe contar con los siguientes recursos:

-   NODE JS
-   npm
-   IDE: Visual Studio Code (Recomendado)

### Instalación 🔧

Pasos para iniciar el proyecto:

**Instala todas las dependencias**

```
npm ci
```

**Ejecutar Playwright con modo UI**

```
npm test
```

**Ejecutar todos los tests (Headless en Chromium)**

```
npm run regression
```

**Ejecutar un test (Headless en Chromium)**

```

npm run file tests/rutaFile/exampleAdvanceTest.spec.ts

```

## Inicia el proyecto por primera vez

1. Ejecuta por primera vez la interfaz de Playwright:
    ```
    npm test
    ```
2. Selecciona play en la prueba que quieras ejecutar

## Flujo de trabajo

1. Cambiamos a la rama principal QA
    ```
    git switch QA
    ```
2. Traemos cambios que se pudieron fusionar durante nuestra ejecucion
    ```
    git pull
    ```
3. Creamos nueva rama para la deuda tecnica, con esta nomenclatura: TD-XXXX-titulo
    ```markdown
    git checkout -b TD-XXX-titulo
    ```
4. Creamos documentación en **carpeta test-plan/in-sprint/sprintX** (X: sprint donde esta la TD)

5. Agregamos cambios (esto solo agrega los cambios dentro de la carpeta test-plan)
    ```markdown
    git add test-plan
    ```
6. Damos titulo a los cambios para su identificación (utilizar de preferencia los
   [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/))
    ```markdown
    git commit -m “<tipoCambio>(scope): descripcion de cambios”
    ```
7. Enviamos cambio a rama remota
    ```markdown
    git push --set-upstream origin <branch-name>
    ```
8. Creamos nuestro archivo de pruebas en **tests/Features/<componente>** : Ej: tests/Features/Account

9. Diseñamos casos de prueba

    - Revisar si hay POM (**tests/pages**) de alguna pantalla o componente que utilices
    - Puedes editarlo sin modificar lo actual o crear el tuyo en esa ubicacion

10. Al terminar hacemos los pasos 5 y 6. Ademas de correr las pruebas en modo headless generando un reporte. Saca una foto a la consola con los
    resultados
    ```markdown
    npm run file <rutaArchivo>
    ```
11. . Luego Enviamos los cambios pero esta vez al tener ya enlazadas las ramas local y remota podemos hacer
    ```
    git push
    ```
12. Creamos pull request haciendo click en el botón Create Pull Request
    - Resumen de cambios
    - Resultado de Pruebas
    - Observaciones

## Estructura de archivos

```
proyecto-playwright/
│
├── .vscode/                   (Configuraciones de VSCode)
│   ├── material icons
│   │   └── ...
│   └── extensions.json
│   └── settings.json
│
├── tests/               (Pruebas de Playwright)
│   ├── Features/
│   │   ├── ...
│   ├── pages/           (archivos pom)
│   │   ├── ...
│   ├── utils/           (algoritmos para todo el proyecto)
│   │   ├── ...
│
├── .gitignore
├── package.json               (Información y dependencias del proyecto)
├── package-lock.json
├── README.md                  (Documentación de tu proyecto)
├── playwright.config.js       (Configuración de Playwright)

```
