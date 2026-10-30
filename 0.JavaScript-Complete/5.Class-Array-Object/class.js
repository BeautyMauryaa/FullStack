class Toyotacar{
    constructor(){
        console.log("this is a constructor")
    }
    color(){
        console.log("blue")
    }
    start(){
        console.log('start')
    }
    stop(){
        console.log("stop")
    }
    setbrand(brand){
        this.brand=brand;
    }
    setcolor(red){
        this.color=red;
    }
}
let car= new Toyotacar("car");
car.setbrand("car")
let fortuner=new Toyotacar()
fortuner.setcolor("red")

