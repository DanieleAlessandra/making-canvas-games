(function () {
    "use strict";
    
    var App = {
        canvasElement: undefined,
        canvasContext: undefined,
        arcAngle: 0
    };
    
    App.draw = function () {
        App.canvasContext.clearRect(0, 0, App.canvasElement.width, App.canvasElement.height);
        App.canvasContext.beginPath();
        App.canvasContext.lineWidth = 20;
        App.canvasContext.strokeStyle = '#006699';
        App.canvasContext.arc(275, 200, 150, 0, App.arcAngle);
        App.canvasContext.stroke();
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
        var currentDate = new Date(),
            currentSeconds = currentDate.getSeconds();
        
        App.arcAngle = 2 * Math.PI / 60 * currentSeconds;
    };
    
    document.addEventListener('DOMContentLoaded', App.init);
    
}());