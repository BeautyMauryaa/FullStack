let studentmarks=[99,87,88,77,56,86];
console.log(studentmarks);
console.log(studentmarks.length);
let student_name=["priya","riya","vikash","riha","jinjing","lovely","kumar","pihu","ankita"];
// for(let idx=0;idx<student_name.length;idx++){
//     console.log(student_name[idx]);
// }

for(let name of student_name){
    console.log(name);
}
//array indices

let veggies=["tomato","carrot","chilli","cauliflower","brinjal"];
console.log(veggies);

//tostring:convert array to string
console.log(veggies.toString());

//push():add to end
let addedveggies=veggies.push("potato");
console.log(veggies);

//pop():delete from end &return.
let deletedveggies=veggies.pop();
console.log("deleted veggies:",deletedveggies);

//concat():joins multiples array
let stud=studentmarks.concat(student_name);
console.log(stud);

//unshift():add to start
let color=["red","pink","blue","voilet","green","yellow"]
color.unshift("black");
console.log(color);
//shift():remove from start and return.
color.shift();
console.log(color);

//slice():return a piece of array
console.log(color.slice(1,5));

//splish():
console.log(color.splice(1,3,"gray","white"));


// // const obj={
// //     name:"beauty",
// //     sclass:"UG",
// //     rollno:1
// // }

// // console.log(obj.key)

// // let 

// // let 


// function maxdiff(arr){
//     let minarr=arr[0];
//     let max=0;

// }