'use strict'

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420., 270);
  
  ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
  ctx.fillRect(100, 10, 420, 270);
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили! ', 120, 45);
  ctx.fillText('Список результатов: ', 120, 65);
  
  var max = -1;
  
  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;
 /* var histogramX = 130;
  var histogramY = 80;
  var histogramWidth = 40;
  var histogramSpace = 90;*/

var barHeigth = 40;  
var indent = 90;  
var initialX = 125; 
var initialY = 250; 
  
ctx.textBaseline = 'hanging';

for(var t = 0; t < times.length; t++) {
  ctx.fillStyle = '#000'; 
  ctx.fillText(names[t], initialX + indent * t, initialY + 10);
  ctx.fillText(Math.floor(times[t]), initialX + indent * t, initialY - (times[t] * step) - 20);
  if (names[t] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + indent * t, initialY, barHeigth, times[t] * step * (-1));
  } else {
    ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() + 0.4) / 2 + ')';
    ctx.fillRect(initialX + indent * t, initialY, barHeigth, times[t] * step * (-1));
  }
}  
};