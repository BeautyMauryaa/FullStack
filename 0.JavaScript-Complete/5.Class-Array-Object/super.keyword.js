class students{
constructor(penname){
    this.species="species";
    console.log("hello")
    this.penname=penname;
}
eat(){
    console.log("eat")
}
read(){
    console.log("read")
}
book(){
    console.log("book")
}
}

class teacher extends students{
    constructor(penname){
        console.log("jii")
        super(penname);
        this.teach="teach";
        console.log("hiii")
    }
    teach(){
        console.log("teach")
    }
}
 let study=new teacher("agani");