const passwordBox=document.getElementById("password");

const lenght=12;
 
const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXZ";
const lowercase= "abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="@#$%^&*()_+~|}{[]<>/-=!";
const allChars="@#$%^&*()_+~|}{[]<>/-=!1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXZ"

function createPassword(){
    let password = "";                                                                                          
    password+=uppercase[Math.floor(Math.random()* uppercase.length)];
    password+=lowercase[Math.floor(Math.random()* lowercase.length)];
    password+=number[Math.floor(Math.random()* number.length)];
    password+=symbol[Math.floor(Math.random()* symbol.length)];

    while(lenght > password.length){
        password+=allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password; 
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");

}


