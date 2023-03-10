'use strict';

class Player {
	static description = "this is player class";
	#score = 0;
	numLife = 10;
	constructor(first, last) {
		console.log('in constructor');
		this.first = first;
		this.last = last;
		this.#secret();
	}
	get fullName() {
		return `${this.first} ${this.last}`;
	}
	// fullName 에 공백 제거 후 first, last 에 할당
	set fullName(newName) {
		const [first, last] = newName.split(' ');
		this.first = first;
		this.last = last;
	}
	get score() {
		return this.#score;
	}
	// newScore 에 음수 입력시 에러 발생토록함
	set score(newScore) {
		if (newScore < 0) {
			throw new Error('this is not positive number');
		}
		this.#score = newScore;
	}
	getScore() {
		return this.#score;
	}
	setScore(newScore) {
		return (this.#score = newScore);
	}
	firstMeet() {
		console.log('hello world!');
	}
	loseLife() {
		this.numLife -= 1;
	}
	#secret() {
		console.log('secret');
	}
}

class AdminPlayer extends Player {
	constructor(first, last, power) {
		super(first, last);
		this.power = power;
	}
	isAdmin = true;
}
const admin = new AdminPlayer("vita", "min",["delete", "restore"])

const player1 = new Player('kim', 'minwoo');
player1.firstMeet();
console.log(player1.first);
console.log(player1.last);
console.log(player1.numLife);
player1.loseLife();
console.log(player1.numLife);
console.log(player1.getScore());
console.log(player1.setScore(28));
console.log(player1.fullName);
console.log(player1.score);
player1.score = 20;
console.log(player1.score);
player1.fullName = 'kim woobin';
console.log(player1.fullName)
console.log(player1.first)
console.log(player1.last)
console.log(Player.description)
console.log(Player);
const player2 = new Player('shin', 'hyunwoo');
player2.firstMeet();
console.log(player2.first);
console.log(player2.last);
console.log(player2);
