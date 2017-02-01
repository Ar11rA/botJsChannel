function setBotDirection(element, bot, gridSizeX, gridSizeY) {
  if (element === 'L' && bot.dirBot === 'N')
    bot.dirBot = 'W';
  else if (element === 'R' && bot.dirBot === 'N')
    bot.dirBot = 'E';
  else if (element === 'L' && bot.dirBot === 'S')
    bot.dirBot = 'E';
  else if (element === 'R' && bot.dirBot === 'S')
    bot.dirBot = 'W';
  else if (element === 'L' && bot.dirBot === 'W')
    bot.dirBot = 'S';
  else if (element === 'R' && bot.dirBot === 'W')
    bot.dirBot = 'N';
  else if (element === 'L' && bot.dirBot === 'E')
    bot.dirBot = 'N';
  else if (element === 'R' && bot.dirBot === 'E')
    bot.dirBot = 'S';
  return bot;
}
module.exports = setBotDirection;