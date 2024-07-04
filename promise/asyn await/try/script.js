// let leena = false
// let me = new Promise((resolve,reject)=> {
// if(leena){
//     resolve("she is accept my love")
// }else{
// reject("she is broken my heart")
// }
// })

// me.then((msg)=> {
//     document.write("<h1>"+msg+"</h1>")
// }).catch((err)=> {
//     console.log(err)
// })


// promise chaining
// let love = true

// let leena = new Promise((resolve, reject)=> {
//     if(love){
//         setTimeout(()=> {
//             let accept = document.write("<h1>she is love with me</h1>")
//             resolve(accept)
//         },10000)
     
//     }
// })

// let love2 = false
// let aishu = new Promise((resolve, reject)=> {
//     if(love2){
//         setTimeout(()=> {
//             let accept = document.write("<h1>she is love with me</h1>")
//             resolve(accept)
//         },10000)
     
//     }else{
//         setTimeout(()=> {
//             let accept1 = document.write("<h1>i am totally death</h1>")
//             reject(accept1)
//         },10000)
//     }
// })

// async function suren(){
//     const me = await leena
//     console.log(me)

//     const me1 = await aishu
//     console.log(me1)
// }
// suren()

// function tossCoin(){
//     return new Promise((resolve, reject)=> {
//         const toss = Math.floor(Math.random()*2)
//         if(toss == 1){
//             resolve("head")
//         }else{
//             if(toss==0){
//                 reject("tail")
//             }
//         }
//     })
// }

// tossCoin().then((option)=> {
//     document.write("<h1>you are win because the coin is "+option+"</h1>")
// }).catch((option)=> {
//     document.write("<h1>you are loss because the coin is "+option+"</h1>")
// })

// tossCoin()


// error hndling
// try{
// let num = prompt("enter your number")
// if(num == '')
//  throw "can not be empty"
// if(isNaN(num))
// throw "not a string"
// console.log(num * 2)
// }
// catch (error){
// console.log(error)
// }
// finally{
//     console.log("you do your best")
// }

// let suren = "https://restcountries.com/v3.1/all"
// let url = fetch(suren).then((val)=> {
//    return val.json()
// }).then((abcd)=> {
//     abcd.forEach((flag)=> {
// console.log(flag)
//     })
// })
// console.log(url)

// async

// const hi = {
//     userlist : []
// }

// let display = async function suren(){
//     const url = await fetch("https://restcountries.com/v3.1/all")
//     const res = await url.json()
//     return res
// }

//  async function good (){
// let hello =await display()
// hi.userlist = hello 
// console.log(hi)
// }

// good()
// console.log(hi)

// async function suren(){
//     const leena = await fetch("http://icanhazdadjoke.com/", {
//         method :"GET",
//         headers : {
//             Accept : "text/plain"
//         }
//     })
//     const hello = await leena.text()
//     console.log(hello.joke) 
// } 
// suren()

// let obj = {
//     name: "suren",
//     printName : function () {
//         console.log(this.name)
//     }
// }

let obj2 = {
    name :"suren",
    x : function (){
        const y = ()=> {
            console.log(this)
        }
        y()
    }
}

obj2.x()

let obj3 = {
    name : "leena",
    x : ()=> {
        console.log(this)
    }
}

obj3.x()
// obj.printName.call(obj1)

let obj1 = {
    name :"suren",
    x : function (){
       console.log(this)
}
}

obj1.x()
