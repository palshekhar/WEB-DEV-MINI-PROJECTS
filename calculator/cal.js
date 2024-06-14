let display=document.getElementById("input")
let but=document.querySelectorAll("button")
let s='';
let array=Array.from(but);
// console.log(s);


array.forEach(but => {
    but.addEventListener("click",(eve2) =>{
//        
         if(eve2.target.innerHTML=="BC"){
            backspace();
         }
         else if(eve2.target.innerHTML=="AC"){
            AC();
         }
         else if(eve2.target.innerHTML=="="){
            s=eval(s);;
            display.value=s;
         }
         
         else{
            s+=eve2.target.innerHTML;
            display.value=s;
         }
        
    })


   
})

function backspace(){
    s=s.substring(0,s.length-1);
    display.value=s;

}


function AC(){
    s='';
    display.value=s;

}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if(key==="Backspace"){
        backspace();
     }
     if(key==="Escape"){
         AC();
     }
    //  } if(key==="Backspace"){
    //     backspace();
    //  } if(key==="Backspace"){
    //     backspace();
    //  } if(key==="Backspace"){
    //     backspace();
    //  } if(key==="Backspace"){
    //     backspace();
    //  } if(key==="Backspace"){
    //     backspace();
    //  }


    });
