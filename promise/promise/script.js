// promise method

// const ok = true
// let suren = new Promise((resolve, reject) => {
//     if (ok == 1) {
//         resolve("she is fallen");
//     } else {
//         reject("she is not");
//     }
// });

// suren.then((message) => {
//     console.log(message + " love with me");
// }).catch((message) => {
//     console.log(message + " love with me");
// });

//  PROMISE ANOTHER EXAMPLE

// const booking = false

// let send = new Promise((resolve, reject)=> {
    
//     if(booking){
//         resolve(1000)
//     }else{
//         reject("sorry")
//     }
// })
// send.then((amt)=> {
//     console.log("you are recieved " + amt + " rupees")
// }).catch((message)=> {
//     console.log(message + " for the invalid transaction")
// })

// promise all


// let p1 = new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//          resolve("p1 is sucess")
//      },3000)
//  })
 
//  let p2 = new Promise((resolve, reject)=> {
//      setTimeout(()=> {
//          resolve("p2 is sucess")
//      },5000)
//  })
 
//  let p3 = new Promise((resolve, reject)=> {
//      setTimeout(()=> {
//         reject("p3 is fail")
//      },1000)
//  })
 
//  promise any

/* its wait for first setteled resolve Promises.
suppose all Promises setteled is rejected it will through the aggricated error
 */

//  Promise.any([p1,p2,p3]).then((msg)=> {
//      console.log(msg)
//  }).catch((error)=> {
//      console.error(error)
//  })

// promise.all
/* Its all Promisses setteled is succes it will return after finishing the timeout
suppose any Promises setteled is failed it will be through the error
*/

//  Promise.all([p1,p2,p3]).then((msg)=> {
//     console.log(msg)
// }).catch((error)=> {
//     console.error(error)
// })

// Promise.allsettled
/* its all Promises setteled resolve or reject after finishing the timeout it will be return the all Promises
it will be return the array. There are two two key values in this array one is success objects its have two key values
one is status and another one is value, and same thing of reject but not have a value its have a reason 
*/

// Promise.allSettled([p1,p2,p3]).then((msg)=> {
//     console.log(msg)
// }).catch((error)=> {
//     console.error(error)
// })

// Promise.race
/* its will be setteled is either success or resolve first setteled low timeout Promisses it will be return
 */

// Promise.race([p1,p2,p3]).then((msg)=> {
//     console.log(msg)
// }).catch((error)=> {
//     console.error(error)
// })

const card = ["shoes","pant","t-sirt"]

const orderd = createOrder(card)

console.log(orderd)

orderd.then(function(orderId){
    console.log(orderId)
}).catch(function(error){
    console.log(error.message)
})

function createOrder(card){

    return new Promise((reject,resolve)=> {
        if(validateCard){
            const err = new Error("uncaught error")
            reject(err)
        }else{
            const orderId = "123ok"
            setTimeout(()=> {
                resolve(orderId)
            },6000)
       
        }
    })
}

function validateCard(){
    return true
}