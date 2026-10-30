//find the avg of sum of marks
// let marks=[85,97,44,37,76,60];
// let marks_sum=0;
// for(let val of marks){
//     marks_sum=marks_sum+val;
//     console.log(val);
//     console.log(`sum of total marks: ${marks_sum}`);
// }
// let avg=marks_sum/marks.length;
// console.log(`avg marks of the entire class: ${avg}`);

//change the array after applying offer and store finalprice

// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
// }
// console.log(items);

// let items=[250,645,300,900,50];
// let idx=0;
// for(let val of items){
//     let offer=val/10;
//     items[idx]=items[idx]-offer;
//     console.log(`the price after offer is ${items[idx]}`);
//     idx++;

// }

//array
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);


// let students=[85,97,44,37,76,60];
// let sum=0;
// for(let val of students){
//     sum+=val;
//     console.log(sum);
// }
// let avg=sum/students.length;
// console.log(avg);


// let price=[250,347,589,100,309];
// for(let i=0;i<price.length;i++){
//     let offer= price[i]-10;
//     price[i]=price[i]-offer;
// }
// console.log(price[i]);



//filter
// let marks=[89,99,90,91,27,44,59,75,49,70,94];
// let newmarks=marks.filter((val)=>{
//     return val>=90;
// });
// console.log(newmarks);

let n =prompt("enter the number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
};
console.log(arr);
let sumarr=arr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(sumarr);
let productarr=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(productarr);