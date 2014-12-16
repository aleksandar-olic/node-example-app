(function() {
  var cube, square;

  square = function(x) {
    return x * x;
  };

  cube = function(x) {
    return square(x) * x;
  };

  alert("hi there");

}).call(this);

/*next file*/

console.log('\'Allo \'Allo!');

var player1 = {name: "Chris", score: 1000, rank: 1};
var player2 = {name: "Kristofer", score: 100000, rank: 2};

function playerDetails(){
console.log("The name of the player is "+ this.name + "."+ " His score is : "+ this.score + "and his rank : "+ this.rank);
}
player1.logDetails= playerDetails;
player2.logDetails= playerDetails;

player1.logDetails();
player2.logDetails();
