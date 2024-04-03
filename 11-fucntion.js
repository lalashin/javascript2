// console.log("빵두기")
// console.log("상추두기")
// console.log("고기패티두기")
// console.log("뚜껑덮기")
// console.log("김튀박스선택")
// console.log("감튀담기")
// console.log("콜라통선택")
// console.log("얼음담기")
// console.log("감튀박스선택")
// console.log("김튀담기")


function makeBurger(type,size,num){
    console.log("매개변수값은?",type)
    console.log("빵두기")
    console.log("상추두기")

    if(num<1){
        return "버거개수가 0개입니다."
    }
    if(type=="불고기"){
        console.log("고기패티두기")
    }else if(type=="새우"){
        console.log("새우패티두기")
    }
    console.log("뚜껑덮기")
    console.log(type,"버거",size,"사이즈",num,"개 준비완료")

    return "완료되었습니다."
}

let result = makeBurger("새우","L",0)
console.log("버거 프로세스 결과", result)

function makeSet(){
    makeBurger("불고기","L",2)
}

makeSet()