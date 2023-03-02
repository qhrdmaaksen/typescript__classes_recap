class Player {
  // 아래 first & last 는 typescript 에게 type 을 알려주는 것임(타입 추론)
  // public 명시해주면 클래스 외부에서 프로퍼티 변경,접근,쓰기 할수있다고 알리는것
  /* 단축 구문으로 생성자 함수에 인자로 설정하기에 주석처리.
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;*/
  constructor(
    public first: string,
    public last: string,
    protected _score: number,
  ) {
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
  set score(newScore: number) {
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

const superMan = new SuperPlayer('vi', 'ta', 13);
console.log(superMan);
console.log(superMan.maxScore());
console.log(superMan);
// private score 는 클래스 외부에서 접근 불가하기에 아래 code 에서 에러 발생
//vitamin.score = 33;
// 아래 code 에서 vitamin.first = 'vitamin' // readonly 이기 때문에 에러 발생
//vitamin.first = 'vitamin'
// 아래 code 에서 vitamin.secretMethode() // private method 이기 때문에 에러 발생
//vitamin.secretMethode()
console.log(vitamin);

console.log('======================interface=============================');

interface Colorful {
  color: string;
}
interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

const redBike = new Bike('red');
console.log(redBike.color);

class Jacket implements Colorful, Printable {
  constructor(public color: string, public brand: string) {}
  print() {
    console.log(`brand: ${this.brand}, color: ${this.color}`);
  }
}

const redJacket = new Jacket('red', 'nike');
console.log(redJacket.print());

console.log(
  '======================abstract class=============================',
);

abstract class Employees {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log(`hello ${this.first} ${this.last}`);
  }
}

class FullTimeEmployees extends Employees {
  constructor(
    public first: string,
    public last: string,
    private salary: number,
  ) {
    super(first, last);
  }
  getPay() {
    return 1000;
  }
}

class PartTimeEmployees extends Employees {
  constructor(
    public first: string,
    public last: string,
    private hourWorked: number,
    private hourlyRate: number,
  ) {
    super(first, last);
  }
  getPay() {
    return this.hourWorked * this.hourlyRate;
  }
}

const player1 = new FullTimeEmployees('vita', 'min', 1000);
const player2 = new PartTimeEmployees('min', 'woo', 10, 100);
console.log('player1:', player1);
console.log('player1 salary: ', player1.getPay());
console.log('player2:', player2);
console.log('player2 salary: ', player2.getPay());

console.log('======================typescript generic01====================');

const nums: Array<number> = [];
const colors: Array<string> = [];
/*제네릭 함수인 querySelector 에 type HTMLInputElement 를 지정해 value 에 접근하도록했으며
 * null 반환을 하지 않도록 not null 인 느낌표를 붙여줘서 inputEl 에 접근해 값을 변경토록함*/
const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.log(inputEl);
console.dir(inputEl);
inputEl.value = 'hello woomi';
const buttonEl = document.querySelector<HTMLButtonElement>('.btn');

console.log('======================typescript generic02====================');
interface Dog {
  name: string;
  age: number;
}
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: number): number {
  return item;
}

// 제네릭 함수 사용 예시
function identity<T>(item: T): T {
  return item;
}
console.log(identity<number>(7));
console.log(identity<string>('7'));
console.log(identity<boolean>(true));
// 인터페이스 타입 사용 예시
console.log(identity<Dog>({ name: 'woomi', age: 33 }));

console.log(
  '======================typescript generic03 추론된 제네릭 타입 파라미터====================',
);
/*제네릭 함수로 각 타입 들어올때 list 의 랜덤한 값을 출력토록하는 예시*/
function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

const randomNumberElement = getRandomElement<number>([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]);
console.log(randomNumberElement);
const randomStringElement = getRandomElement<string>([
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
]);
console.log(randomStringElement);

console.log(
  '======================typescript generic04 여러 타입을 갖는 제네릭 ====================',
);
// 여러 타입을 갖는 제네릭 함수에서는 두 번째 제네릭 타입은 U 로 지정해서 사용함\
function merge<T, U>(obj: T, obj2: U): T & U {
  return {
    ...obj,
    ...obj2,
  };
}
const comboOBJ = merge({ name: 'woomi' }, { hobby: ['sleep', 'eat'] });
console.log(comboOBJ);

console.log(
  '======================typescript generic05 타입 제한 추가 ====================',
);
// 타입을 제한하는 방법은 extends 를 사용함 (extends 는 상속과 비슷한 개념)
// 아래 코드에선 숫자 문자 등 타입을 제한하지 않고 object 타입이여야 한다고 제한함
function objControl<T extends object, U extends object>(
  obj: T,
  obj2: U,
): T & U {
  return {
    ...obj,
    ...obj2,
  };
}
const objMerge = objControl({ name: 'minwoo' }, { age: 33 });
console.log(objMerge);

console.log(
  '======================typescript generic05 타입 제한 추가 interface ====================',
);
interface LengthType {
  length: number;
}

/* 
function printDoubleLength <T extends LengthType> (thing: T) : number {
  return thing.length * 2;
}*/
// 타입 직접 지정
function printDoubleLength(thing: LengthType) {
  return thing.length * 2;
}
console.log('thing 에는 몇 글자로 이뤄져있나요 : ', printDoubleLength('hello'));

console.log(
  '======================typescript generic05 기본 타입 파라미터 ====================',
);
// 기본 타입 파라미터로 number 를 지정했으므로 number 타입만 받을 수 있음
function makeEmptyArray<T = number>(): T[] {
  return []
}
const makeNums = makeEmptyArray()
// 기본 값 타입외에 다른 타입은 따로 아래 코드처럼 지정해주면됨
const makeBools = makeEmptyArray<boolean>()

console.log('======================typescript generic05 create class ====================');
// 클래스에 포함되는 메서드를 작성할때 타입을 갖도록 구성하는 방법
interface Song {
  title: string;
  creator: string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}
class PlayList<T>{
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el)
  }
}
const songs = new PlayList<Song>()
songs.add({title: '소녀', creator: '혁오'})
console.log("노래:",songs)
const videos = new PlayList<Video>()
videos.add({title: '소녀', creator: '혁오', resolution: '1080p'})
console.log("영상:",videos)

console.log('======================typescript type narrowing ====================');
function triple(value: number | string) {
  if(typeof value === 'string') {
    return value.repeat(3)
  }
  return value * 3
}
console.log(triple(3))
console.log(triple("3"))

console.log('======================typescript Truthiness guard ====================');
const printLetter = (word?: string) => {
  if(word) {
    for(let char of word) {
      console.log(char)
    }
  } else {
    console.log('word is undefined')
  }
}
printLetter('hello')