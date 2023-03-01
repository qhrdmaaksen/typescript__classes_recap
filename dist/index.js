"use strict";
class Player {
    // 아래 first & last 는 typescript 에게 type 을 알려주는 것임(타입 추론)
    // public 명시해주면 클래스 외부에서 프로퍼티 변경,접근,쓰기 할수있다고 알리는것
    /* 단축 구문으로 생성자 함수에 인자로 설정하기에 주석처리.
    public readonly first: string;
    public readonly last: string;
    private score: number = 0;*/
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        /* 단축 구문으로 생성자 함수에 인자로 설정하기에 초기화 필요없어져서 주석처리함.
        this.first = first;
        this.last = last;*/
    }
    // private 라고 명시해주면 해당 메서드나 프로퍼티가 정의된 함수 내부에서만 접근 가능하다고 알리는것
    secretMethode() {
        console.log('secretMethod 호출');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('점수는 0 이상이어야 합니다.');
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
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
console.log("======================interface=============================");
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const redBike = new Bike('red');
console.log(redBike.color);
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`brand: ${this.brand}, color: ${this.color}`);
    }
}
const redJacket = new Jacket('red', 'nike');
console.log(redJacket.print());
console.log("======================abstract class=============================");
class Employees {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`hello ${this.first} ${this.last}`);
    }
}
class FullTimeEmployees extends Employees {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return 1000;
    }
}
class PartTimeEmployees extends Employees {
    constructor(first, last, hourWorked, hourlyRate) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourWorked = hourWorked;
        this.hourlyRate = hourlyRate;
    }
    getPay() {
        return this.hourWorked * this.hourlyRate;
    }
}
const player1 = new FullTimeEmployees('vita', 'min', 1000);
const player2 = new PartTimeEmployees('min', 'woo', 10, 100);
console.log("player1:", player1);
console.log("player1 salary: ", player1.getPay());
console.log("player2:", player2);
console.log("player2 salary: ", player2.getPay());
console.log("======================typescript generic01====================");
const nums = [];
const colors = [];
/*제네릭 함수인 querySelector 에 type HTMLInputElement 를 지정해 value 에 접근하도록했으며
* null 반환을 하지 않도록 not null 인 느낌표를 붙여줘서 inputEl 에 접근해 값을 변경토록함*/
const inputEl = document.querySelector("#username");
console.log(inputEl);
console.dir(inputEl);
inputEl.value = "hello woomi";
const buttonEl = document.querySelector(".btn");
console.log("======================typescript generic02====================");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
// 제네릭 함수 사용 예시
function identity(item) {
    return item;
}
console.log(identity(7));
console.log(identity("7"));
console.log(identity(true));
// 인터페이스 타입 사용 예시
console.log(identity({ name: "woomi", age: 33 }));
console.log("======================typescript generic03====================");
/*제네릭 함수로 각 타입 들어올때 list 의 랜덤한 값을 출력토록하는 예시*/
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
const randomNumberElement = getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(randomNumberElement);
const randomStringElement = getRandomElement(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
console.log(randomStringElement);
console.log("======================typescript generic04 추론된 제네릭 타입 파라미터 ====================");
