# TaskApp

## Aplicación de gestión de tareas académicas

TaskApp es una aplicación desarrollada con **Ionic y Angular** que permite organizar tareas académicas de forma sencilla. La aplicación permite crear tareas, agregar una descripción, seleccionar una prioridad, marcar tareas como completadas y eliminarlas.

También utiliza `localStorage` para guardar las tareas y recuperarlas después de recargar la aplicación.

## Tecnologías utilizadas

* Ionic
* Angular
* TypeScript
* HTML
* SCSS
* Reactive Forms
* LocalStorage

## Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

* Node.js
* npm
* Ionic CLI

## Instalación

Primero, clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/pamela21042009/TaskApp.git
cd TaskApp
```

Después, instala todas las dependencias necesarias:

```bash
npm install
```

## Ejecutar en modo desarrollo

Para iniciar la aplicación en modo desarrollo utiliza:

```bash
ionic serve
```

Después de ejecutar el comando, Ionic iniciará el servidor de desarrollo y podrás abrir la aplicación desde el navegador.

Normalmente estará disponible en:

```text
http://localhost:8100/
```

## Funcionalidades

* Crear nuevas tareas.
* Agregar título y descripción.
* Seleccionar prioridad: Alta, Media o Baja.
* Validar que el título tenga mínimo 5 caracteres.
* Marcar tareas como completadas.
* Mostrar las tareas completadas con el texto tachado.
* Eliminar tareas.
* Guardar las tareas utilizando `localStorage`.
* Recuperar las tareas después de recargar la aplicación.

## Estructura principal

```text
TaskApp/
├── src/
│   └── app/
│       ├── home/
│       ├── agregar-tarea/
│       ├── models/
│       └── services/
├── package.json
├── angular.json
├── ionic.config.json
└── README.md
```

## Comandos principales

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
ionic serve
```

Agregar cambios a Git:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "Descripción del cambio"
```

Subir cambios a GitHub:

```bash
git push
```

## Repositorio

El código fuente del proyecto se encuentra en GitHub:

https://github.com/pamela21042009/TaskApp

## Autora

**Ashley Pamela Reding Hernandez**
