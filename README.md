# Frontinv

## Tecnologias

El proyecto se construyo utilizando las librerías y recomendaciones de Evan Yu y el equipo oficial de Vue
por lo que se utilizo

-   Vite
-   Vue router
-   Pinia (Manejador de estado en sustitución de Vuex)

## Design System y librería de componentes

Teniendo en cuaneta el soporte a vue 3 y tomando en cuenta un desarrollo rápido, pero sin dejar de lado la estetica, se está utiliando AntDesign, como librería de componente y Design System

## Estructura de carpeta

Teniendo en cuenta la diversidad del equipo, el proyecto esta dividido en modulos, solo debe agregar la ruta y el arreglo de rutas al modulo en el router principal

Y cada pagina o vista agregarla desde el router del modulo.
Para crear un modulo rápidamente, solo copie y pegue el module-example, que tiene una pequeña implementacion de Pinia junto con componetes sencillos.

Si consideras que un componente, será utilizado por diferentes modulos, se pueden colocar, en la carpeta shared.

## Entorno de desarrollo

Recomendamos tener instalado node 14 o superior
y utilizar yarn como gestor de dependencias
# vue-ant-design-template
