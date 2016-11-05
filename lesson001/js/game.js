(function () {
    "use strict";
    
    var App = {
        canvasElement: undefined,
        canvasContext: undefined
    };
    
    App.enterFrame = function () {
        document.write('. ');
    };
    
    App.init = function () {
        App.canvasElement = document.getElementById("gameCanvas");
        App.canvasContext = App.canvasElement.getContext("2d");
        setInterval(App.enterFrame, 1000 / 60);
    };
    
    document.addEventListener('DOMContentLoaded', App.init);
    
}());