# lifegame2

Ejemplo de juego de la vida de John Horton Conway.

Simple realizado en javascript, ejecutar Index.html.

#Descripcion

Este código es una implementación del juego de la vida de Conway en JavaScript. El juego de la vida es un juego de simulación celular que se rige por un conjunto de reglas simples.

El código comienza creando un arreglo llamado "colors" que contiene los colores 'red', 'green', 'blue', 'purple', 'orange'. Luego se define una función llamada "start" que se ejecuta cuando se carga la página.

La función start crea una matriz 2D llamada "grid", que representa el estado de cada célula en la parrilla. Luego utiliza la función "initializeRandomGrid" para inicializar el grid con una probabilidad específica de que una célula sea viva (1) o muerta (0).

La función start también obtiene una referencia al canvas "game-of-life" y su contexto de dibujo.

Luego define la función "countAliveNeighbors" que cuenta el número de vecinos vivos de una célula en particular. También define la función "updateGrid" que actualiza el estado de cada célula en el grid en función de las reglas del juego de la vida.

La función "updateGrid" utiliza un bucle para recorrer cada célula en el grid, y utiliza la función "countAliveNeighbors" para determinar si una célula viva debe continuar viva o morir, y si una célula muerta debe nacer.

La función "updateGrid" también utiliza un bucle para recorrer cada célula en el grid y dibujar la célula en el canvas "game-of-life" con un color aleatorio del arreglo "colors" si la célula esta viva o con un color "white" si la célula esta muerta.

Por último, la función start utiliza la función "setInterval" para actualizar el grid cada 100 milisegundos.
