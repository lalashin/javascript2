let fruit =['apple','mango','strawberry','pineapple']
let sentence='라라는 공부를 너무 좋아해'

// for(let item of fruit) {
//     console.log("라라가 좋아하는 과일은 of",item)
// }

// for(let char of sentence){
//     console.log("char",char)
// }

let person={
    name:"라라",
    age:35,
    //cute:true,
}

// for(let key in person) {
//     console.log("key",key)
//     if(key === "cute"){
//         console.log("귀엽니?",person[key])
//     }
// }

//동적인 객체에
for(let key in fruit) {
    console.log("key",key)
}