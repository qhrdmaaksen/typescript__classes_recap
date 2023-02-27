class Player {
  // 아래 first & last 는 typescript 에게 type 을 알려주는 것임(타입 추론)
  // public 명시해주면 클래스 외부에서 프로퍼티 변경,접근,쓰기 할수있다고 알리는것
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
	// private 라고 명시해주면 해당 메서드나 프로퍼티가 정의된 함수 내부에서만 접근 가능하다고 알리는것
  private secretMethode(): void {
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
