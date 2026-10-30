const passwordBox = document.getElementById("password");
const length= 8;


const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";


const allChars = upperCase+lowerCase+number;


function createpassword(){
    let password ="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copypassword(){
    passwordBox.ariaSelected();
    document.execCommand("copy")

}