// let arr = ["developer","poem writter","director","businessman"]

// arr.forEach((val)=> {
//     let display = document.createElement('option')
//     display.textContent = val
//     display.value = val
//     document.querySelector('select').appendChild(display)
// })
// let me = true

// function path(me) {
//  document.write("<h1>moter la poi kulipom</h1>")
// }

// function unpath(me){
//     document.write("<h1>engayumae motor odala</h1>")
// }

// function what(callback){
// if(me){
//    let kkk = document.querySelector('p')
//   kkk.innerHTML = "kaila ellam irruku"
// }else{
//     console.log("kulikavae intrest illa")
// }
// callback(me)

// }

// what(path)
// document.write("<h1>hi suren</h1>")

// callback error
// let error = true

// function one(callback){
//     setTimeout(()=> {
//         let onee = document.write("<h1>one it will be executed</h1>")
//         callback(null, onee)
//     },3000)
   
// }

// function two(callback){
//     setTimeout(()=> {
//         let twoo = document.write("<h1>two it will be executed</h1>")
//         callback(null, twoo)
//     },3000)
    
// }

// function three(callback){
//     setTimeout(()=>{
//         let threee = document.write("<h1>three it will be executed</h1>")
//         callback(null, threee)
//     },3000)
// }
   

// function four(callback){
//     setTimeout(()=> {
//         let fourr = document.write("<h1>four it will be executed</h1>")
//         callback(null, fourr)
//     },3000)
    
// }

// function five(callback){
//     setTimeout(()=> {
//         let fivee = document.write("<h1>five it will be executed</h1>")
//         callback(null, fivee)
//     },3000)
    
// }

// one((error, msg)=> {
//      if(errors){
//         document.write("<h1>result "+error+"</h1>")
//      }else{
//         document.write("<h1>result "+msg+"</h1>")
//         two((error, msg)=>{
//             if(errors){
//                 document.write("<h1>result "+error+"</h1>")
//             }else{
//                 document.write("<h1>result "+msg+"</h1>") 
//                 three((error, msg)=> {
//                     if(errors){
//                         document.write("<h1>result "+error+"</h1>")
//                     }else{
//                         document.write("<h1>result "+msg+"</h1>")
//                         four((error, msg)=> {
//                             if(errors){
//                                 document.write("<h1>result "+error+"</h1>")
//                             }else{
//                                 document.write("<h1>result "+msg+"</h1>") 
//                                 five((error, msg)=> {
//                                     if(errors){
//                                         document.write("<h1>result "+error+"</h1>")
//                                     }else{
//                                         document.write("<h1>result "+msg+"</h1>") 
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//      }
// })

// promise

// let open = new Promise((resolve, reject)=> {
//     if(close == false){
//         resolve("ellam nanmaikae")
//     }else{
//         reject("thavaru seithuvittai")
//     }
// })

// open.then((sucess)=> {
// let display = document.querySelector('h1')
//    display.innerHTML = "ithu " + sucess
// }).catch((loose)=> {
//     let display1 = document.querySelector('h1')
//     display1.innerHTML = "periya " + loose
// })

// forEach

let arr = ["a","b","c","d","e"]

arr.forEach((val, index,array)=> {
    setTimeout(()=> {
        array[index] = val
        console.log(val)
    },5000)
   
})


