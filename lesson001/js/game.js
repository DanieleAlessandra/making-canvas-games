(function () {
    "use strict";
    
    var App = {
        canvasElement: undefined,
        canvasContext: undefined
    };
    
    App.init = function () {
        App.canvasElement = document.getElementById("gameCanvas");
        App.canvasContext = App.canvasElement.getContext("2d");
    };
    
    document.addEventListener('DOMContentLoaded', App.init);
    
}());