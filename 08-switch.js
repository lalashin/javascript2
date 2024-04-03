//let menu = 3
// if(menu == 1 ){
//     console.log("물건사기")
// }else if(menu == 2){
//     console.log("잔고확인")
// }else if(menu == 3){
//     console.log("히스토리확인")
// }else {
//     console.log("홈으로 돌아가기")
// }

//조건이 분명하게 떨어질때
// switch (menu) {
//     case 1 :
//         console.log("물건사기")
//         break;
//     case 2 :
//         console.log("잔고확인")
//         break;
//     case 3 :
//         console.log("히스토리확인")
//         break;
//     default :
//         console.log("홈으로 돌아가기")
       
// }

let menu =5

if(menu <=3){
 console.log("범위안에 숫자입니다.")
}else{
    console.log("범위 밖의 숫자입니다.")
}
//삼항연산식 조건? true일때 : flase일때
let answer = menu <=3 ? "범위안에 숫자입니다." : "범위 밖의 숫자입니다."

console.log(answer)