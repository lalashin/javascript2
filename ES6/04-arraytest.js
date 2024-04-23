let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];
  

//1번
// let data = names.map((item)=>{
//     return item.toUpperCase()
// })

// let data = names.map((item)=>item.toUpperCase())

//2번
// let data = names.map((item)=>item.split(' ')[0])
// console.log(data)

//3번

// let data = names.map((item)=>{
//     let sliceName =  item.split(' ')
//     let initail = ""
//     sliceName.forEach( (nitem)=>initail += nitem[0])
//     return initail

// })

// console.log(data)


//4번
// let data = names.find((item)=> item.includes("a"))

// console.log(data)

//5번

// let dubleLetter = names.filter((item)=>{
//     let splitName = item.split("");
//     return splitName.some((letter,idx) => letter == splitName[idx+1])
// })

// console.log(dubleLetter)

//6번

// let data = names.some((item)=>{
//     return item.length > 20
// })

// console.log(data)

//7번
// let data = names.some((item)=>{
//     let sName = item.split(' ')
//     sName.pop()
//     return sName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
// })

// console.log(data)

//8번

// let data = names.every((item)=>{
//     return item.includes("a")
// })

// console.log(data)

//9번

// let data = names.findIndex((item)=>{
//     return item.length > 20
// })

// console.log(data)

let data = names.findIndex((item)=>{
    return item.split(' ').length >=3
})

console.log(data)
