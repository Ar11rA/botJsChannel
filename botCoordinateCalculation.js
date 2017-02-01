function movementCoordinates(element, bot, gridsizeX, gridsizeY) {
  if (bot.startY >= 0 && bot.startY < gridsizeY) {
    if (element === 'M' && bot.dirBot === 'N') {
      bot.startY--;
      if (bot.startY === -1) {
        bot.startY = 0;
      }
    }
    else if (element === 'M' && bot.dirBot === 'S')
      bot.startY++;
  }
  if (bot.startX >= 0 && bot.startX < gridsizeX) {
    if (element === 'M' && bot.dirBot === 'W') {
      bot.startX--;
      if (bot.startX === -1) {
        bot.startX = 0;
      }
    }
    else if (element === 'M' && bot.dirBot === 'E')
      bot.startX++;
  }
  return bot;
}
module.exports = movementCoordinates;