// function suren(callback){
//     setTimeout(()=> {
// console.log("hi surendher")
// callback()
//     },3000)
// }
// function leena(callback){
//     setTimeout(()=> {
// console.log("hi leena")
// callback()
//     },1000)
// }
// function aishu(callback){
//     setTimeout(()=> {
// console.log("hi aish")
// callback()
//     },3500)
// }
// function priya(callback){
//     setTimeout(()=> {
// console.log("hi priya")
// callback()
//     },800)
// }


// suren(()=> {
//   leena(()=> {
//     aishu(()=> {
//         priya(()=> console.log("all is well"))
//     })
//   })  
// })


function choose(callback) {
    setTimeout(()=> {
        callback(null, "i am choose perfect girl")
    },1000)
}

function follow(callback){
    setTimeout(()=> {
        callback(null, "I follow that girl everyday")
    },1000)
}

function propose(callback) {
    setTimeout(()=> {
        callback(null, "i propose the girl one day")
    },1000)
}

function accept(callback){
    setTimeout(()=>{
        callback(null, "she is accept my proposel")
    },1000)
}

function marraje(callback){
    setTimeout(()=>{
        callback(null, "Aprom enna marraje tha")
    },1000)
}

choose((error, result)=>{
    if(error){
        console.log(error)
    }else{
        console.log(result)
        follow((error, result)=> {
            if(error){
                console.log(error)
            }else{
                console.log(result)
                propose((error, result)=> {
                    if(error){
                        console.log(error)
                    }else{
                        console.log(result)
                        accept((error, result)=> {
                            if(error){
                                console.log(error)
                            }else{
                                console.log(result)
                                marraje((error, result)=> {
                                    console.log(result)
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})


