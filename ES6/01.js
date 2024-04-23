// let name="lala"
// let age = 17

//1. 객체 초기화
//  let person = {nameValue:name, ageValue:age} //예전방식
// //let person = {name, age} //최신방식

// console.log(person)

//2. 객체를 분해하는 방법

// let flower = {
//     name:"rose",
//     month: 8
// }

// // //예전방식
// // // let name = flower.name
// // // let month = flower.month

// // //모던방식 //value와 key 값이 같을때
// // //let {name, month} = flower

// // console.log(name, month)

// //value와 key 값이 다를땐 예전방식

// let nameValue = flower.name
// let monthValue = flower.month

// console.log(nameValue, monthValue)

//3. ``

// let name = "lala"
// let age =18
// console.log("제이름은",name,"입니다. 나이는",age,"입니다.")

// console.log("제이름은"+ name +"입니다. 나이는"+age+"입니다.")

// console.log(`제이름${name}입니다 제 나이는${age}입니다.`)

//4. 배열

// let array = [1,2,3]

// // let a = array[0]
// // let b = array[1]
// // let c = array[2]

// // console.log(a,b,c)

// // let [a,b,c] = array
// // console.log(a,b,c)

// let [a,...rest] = array
// console.log(rest)

//5. 객체
// let person = {
//     name:"lala",
//     age:19,
//     cute:true
// }

// let {name,...eee} = person
// console.log(name, eee)

// let a = [1,2]
// let b = [3,4]
// let c = [5,6]

// // let result = a.concat(b,c)
// let result =[...a,...b,...c]
// console.log(result)

//6. 함수 선언방법
// function foo(){
//     //console.log(hello)
//     return "haha"
// }

// let foo = () => {
//     console.log("hellow")
// }

// let foo = () =>"haha"

// console.log(foo())

//7. this 일반함수 형태로만 사용가능 : 화살표 함수는 this가 적용되지 않는다. 

let age = 17
let person = {
    name:"lala",
    age :20,
    getInfo:function(){
        console.log(this)
    }
}

person.getInfo()
