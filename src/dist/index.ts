class Player {
	// 아래 first & last 는 typescript 에게 type 을 알려주는 것임(타입 추론)
	first: string;
	last: string;
	score: number = 0;
	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}
}

const vitamin = new Player('vita', 'min');
vitamin.score = 33;
console.log(vitamin);