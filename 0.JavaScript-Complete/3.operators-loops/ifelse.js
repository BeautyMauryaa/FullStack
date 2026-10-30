// function check(num1,num2){
    // if(num>0){
    //     console.log(`the ${num} is positive.`);
    // }else if(num==0){
    //     console.log(`the ${num} is zero`)
    // }
    // else{
    //     console.log(`the ${num} is positive.`);
    // }

    // if(num%2==0){
    //     console.log(`the ${num} is even.`);
    // }else {
    //     console.log(`the ${num} is odd.`);
    // }

// if(num1>num2){
//     console.log(`the ${num1} is greater.`);
// }else if(num1==num2){
//     console.log(`both ${num1} and ${num2} are equal.`);
// }else{
//     console.log(`the ${num2} is greater.`);
// }

// }

// console.log(check(3,7));

const prompt = require('prompt-sync')(); 
// const grade=parseInt(prompt("enter the marks: "));
// // let gradeint=parseInt(grade,10)
// function gradecheck(grade){
//     if(grade>=85){
//         console.log("Grade A");
//     }else if(grade>=65){
//         console.log("Grade B");
//     }else if(grade>=40){
//         console.log("grade C");
//     }else{
//         console.log("FAIL");
//     }
// }

// gradecheck(grade);


//ticket price:
// const age=parseInt(prompt("enter the your age: "));
// function check(age){
//     if(age<=12){
//            console.log("your ticket price is 5.");
//     }else if(age<=18 && age>=12){
//         console.log("your ticket price is 10");
//     }else if(age<=60 && age>=18){
//         console.log("your ticket price is 20.");
//     }else if(age>=60){
//         console.log("ticket price is 15.");
//     }
// }

// check(age);


//leap year:
// var year =prompt("enter the current years:");
// if(year%4===0&&(year%100!==0||year%400===0)){
//     console.log(year+" is a leap year.");
// }else{
//     console.log(year+" is not leap year.");
// }


// let purchaseamnt=prompt("enter the amount: ");

// function check(purchaseamnt){
//     let discount;
//     if(purchaseamnt>=100){
//          discount=20;
//     }else if(purchaseamnt>=50 && purchaseamnt<100){
//         discount=10;
//     }
//     else{
//         discount=0;
//     }
//     console.log("Discount: "+discount);
// }

// check(purchaseamnt);


//greet based on time:
// var currentdate= new Date();
// var currtime=currentdate.getHours();
// function check(currtime){
//     if(currtime<=12){
//         console.log("good mornign user!");
//     }else if(currtime>=12 && currtime<=16){
//         console.log("good afternoon user!");
//     }else if(currtime>=16 &&currtime<=19){
//         console.log("good evening");
//     }else if(currtime>19 && currtime <=4){
//         console.log("good night user!")
//     }
// }

// check(currtime);


//bmi:
// let weight=prompt("enter your weight: ");
// let height=prompt("enter your height: ");
// let BMI=weight/(height*height);
// let category;
// function check(BMI){
//     if(BMI<=18.5){
//        category = "Underweight";
//     }else if(BMI<=24.9){
//         category = "Normal weight";
//     }else if(BMI<=29.9){
//         category = "Overweight";
//     }else{
//         category="OBESE";
//     }
//    console.log("BMI: "+BMI.toFixed(2));//tofixed(2) limits the number of decimal to 2;
// console.log("Category: "+category);
// }
 
// check(BMI);



var guessnum=prompt("enter the number: ")
var truenum=6;
if(guessnum==truenum){
    console.log("congo! you won.")
}else if(guessnum<truenum){
    console.log("think heigher!");
}else {
    console.log("think lower");
}


// let num=1
// while(num<=10){
//     console.log(num);
//     num++;
// }

//sum first n natural number:
// let end=50;
// let start=0;
// let sum=0;
// while (start<=end){
//     sum+=start;
//     start++;
// }
// console.log(sum);

//const prompt = require('prompt-sync')(); 
//factorial:
// let n=prompt("enter the num: ");
// function factorial(n){
//     if(n===0||n===1){
//       return 1;
//     }
//     let result=1;
//     let i=1;
//     while(i<=n){
//         result*=i;
//         i++;
//     }
//     console.log(result);
// }

// factorial(n);

// let n=prompt("enter the num: ");
// function factorial(n){
//     if(n===0||n===1){
//         return 1;
//     }
//     let result=1;
//     let i=1;
//     while(i<=n){
//        result*=i;
//        i++;
//     }
//     console.log(result);
// }
// factorial(n);

// function fibonacci(num){
//     if(num===1){
//         return 0;
//     }
//     if(num===2){
//         return 1;
//     }
//     let num1=0;
//     let num2=1;
//     let sum;
//     let i=2;
//     while(i<num){
//         sum=num1+num2;
//         num1=num2;
//         num2=sum;
//         i+=1;
//     }
//     return num2;
// }

// console.log("Fibonacci(5): " + fibonacci(15));
// console.log("Fibonacci(8): " + fibonacci(18));


// function fib(num){
//     if(num===1){
//         return 0;
//     }
//     if(num===1){
//         return 1;
//     }

//     let num1=0;
//     let num2=1;
//     let sum;
//     let i=2;
//     while(i<sum){
//         sum=num1+num2;
//         num1=num2;
//         i+=1;
//     }
//     return num2;
// }

// const n=10;
// let n1=0;
// let n2=1;
// let count=1;
// let nextterm;
// while(count<=n){
//    nextterm=n1+n2;
//    n1=n2;
//    n2=nextterm;
//    count++;
// }




//reverse
// let num=prompt("enter the nume");
// let revnum=0;
// while(num>0){
//     const lastdigit=num%10;
//     revnum=((revnum*10)+lastdigit);
//     num=Math.floor(num/10);
// }

// console.log(revnum);


// let num=prompt("enter the num: ");
// let revnum=0;
// while(num>0){
//     const lastdigit=num%10;
//     revnum=((revnum*10)+lastdigit);
//     num=Math.floor(num/10);
// }
// console.log(revnum);

// let num=prompt("enter the num: ");
// let revnum=0;
// while(num>0){
//     const lastdigit=num%10;
//     revnum=((revnum*10)+lastdigit);
//     num=Math.floor(num/10);
// }


let num=prompt("enter num");
let revnum=0;
while(num>=0){
    let lastdigit=num%10;
    revnum=((revnum*10)+lastdigit);
    num=Math.floor(num/10);
}