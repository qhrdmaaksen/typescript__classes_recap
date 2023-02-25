'use strict';

class Player {
	score = 0 ;
	numLife = 10;
  constructor(first, last) {
    console.log('in constructor');
		this.first = first;
		this.last = last;
  }
  firstMeet() {
    console.log('hello world!');
  }
	loseLife() {
		this.numLife -= 1;
	}
}

const player1 = new Player("kim","minwoo");
player1.firstMeet();
console.log(player1.first)
console.log(player1.last)
console.log(player1.numLife)
player1.loseLife()
console.log(player1.numLife)
console.log(Player)
const player2 = new Player("shin","hyunwoo");
player2.firstMeet();
console.log(player2.first)
console.log(player2.last)
console.log(player2);
