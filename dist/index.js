"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    // private 라고 명시해주면 해당 메서드나 프로퍼티가 정의된 함수 내부에서만 접근 가능하다고 알리는것
    secretMethode() {
        console.log('secretMethod 호출');
    }
}
const vitamin = new Player('vita', 'min');
// private score 는 클래스 외부에서 접근 불가하기에 아래 code 에서 에러 발생
//vitamin.score = 33;
// 아래 code 에서 vitamin.first = 'vitamin' // readonly 이기 때문에 에러 발생
//vitamin.first = 'vitamin'
// 아래 code 에서 vitamin.secretMethode() // private method 이기 때문에 에러 발생
//vitamin.secretMethode()
console.log(vitamin);
