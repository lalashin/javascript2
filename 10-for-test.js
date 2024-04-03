//1번
// let sum= 0
// for(let i=1 ;i<=100;i++){
    
//     //sum = sum +i
//     sum += i
// }

// console.log(sum)

//2번
// for(let i=1 ;i<=100;i+=2){
//     console.log(i)

// }

//3번
// for(let i=1; i<=50;i++){    
  
//     let sv = i.toString()
//     let result = ""
//     for(let j=0 ;j<sv.length;j++){
//         if(sv[j]==3 || sv[j]==6 || sv[j]==9 ){
//             result += "짝"
//         }
//     }
  
//     console.log(result.length>0?result:i)
// }

//4번
let n =2
let isPrime = true

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}else{
    for(let i=2;i<n;i++){
      if(n % i == 0){
        isPrime =  false 
      }
    }
}

console.log(isPrime)
