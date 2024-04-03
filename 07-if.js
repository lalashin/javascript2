// if(조건문){
//     조건이 충족하면 할일들
// }

// if(false){
//     console.log("조건은 참입니다.")
// }else{
//     console.log("조건은 거짓")
// }
//조건들의 순서 중요 적은것부터 큰순서로
let age=21
licence = true

if(age > 20) {
   if(licence != true) {
        console.log("운전이 가능합니다.")
   }else{
    console.log("면허를 따세요")
   }
}
else {
    console.log("운전이 불가능")
}