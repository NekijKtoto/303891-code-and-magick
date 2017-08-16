'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;
  var barHeigth = 40;
  var indent = 90;
  var initialX = 125;
  var initialY = 250;
  var randomBlue = function () {
    return 'rgba(0, 0, 255, ' + Math.random().toString() + ')';
  };
  var drawRect = function (x, y, width, height, color) {
    ctx.fillStyle = color || '#ffffff';
    ctx.fillRect(x, y, width, height);
  };
  var drawText = function (text, x, y, color, font) {
    ctx.fillStyle = color || '#000000';
    ctx.textBaseline = 'hanging';
    ctx.font = font || '16 px PT Mono';
    ctx.fillText(text, x, y);
  };
  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 420, 270);
  drawText('Ура, вы победили!', 120, 45);
  drawText('Список результатов: ', 120, 65);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var step = histogramHeight / max;

  for (var t = 0; t < times.length; t++) {

    drawText(names[t], initialX + indent * t, initialY + 10);
    drawText(Math.floor(times[t]), initialX + indent * t, initialY - (times[t] * step) - 20);

    drawRect(initialX + indent * t, initialY, barHeigth, times[t] * step * (-1), (names[t] === 'Вы') ? '#FF0000' : randomBlue());
  }
};
