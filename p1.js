let titleC = document.querySelector(".titleC");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let signUp = document.querySelector(".signUp");
let x = document.querySelector("#x");

setTimeout(function(){
    titleC.style.display = "none";
},1000);

setTimeout(function(){
    container2.style.display = "block";
},1000);

signUp.addEventListener("click",()=>{
   container3.style.display = "block";
      container3.classList.toggle("show");
});

x.addEventListener("click",()=>{//toogle
    container3.style.display = "block";
     container3.classList.toggle("hide");
});