//1번
//"안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수'greet'을 만드시오



// function greet(){
//     console.log("안녕 내 이름은 제시카야")
// }

// greet()

//2번
//매개변수로 전달받은 이름을 반환하게 함수

// function greet(n){
//     console.log("안녕 내 이름은" + n + "야")
// }

// greet("에밀리")

//3번
//

// function greet(n){
//     console.log("안녕 내 이름은" , n,"이 야")
//     return n
// }

// const n=  greet("수정")

// console.log("안녕 내 이름은" , n,"이 야")

//4번
//meetAt함수를 만들어서
//인자를 년도, 월, 일을 받습니다.
//년도 인자만 받는 경우 -> "1234년" 형식의 문자열 리턴
//년도, 월 인자를 받은 경우 -> "1234년 5월" 형식의 문자열 리턴
//년도, 월, 일 인자를 받은 경우 -> "1234/5/6" 형식으로 문자열 리턴

// function meetAt(y,m,d){
    
//     if(d){
//         return `${y}/${m}/${d}`
//     }
//     if(m){
//         return `${y}년${m}월`
//     }
//     if(y){
//         return `${y}년`
//     }
// }

// console.log(meetAt(2024,5,7))

//5번
// function findSmallestElement(arr) {
//     let result = arr[0]
//     //console.log(result)
//     if(arr.length === 0){
//         return 0;
//     }

//     for(let i=0;i< arr.length; i++){
//         if(result > arr[i]){
//             result = arr[i]
//         }
//     }
//     return result

// }

// let numberList= findSmallestElement([100,200,3,0,2,1])
// console.log(numberList)

//6번
let unit =[50000, 10000,5000,1000,500,100]

function giveMeChange(money) {
    //console.log(money)
    for(let i = 0; i<unit.length;i++){
        let num = Math.floor(money/unit[i])
        money = money -(unit[i]*num)
        console.log(`${unit[i]}X${num}`)
    }
}

giveMeChange(12300)


