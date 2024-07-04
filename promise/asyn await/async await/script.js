// async fuction
/* async function always return a function
if we give a any values the function rapping the promise
 and it will be return the promise
*/

// const bro = new Promise((resolve,reject)=> {
//     setTimeout(()=> {
//         resolve("Promise resolve value")
//     },5000)
   
// })

// const brot = new Promise((resolve,reject)=> {
//     setTimeout(()=> {
//         resolve("Promise resolve problem")
//     },3000)
   
// })
// // async function ball(){
// //     return bro
// // }

// async function handle() {
// console.log("hi suren")
//     const val = await bro
//     console.log(val)
//     console.log("hello leena")

//     const val2 = await brot
//     console.log(val2)
// }
// handle()


// let love = new Promise((resolve,reject)=> {
//     setTimeout(()=>{
//          resolve("we are lovers")
//     },7000)
   
// })

// let lust = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//           resolve("this is a lust")
//     },5000)
  
// })

// let lusti = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//           resolve("no no no")
//     },9000)
  
// })

// let luste = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//           resolve("yes yes")
//     },11000)
  
// })
// async function suren(){
//     const leena = await love
//     console.log(leena)

//     const leena2 = await lust
//     console.log(leena2)

//     const leena3 = await lusti
//     console.log(leena3)

//     const leena4 = await luste
//     console.log(leena4)
// }

// suren()

// another one

// const rest = "https://restcountries.com/v3.1/all"
// async function wakeup(){
// try{
//     const hello = await fetch(rest)
//     const convert = await hello.json()
//     console.log(convert)
// }
// catch (err){
//     console.log(err)
// }
  
// }
// wakeup()

// otherway to error handling

// const rest = "https://restcountries.com/v3.1/all"
// async function wakeup(){

//     const hello = await fetch(rest)
//     const convert = await hello.json()
//     console.log(convert)

// }
// wakeup().catch(err=> console.log(err))