let DATA="secret website information";
let EDITDATA="data has been edited";

class user{
constructor(username,email){
    this.name=username;
    this.email=email;
}
    viewdata(){
        console.log("website data",DATA)
    }
}


class admin extends user{
    constructor(username,email){
        super(username,email);
    }
   editdata(){
    DATA="some new value"
   }
}

let students1=new user("beauty","beautymaurya9142@gmail.com");
let students2=new user("pihu","pihu123@gmail.com");
let students3=new user("aayat","aayat123@gmail.com");
let students4=new user("saloni","saloni86@gmail.com");
let students5=new user("vikash","vikash123@gmail.com");
let adminedit=new admin("priyanka","priyanka@gmail.com");