window.addEventListener("load",function(){



let fecha = new Date();
document.getElementById("nacimiento").value = fecha.toJSON().slice(0,10);



})