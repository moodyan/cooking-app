var gallons = parseInt(prompt("How many gallons?"));


var liters = function(gallons) {
	return (gallons * 3.78541);
};

alert((gallons * 3.78541) + " liters");

var teaspoons = parseInt(prompt("How many teaspoons"));

var tablespoons = function(teaspoons) {
  return (teaspoons / 3);
};
alert((teaspoons / 3) + " tablespoons");
