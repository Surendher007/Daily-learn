// dom selector

// querySelector

let sound = document.querySelector('#message')
sound.innerHTML = "hello surendher"

let dis = document.querySelector('.message-two')
dis.innerHTML = "welcome to dom selectors"

// querryselectorAll

let mi = document.querySelectorAll('.li-one')
for(let i =0;i<mi.length; i++){
    mi[i].innerHTML = "love"
}

// getElementById selector

let fi = document.getElementById('display')
fi.innerHTML = "This is a getElementById"

// getElementByClassName selector

let hi = document.getElementsByClassName('li-one')
for(let i = 0; i<hi.length;i++){
    hi[i].style.color = "blue"
}

// getElementByTagName
let display = document.getElementsByTagName("li")
for(let i = 0;i<display.length;i++){
display[i].innerHTML = "what are you doing"
}


let hoo = document.getElementsByTagName('ul')
for(let i =0; i<hoo.length;i++){
    
}

// createElement

for(let i =0; i<=1000;i++){
    let si = document.createElement('li')
    si.innerText = "food items"
}
