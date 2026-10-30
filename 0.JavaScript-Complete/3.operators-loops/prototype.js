const student={
    age(){
        console.log("19 years")
    },
    name:"beauty",
    marks:99,
    printmarks:function(){
        console.log("marks=",this.marks);
    },
}

const student2={
    salary:2000000,
    age(){
        console.log("25 years")
    }
};
student2.__proto__=student;