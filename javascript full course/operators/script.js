// operators

// Arithmetic operators +, -, *, /, %, ++, --

let a = 30
let b = 20
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ,--b)
console.log(a ,++b)

// assignment operators =, +=, =-, =*, =/, =%, **=

let x = 5
let y = 9

// short hand assignment
console.log(x += x)
// console.log(x -= 1)
console.log(x *= x)
console.log(x /= x)
console.log(x %= y)

x = '6'  /** this is automatic type conversion */

// power value
console.log(x **= 2)

// comparison operators ==, ===, !=, !==, >, <, <=, >=

let n = 5
let m = 5
console.log(n == m)
console.log(n === m)
console.log(n != m)
console.log(n !== m)
console.log(n < m) /** console.log(n<90) */
console.log(n > m)
console.log(n <= m)
console.log(n >= m)

// logical operator &&, ||, !

let k = 2
let p = '2'

/**sort circuit operators */
console.log(k == p && k === p)  
console.log(k == p || k === p)
console.log(!k !== p)

// Bitwise operator &, |, ~, <<, >>, >>>

let q = 2
let u = 3
console.log(q & u)
console.log(q | u)
console.log(q << u)
console.log(q >> u)
console.log(q^u)

// pre & post increment

let g = 5

// pre increment
//  its update and show immetiately
console.log(++g)

// post increment
// its updated but not showing
console.log(g++)


// special value

console.log(5/0) /* infinity */
console.log("5" * 'six')  /* NaN => because its not a number*/
console.log(Math.sqrt(-2))

let f
console.log(f)   /** undefined  => because its not assign any value*/

// special operator

let j = 7
let str = "hi"
let tr = true

console.log(typeof j)
console.log(typeof str)
console.log(typeof tr)

// just try
let v=100
console.log(v>50 && v%10==0)

// prompt

// let name = prompt("whats your name")
// console.log("my name is" , name)

// alert

// alert("its completell")

// warning

console.warn("don't back")

// error

console.error("not defined")