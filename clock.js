const time=document.querySelector('.box');
time.style.fontSize="50px";
time.style.fontWeight="bold";
time.style.color="green"
// const clock=document.querySelector('#button')
// clock.addEventListener('click',function(e){
    
// })

setInterval(function(){
    let date=new Date();
    time.innerHTML=date.toLocaleTimeString()
},100)
