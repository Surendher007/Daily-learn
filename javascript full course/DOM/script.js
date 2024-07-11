// dom selector

// querySelector

let sound = document.querySelector('#message')
sound.innerHTML = "hello surendher"

// querryselectorAll

let good = document.querySelectorAll('.li-one')
for(let i =0; i<good.length; i++){
    good[i].innerHTML = "not available"
}

// getElementById selector
let out = document.getElementById('message')
out.innerHTML = "Welcome to DOM"

// getElementByClassName selector
let print = document.getElementsByClassName('li-one')
for(let i=0;i<print.length;i++){
    print[i].style.color = "gray"
}

// getElementByTagName
let display = document.getElementsByTagName("li")
display[0].innerHTML = "what are you doing"

let hoo = document.getElementsByTagName('ul')
for(let i =0; i<hoo.length;i++){
    
}

