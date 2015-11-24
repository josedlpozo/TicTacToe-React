var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher');
var Constants = require('../constants/TresEnRayaConstants');
    module.exports = {
      jugarPosicion: function(x,y) {
        TresEnRayaDispatcher.dispatch({
          type : Constants.ActionTypes.JUGAR_POSICION,
          x :x,
          y:y
        });
      },

     reiniciarJuego: function(){
       TresEnRayaDispatcher.dispatch({
         type: Constants.ActionTypes.REINICIAR_JUEGO
       });
     },

     nuevoTamaño: function(rows){
       TresEnRayaDispatcher.dispatch({
         type: Constants.ActionTypes.NUEVO_TAMAÑO,
         rows : rows
       });
     }
   };
