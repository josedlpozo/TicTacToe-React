# TicTacToe-React

Pasos para uso:
	instalar:
		sudo apt-get install npm
		sudo npm install -g npm
		npm init --> Crea package.json
		sudo npm install-g browserify
		npm install --save-dev browserify@11.2.0 babelify@6.4.0 --> @X.X.X es para especificar versiones
		sudo npm install -g node-static
		sudo npm install --save react react-dom


	comando para lanzar:
		transpilar:	
			browserify -t babelify src/js/index.jsx>src/build/index.js
		lanzar servidor:
			static -p 3000

PROXIMAS VERSIONES
1. Añadir bootstrap
