const clock1 = document.querySelector("#clock")
setInterval(function(){
    let date =new Date()
    clock1.innerHTML=date.toLocaleTimeString();  
},1000)
