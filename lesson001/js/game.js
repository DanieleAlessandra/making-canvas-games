(function () {
    "use strict";
    
    var App = {
        canvasElement: undefined,
        canvasContext: undefined
    };
    
    App.draw = function () {
        /// Qui si disegnano gli elementi
        document.write('Draw ');
    };
    
    App.enterFrame = function () {
        App.update();
        App.draw();
    };
    
    App.init = function () {
        App.canvasElement = document.getElementById("gameCanvas");
        App.canvasContext = App.canvasElement.getContext("2d");
        setInterval(App.enterFrame, 1000 / 60);
    };
    
    App.update = function () {
        /// Qui si aggiornano gli elementi
        document.write('Update ');
    };
    
    document.addEventListener('DOMContentLoaded', App.init);
    
}());