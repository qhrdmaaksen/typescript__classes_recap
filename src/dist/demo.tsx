// tsx 에서 화살표 함수 사용해 제네릭 함수 생성 시 <T,> 로 사용해야 한다.
const arrowFunctionEX = <T,>(list: T[]): T => {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex]
}