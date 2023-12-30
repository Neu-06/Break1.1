const button1 = document.getElementById("inicioB");
const semestre = document.getElementsByClassName("semestre2");
const nameMS = document.getElementsByClassName("nameSM");

function inicio(){
    setTimeout( function(){
      window.location.href = "../index.html";  
 
    },500)
}
button1.addEventListener("click", inicio);