class Player {
  // 아래 first & last 는 typescript 에게 type 을 알려주는 것임(타입 추론)
  // public 명시해주면 클래스 외부에서 프로퍼티 변경,접근,쓰기 할수있다고 알리는것
  /* 단축 구문으로 생성자 함수에 인자로 설정하기에 주석처리.
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;*/
  constructor(public first: string, public last: string, protected _score: number) {
    /* 단축 구문으로 생성자 함수에 인자로 설정하기에 초기화 필요없어져서 주석처리함.
    this.first = first;
    this.last = last;*/
  }
	// private 라고 명시해주면 해당 메서드나 프로퍼티가 정의된 함수 내부에서만 접근 가능하다고 알리는것
  private secretMethode(): void {
		console.log('secretMethod 호출');
	}

	get fullName(): string {
		return `${this.first} ${this.last}`;
	}
	get score(): number {
		return this._score;
	}
	set score(newScore: number){
		if (newScore < 0) {
			throw new Error('점수는 0 이상이어야 합니다.');
		}
		this._score = newScore;
	}
}

class SuperPlayer extends Player {
	public isAdmin: boolean = true;
	maxScore() {
		this._score = 999;
	}
}



const vitamin = new Player('vita', 'min', 33);
vitamin.fullName;
vitamin.score;
vitamin.score = 36;

const superMan = new SuperPlayer("vi","ta", 13)
console.log(superMan)
console.log(superMan.maxScore())
console.log(superMan)
// private score 는 클래스 외부에서 접근 불가하기에 아래 code 에서 에러 발생
//vitamin.score = 33;
// 아래 code 에서 vitamin.first = 'vitamin' // readonly 이기 때문에 에러 발생
//vitamin.first = 'vitamin'
// 아래 code 에서 vitamin.secretMethode() // private method 이기 때문에 에러 발생
//vitamin.secretMethode()
console.log(vitamin);

/*======================interface=============================*/
interface Colorful {
	color: string;
}
interface Printable {
	print(): void;
}

class Bike implements Colorful {
	constructor(public color: string) {

	}
}

const redBike = new Bike('red');
console.log(redBike.color);

class Jacket implements Colorful, Printable {
	constructor(public color: string, public brand: string) {

	}
	print() {
		console.log(`brand: ${this.brand}, color: ${this.color}`);
	}
}

const redJacket = new Jacket ('red', 'nike')
console.log(redJacket.print())
