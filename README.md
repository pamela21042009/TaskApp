# TaskApp

## Descripción

TaskApp es una aplicación desarrollada con Ionic y Angular para organizar y administrar tareas académicas. Permite crear tareas, asignarles una prioridad, marcarlas como completadas y eliminarlas.

Las tareas se guardan en el almacenamiento local del navegador mediante `localStorage`, por lo que permanecen guardadas aunque se recargue la aplicación.

## Tecnologías utilizadas

* Ionic
* Angular
* TypeScript
* HTML
* SCSS
* Reactive Forms
* LocalStorage

## Requisitos

Para ejecutar el proyecto se necesita tener instalado:

* Node.js
* npm
* Ionic CLI

## Instalación

Primero, descargar o clonar el repositorio y entrar a la carpeta del proyecto.

Luego instalar las dependencias con:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar la aplicación en modo desarrollo:

```bash
ionic serve
```

Después de ejecutar el comando, la aplicación se abrirá en el navegador.

## Funciones principales

* Crear nuevas tareas.
* Agregar título y descripción.
* Seleccionar prioridad: Alta, Media o Baja.
* Marcar tareas como completadas.
* Mostrar las tareas completadas con texto tachado.
* Eliminar tareas.
* Guardar las tareas en `localStorage`.
* Recuperar las tareas después de recargar la aplicación.

## Estructura principal

```text
src/
├── app/
│   ├── home/
│   ├── agregar-tarea/
│   ├── models/
│   └── services/
└── main.ts
```

## Validación

El título de cada tarea es obligatorio y debe tener como mínimo 5 caracteres.

## Autora

Ashley Pamela Reding Hernandez
