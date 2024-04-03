// let num = 1
// num = num % 2
// //console.log(num)

// if(num > 0) {
//     if(num == 0){
//         console.log("짝수이다")
//     }else  if(num == 1){
//         console.log("홀수이다")
//     }
// }else {
//     console.log("0이다")
// }


//1번
// let num =-3
// if(num > 0){
//     console.log("양수")
// }else if(num < 0){
//     console.log("음수")
// }else{
//     console.log("0")
// }

//2번
// let jumsu = 0
// let grade =""

// if(jumsu >=90 && jumsu <= 100){
//     grade="A"
// }else if(jumsu >= 80 && jumsu < 90){
//     grade="B"
// }else if(jumsu >= 70 && jumsu < 80){
//     grade="C"
// }else if(jumsu >= 60 && jumsu < 70){
//     grade="D"
// }else if(jumsu >= 0 && jumsu < 60){
//     grade="F"
// }else{
//     grade="error"
// }
// console.log(grade)

//3번
let skills = ["HTML", "CSS", "Javascript"]
let js = skills.includes("Javascript")
let React = skills.includes("React")

if(js == true && React ==true){
    console.log("합격")
}else if(js == true || React ==true) {
    console.log("예비")
}else {
    console.log("불합격")
}