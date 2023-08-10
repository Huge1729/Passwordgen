let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let genbtn = document.getElementById("genbtn");
let copyicon = document.getElementById("copyicon");

slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', ()=>{
    slidervalue.textContent = inputslider.value;
});

genbtn.addEventListener('click', ()=>{
    passbox.value = genratepassword();
});


let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

function genratepassword(){
    let genpassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerchars : "";
    allchars += uppercase.checked ? upperchars : "";
    allchars += numbers.checked ? allnumbers : "";
    allchars += symbol.checked ? allsymbols : "";

    let i=1;
    while(i<=inputslider.value){
        genpassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }
   
    
    return genpassword;
}

copyicon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerHTML = "check";
        copyicon.title = "Password Copied";
        setTimeout(()=>{
         copyicon.innerHTML  = "content_copy"
         copyicon.title="";

        },3000);
    }
    
});