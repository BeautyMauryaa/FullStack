// class parents{
//     hello(){
//         console.log("hello")
//     }
// }

// class child extends parents{
//      welcome(){
//         console.log("welcome home!")
//      }
// }

// let obj=new child();


class person{
    constructor(){
        this.species="homospecies";
    }
    eat(){
        console.log('person can eat')
    }
    sleep(){
        console.log("person can sleep")
    }
    work(){
        console.log("do nothing")
    }
}

class engineer extends person{
    work(){
        console.log("coding,webdesigning,etc")
    }
}

let obj=new engineer();