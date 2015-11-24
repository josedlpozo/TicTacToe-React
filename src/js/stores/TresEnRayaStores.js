const EventEmitter = require('events').EventEmitter;
var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher')
var Constants = require('../constants/TresEnRayaConstants');

var turno = Constants.JUGADORX;
var rows = 3;
var ganador = false;
var empate = false;
var movimientos = 0;
var ganadasX = 0;
var ganadas0 = 0;
var valoresTablero = getValoresTablero();

function getValoresTablero(){
  var x = new Array(rows);
  for (var i = 0; i < rows; i++) {
    x[i] = new Array(rows);
  }
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < rows; j++) {
      x[i][j] = '-';
    }
  }
  return x;
}

function comprobarGanador(vals, newVal){

  // Compruebo filas
  var nRow, nCol;
  nRow = 0;
  nCol = 0;
  var num = 0;
  while(nRow<rows){
    while(nCol<rows){
      if(vals[nRow][nCol] === newVal){
        num++;
      }else{
        num = 0;
      }
      nCol++;
    }
    if(num === rows) return true;
    nRow++;
    num = 0;
    nCol = 0;
  }

  //Compruebo columnas
  nRow = 0;
  nCol = 0;
  var num = 0;
  while(nCol<rows){
    while(nRow<rows){
      if(vals[nRow][nCol] === newVal){
        num++;
      }else{
        num = 0;
      }
      nRow++;
    }
    if(num === rows) return true;
    nCol++;
    num = 0;
    nRow = 0;
  }
  nRow = 0;
  num = 0;
  // Compruebo diagonal principal
  while(nRow<rows){
    if(vals[nRow][nRow] === newVal){
      num++;
    }else{
      num = 0;
    }
    nRow++;
  }
  if(num === rows) return true;

  nCol = rows-1;
  nRow = 0;
  num = 0;
  // Compruebo antidiagonal
  while(nCol>= 0 && nRow<rows){
    if(vals[nRow][nCol] === newVal){
      num++;
    }else{
      num = 0;
    }
    nRow++;
    nCol--;
  }
  if(num === rows) return true;

  return false;
}

function comprobarEmpate(vals){
  var empate2 = 0;
  var nRow, nCol;
  for (nRow = 0; nRow < rows; nRow++) {
      for (nCol = 0; nCol < rows; nCol++) {
        if (vals[nRow][nCol] !== '-') {
            empate2++;
        }
    }
  }
  let cuadros = rows*rows;
  if(empate2 === cuadros) return true;
  else return false;
}

var TresEnRayaStore = Object.assign({}, EventEmitter.prototype, {
    getTurno: function() {
      return turno;
    },
    getValores: function() {
      return valoresTablero;
    },
    getGanador: function(){
      return ganador;
    },
    getRows: function(){
      return rows;
    },
    getMovimientos: function(){
      return movimientos;
    },
    getGanadasX: function(){
      return ganadasX;
    },
    getGanadas0: function(){
      return ganadas0;
    },
    getEmpate: function(){
      return empate;
    },
    addChangeListener(callback) {
      this.on(Constants.CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
      this.removeListener(Constants.CHANGE_EVENT, callback);
    },
    emitChange() {
      this.emit(Constants.CHANGE_EVENT);
    }
  });

TresEnRayaDispatcher.register(function(payload) {
  switch(payload.type) {
    case Constants.ActionTypes.JUGAR_POSICION:
      let nuevoValor = turno === Constants.JUGADORX ? 'X':'0';
      valoresTablero[payload.x][payload.y] = nuevoValor;
      ganador = comprobarGanador(valoresTablero,nuevoValor);
      empate = comprobarEmpate(valoresTablero);
      if (ganador !== true && empate !== true)
      turno = turno === Constants.JUGADORX ? Constants.JUGADOR0 : Constants.JUGADORX;
      else{
        if(empate !== true){
          if(turno === Constants.JUGADORX) ganadasX++;
          else ganadas0++;
        }
      }
      movimientos++;
      TresEnRayaStore.emitChange();
    break;
    case Constants.ActionTypes.REINICIAR_JUEGO:
      turno = Constants.JUGADORX;
      ganador = false;
      empate = false;
      valoresTablero = getValoresTablero();
      movimientos = 0;
      //ganadasX = 0;
      //ganadas0 = 0;
      TresEnRayaStore.emitChange();
    break;
    case Constants.ActionTypes.REINICIAR_MARCADORES:
      ganadasX = 0;
      ganadas0 = 0;
      TresEnRayaStore.emitChange();
    break;
    case Constants.ActionTypes.NUEVO_TAMAÑO:
      let y = parseInt(payload.rows,10);
      if(typeof y === 'number'){
        if(y>2 && y<8){
          rows = y;
        }else if(y<=2){
          rows = 3;
        }else if(y>=8){
          rows = 3;
        }else{
          rows = 3;
        }
      }
      turno = Constants.JUGADORX;
      ganador = false;
      empate = false;
      valoresTablero = getValoresTablero();
      movimientos = 0;
      TresEnRayaStore.emitChange();
    break;

  }
});

module.exports = TresEnRayaStore;
