var chai = require('chai');
var assert = chai.assert;
var botMain = require('../botMainProgram');
describe('when valid input is given through a text file', function () {
  it('should return an object when valid set of arguments are given in the file fileCommands.txt', function () {
    // var fileContents = `10 20 
    // 2 2 N 
    // mmmlmmmmlmmmrmmmlmmmlmmm`;
    var expectedOutput = { startX: 3, startY: 6, dirBot: 'E' };
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return an object when valid set of arguments are given in the file fileCommands.txt and take care of the lower boundaries in the grid', function () {
    // var fileContents = `10 20 
    // 2 2 N 
    // mmmlmmm`;
    var expectedOutput = { startX: 0, startY: 0, dirBot: 'W' };
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return an object and continue processing even if lower boundary is touched by the bot', function () {
    // var fileContents = `10 20 
    // 2 2 N 
    // mmmlmmmlmmmlmm`;
    var expectedOutput = { startX: 2, startY: 3, dirBot: 'E' };
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return an object and continue processing even if upper boundary is touched by the bot', function () {
    // var fileContents = `10 20 
    // 18 18 S
    // mmmrmmmlmmmlmm`;
    var expectedOutput = { startX: 10, startY: 12, dirBot: 'W' };
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
});

describe('when invalid input is given through a text file', function () {
  it('should return error message when the grid x coordinate is not a munber', function () {
    // var fileContents = `a 20 
    // 18 18 S
    // mmmrmmmlmmmlmm`;
    var expectedOutput = 'Grid coordinate X of bot is not a number.';
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return error message when the grid y coordinate is not a munber', function () {
    // var fileContents = `20 b 
    // 18 18 S
    // mmmrmmmlmmmlmm`;
    var expectedOutput = 'Grid coordinate Y of bot is not a number.';
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return error message when the starting coordinate x is not a munber', function () {
    // var fileContents = `10 20 
    // a 18 S
    // mmmrmmmlmmmlmm`;
    var expectedOutput = 'Starting coordinate X of bot is not a number.';
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return error message when the starting coordinate y is not a munber', function () {
    // var fileContents = `a 20 
    // 18 b S
    // mmmrmmmlmmmlmm`;
    var expectedOutput = 'Starting coordinate Y of bot is not a number.';
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return error message when the grid coordinates are more than two', function () {
    // var fileContents = `10 20 30 
    // 18 18 S
    // mmmrmmmlmmmlmm`;
    var expectedOutput = 'The input is in invalid format. First line should only have two coordinates seperated by a space.';
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
  it('should return error message when the starting coordinates has more number of arguments', function () {
    // var fileContents = `a 20 
    // 18 18 S 25
    // mmmrmmmlmmmlmm`;
    var expectedOutput = 'The input is in invalid format. Second line should only have three inputs seperated by a space to display initial bot information.';
    var actualOutput = botMain();
    assert.deepEqual(actualOutput, expectedOutput);
  });
    it('should return error message when the instructions given in the command has anything other than l, m or r', function () {
      // var fileContents = `10 20 
      // 18 18 S 
      // mmmrmmmlmmmlmmaaaaaaa`;
      var expectedOutput = 'The instrcution contains some invalid inputs. Please make sure that input only contains the letters M, L or R.';
      var actualOutput = botMain();
      assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should return error message when starting x coordinate exceeds grid x coordinate', function () {
      // var fileContents = `19 20 
      // 45 18 S 
      // mmmrmmmlmmm`;
      var expectedOutput = 'The bot cannot start at this X co ordinate. This is greater than given grid size.';
      var actualOutput = botMain();
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });