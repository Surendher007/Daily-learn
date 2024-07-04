// callback function

// function call(callback){
//     let name = prompt("enter your name")
//     callback(name)
// }

// function display(name){
//     document.write("<h1>this is your name "+name+"</h1>")
// }

// call(display)

// another example
   
// callback
// const i = 12

// function morning(i){
//     console.log("its morning 12AM")
// }

// function evening(i){
//     console.log("its evening 12AM")
// }

// function day(callback){
//     if(i == 12) 
//     callback(i)
// }

// day(evening)

// another example

const i = false

function business(i){
    let source = true
    if(source){
     document.write("<h1>you have a sourse you can do it</h1>")
    }else{
     document.write("<h1>first you grow the money next you can do it</h1>")
    }
}

function employee(i){
    let energy = false
    if(energy){
     document.write("<h1>you are hard worker so you will do work</h1>")
    }else{
        const energi = document.getElementById('lol')
        energi.innerHTML = "you are not old surendher, so think you have you energy"
    }
}

function me(callback){
    if(i)
    callback(i)
}if(i == true){
   const will = document.querySelector('p')
   will.innerHTML = "you will do it"
}else{
document.write("<h1>you are totally waste to live</h1>")
}

me(employee)