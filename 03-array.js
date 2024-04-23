let fruit =["banana","apple","grape","mango"]
console.log(fruit)
console.log(fruit[3]) //인덱스는 0부터 시작한다.

fruit[2] ="tomato"

console.log(fruit)
//pop() : 마지막에 있는 아이템을 뺌
 fruit.pop()
 console.log(fruit)
 fruit.push("pineapple")

 console.log(fruit)

 //includes : 아이템 있는지 없는지 확인


 console.log(fruit.includes("peer"))

 //indexof : 인덱스 번호 확인
 fruit.indexOf("apple")
 console.log( fruit.indexOf("apple"))

 //slice(2) 2시작점 이후부터 자른다. slice(1,3) (1시작점, 3끝점-끝점미포함)
 //기존의 배열을 유지
 console.log(fruit)
 console.log( fruit.slice(1,3))

 fruit.splice(0,2) //(시작점, 개수)시작점에서 몇개를 제거할지?
 console.log(fruit)
 