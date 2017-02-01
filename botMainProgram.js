var calculateCoordinates = require('./botCoordinateCalculation');
var setBotDirection = require('./setBotDirection');
var fs = require('fs');
var path = require('path');
function botMain() {
  var filePath = '/Users/aritraaritra/Documents/botJsChannel/fileCommands.txt';

  var inputLine1;
  var inputLine2;
  var inputLine3;
  var arrayOfInputs = [];

  if (fs.existsSync(filePath)) {
    if (path.extname(filePath) === '.txt') {
      var bufferObject = fs.readFileSync(filePath);
      var fileContents = bufferObject.toString();
      arrayOfInputs = fileContents.split('\n');
    }
    else {
      return ('The file is not a text file. Please check again.');
    }
  }

  else {
    return ('The file does not exist in the following path');
  }

  var gridSizeX;
  var gridSizeY;
  inputLine1 = arrayOfInputs[0];
  inputLine2 = arrayOfInputs[1];
  inputLine3 = arrayOfInputs[2];
  var isValid = true;
  var gridCoord = inputLine1.split(' ');
  if (gridCoord.length == 2) {
    gridSizeX = Number(gridCoord[0]);
    gridSizeY = Number(gridCoord[1]);
    if (isNaN(Number(gridSizeX)) || isNaN(parseInt(gridSizeX))) {
      isValid = false;
      return ('Grid coordinate X of bot is not a number.');

    }
    if (isNaN(Number(gridSizeY)) || isNaN(parseInt(gridSizeY))) {
      isValid = false;
      return ('Grid coordinate Y of bot is not a number.');
    }
  }
  else {
    isValid = false;
    return ('The input is in invalid format. First line should only have two coordinates seperated by a space.');
  }

  var botInfo = inputLine2.split(' ');
  var startX;
  var startY;
  var dirBot;
  if (botInfo.length == 3) {
    startX = Number(botInfo[0]);
    startY = Number(botInfo[1]);
    if (isNaN(Number(botInfo[0])) || isNaN(parseInt(botInfo[0]))) {
      isValid = false;
      return ('Starting coordinate X of bot is not a number.');
    }

    if (isNaN(Number(botInfo[1])) || isNaN(parseInt(botInfo[1]))) {
      isValid = false;
      return ('Starting coordinate Y of bot is not a number.');
    }

    if (startX < 0 || startX > gridSizeX) {
      isValid = false;
      return ('The bot cannot start at this X co ordinate. This is greater than given grid size.');
    }
    if (startY < 0 || startY > gridSizeY) {
      isValid = false;
      return ('The bot cannot start at this Y co ordinate. This is greater than given grid size.');

    }
    dirBot = botInfo[2];
  }
  else {
    isValid = false;
    return ('The input is in invalid format. Second line should only have three inputs seperated by a space to display initial bot information.');

  }
  inputLine3 = inputLine3.toUpperCase();
  var inst = inputLine3.split('');
  isValid = inst.every(function isValidCommand(element) {
    if (element == 'M' || element == 'L' || element == 'R') {
      return true;
    }
    else
      return false;
  });
  if (isValid) {
    bot = { startX, startY, dirBot };
    bot1 = {};
    bot2 = {};
    inst.forEach(function (element) {
      bot1 = calculateCoordinates(element, bot, gridSizeX, gridSizeY);
      bot2 = setBotDirection(element, bot1);
    });
    return (bot2);
  }
  else {
    return ('The instrcution contains some invalid inputs. Please make sure that input only contains the letters M, L or R.');
  }
}
module.exports = botMain;
var x = botMain();
console.log(x);