# _Tic Tac Toe REACT_

Instalar:
  - sudo apt-get install npm
  - sudo npm install -g npm
  - npm init --> Crea package.json
  - sudo npm install-g browserify
  - npm install --save-dev browserify@11.2.0 babelify@6.4.0 --> @X.X.X es para especificar versiones
  - sudo npm install -g node-static
  -  sudo npm install --save react react-dom

### comando para lanzar:


```
// transpilar
browserify -t babelify src/js/index.jsx>src/build/index.js
```
```
//lanzar servidor
static -p 3000
```

PROXIMAS VERSIONES

_1. Añadir bootstrap_ --> HECHO

_2. Cambiar estilo_ --> HECHO

_3. Añadir que la dimension del tablero sea configurable._ --> HECHO

_4. Nueva arquitectura FLUX._ --> HECHO

_5. Añado número de movimientos._ --> HECHO

_6. Añado contador de victorias._ --> HECHO
