let biodata = {
    name:"surendher",
    gender:"male",
    married:"single",
    qualification:["BCA","12th","10th"],
    skills:{
html:"good",
css:"average",
javascript:"good"
    },
    job:function (){
        console.log(":)")
    },
    hobbie(){
        console.log("ellamae hobbie tha")
    }
}

biodata.job()
biodata.hobbie()
console.log(biodata.qualification[2])

console.log(biodata.skills.javascript)

// 
let me = new Object()
me.name = "leena",
me.gender = "male",
me.married = "single",
me.qualification = "BCA"
console.log(me)
console.log(me.name)

console.log(me['gender'])
me["love"] = true
console.log(me)

// adding

me.lover = "surendher"
console.log(me)

// addig
let marrie = 'married'
me['marrie'] = "yes"
console.log(me) 