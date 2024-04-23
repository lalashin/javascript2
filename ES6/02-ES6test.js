//1번
// let name="lala fruit store"
// let fruits =["banana","apple","mango"]
// let address = "seoul"
// let store = {name, fruits, address}

// let info =`제가게 이름은${name}입니다. 위치는 ${address}에 있습니다.`
// console.log(info )

//3번
// function calculate(obj){
//    // return obj.a+obj.b+obj.c
//    let {a,b,c} =obj
//    return a+b+c
// }



// calculate({a:1,b:2,c:3})

//4번
// let name = "lala store"
// let fruits = ["banana","apple","mango"]
// let address = {
//     country:"korea",
//     city:"seoul"
// }

// function findStore(obj){
//     let {name,address:{city}} = obj
//     return name==="lala store" && city === "seoul"
// }

// console.log(findStore({name,fruits,address}))

//5번
// function getNumber() {
//     let array = [1,2,3,4,5,6]
//     //return {first,third,forth}
//     let [first,,third,forth] = array
//     return {first,third,forth}
// }

// console.log(getNumber())

//6번
// function getCalendar(first, ...rest){
//     return (
//         first ==="january" &&
//         rest[0] ==="febuary" &&
//         rest[1] ==="march" &&
//         rest[2] === undefined
//     );
// }

// console.log(getCalendar("january","febuary","march")); 

//7번
// function getMinimum(){
//     let a=[45,23,78]
//     let b=[54,11,9]
//     return Math.min(...a,...b)
// }

// console.log(getMinimum())

//8번
// function sumNumber(){
//     // const sum = function(a,b) {
//     //     return a + b;
//     // };
//     // return sum(40, 10);
//     let sum = (a,b) => a + b
//     return sum(40, 10);
// }

// console.log(sumNumber())

//9번
function sumNumber() {

    let addNumber = (a) =>(b)=>(c) => a+b+c;
    return addNumber(1)(2)(3);
    // function addNumber(a){
    //     return function(b){
    //         return function(c) {
    //             return a+b+c;
    //         }
    //     }
    // }
}

console.log(sumNumber())