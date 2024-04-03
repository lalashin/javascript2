let patient ={
    name : "lala",
    age : 17,
    disease:"cold"
}

console.log(patient)
console.log(patient.age) //같은문법
console.log(patient["age"])//같은문법
patient.age=25
patient["name"]="insook"
console.log(patient)

let patientList = [{name:"insook",age:14},{name:"lala",age:24},{name:"peanut",age:17}]

console.log(patientList)
console.log("첫번째는:",patientList[0])
console.log("첫번째나이는?:",patientList[0].age)
console.log("세번째나이는?:",patientList[2]["age"])
console.log("두번째이름은?:",patientList[1].name)

