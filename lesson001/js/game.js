(function () {
    "use strict";
    
    var App = {
        canvasElement: undefined,
        canvasContext: undefined,
        angles: {
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    };
    
    App.draw = function () {
        App.canvasContext.clearRect(0, 0, App.canvasElement.width, App.canvasElement.height);
        
        App.canvasContext.beginPath();
        App.canvasContext.lineWidth = 20;
        App.canvasContext.strokeStyle = '#006699';
        App.canvasContext.arc(275, 200, 150, 0, App.angles.seconds);
        App.canvasContext.stroke();
        
        App.canvasContext.beginPath();
        App.canvasContext.lineWidth = 20;
        App.canvasContext.strokeStyle = '#669900';
        App.canvasContext.arc(275, 200, 125, 0, App.angles.minutes);
        App.canvasContext.stroke();
        
        App.canvasContext.beginPath();
        App.canvasContext.lineWidth = 20;
        App.canvasContext.strokeStyle = '#990066';
        App.canvasContext.arc(275, 200, 100, 0, App.angles.hours);
        App.canvasContext.stroke();
        
        App.canvasContext.beginPath();
        App.canvasContext.lineWidth = 20;
        App.canvasContext.strokeStyle = '#009966';
        App.canvasContext.arc(275, 200, 75, 0, App.angles.days);
        App.canvasContext.stroke();
        
        App.canvasContext.beginPath();
        App.canvasContext.lineWidth = 20;
        App.canvasContext.strokeStyle = '#996600';
        App.canvasContext.arc(275, 200, 50, 0, App.angles.months);
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
            currentTime = currentDate.getTime(),
            currentSeconds = (currentTime / 1000) % 60,
            currentMinutes = (currentTime / (1000 * 60)) % 60,
            currentHours = (currentTime / (1000 * 60 * 60)) % 24,
            currentDay = currentDate.getDate() + (currentHours / 24) + (currentMinutes / (24 * 60)) + (currentSeconds / (24 * 60 * 60)),
            currentMonth = currentDate.getMonth(),
            currentMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][currentMonth];
        
        currentMonth = currentMonth + 1 + (currentDay / currentMonthDays);
        
        App.angles.seconds = 2 * Math.PI / 60 * currentSeconds;
        App.angles.minutes = 2 * Math.PI / 60 * currentMinutes;
        App.angles.hours = 2 * Math.PI / 24 * currentHours;
        App.angles.days = 2 * Math.PI / currentMonthDays * currentDay;
        App.angles.months = 2 * Math.PI / 12 * currentMonth;
    };
    
    document.addEventListener('DOMContentLoaded', App.init);
    
}());