var btn1=document.querySelector("#btn1");
var kutu=document.querySelector("#kutu");
var s = 0;
        
btn1.onclick=function(){
                var kirmizi=Math.floor(Math.random()*255);
    var yesil=Math.floor(Math.random()*255);
    var mavi=Math.floor(Math.random()*255);
    
    var renk=`rgb(${kirmizi} ,${yesil}, ${mavi})`;
    
    kutu.style.background=renk;

    deger= document.getElementById("kutu");
   deger.value=s;
   s++;

  
  }