window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420., 270);
  
  ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
  ctx.fillRect(100, 10, 420, 270);
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!\nСписок результатов: ', 120, 45);
  
  var max = -1;
  var maxIndex = -1;
  
  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
};