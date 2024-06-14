// const ur="n";
// (async function https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json{
//     let api=await fetch(url);
//     console.log(api);
//     let jso=await api.json();
//     console.log(jso);
// })();

let dropdowns=document.querySelectorAll(".dropdown select");
let fromcount=document.querySelector(".from select");
let tocount=document.querySelector(".to select");
country=[];
for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }

  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };

 let but=document.getElementById("but");
 let textcon=document.getElementById("textcon");

 

 

 let mainbhai=async (evt)=>{
    
    let input=document.getElementById("input");
    let inputvalue=input.value;
    if(inputvalue==="" || inputvalue<1){
        inputvalue=1;
        inputvalue.value="1";
     }
    else if(inputvalue==="1"){
      console.log("chutiya ha kya");
    }
     
    const url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
    let from=fromcount.value;
    let fromlower=from.toLowerCase();
    console.log(fromlower);
    let lurl=`${url}/${fromlower}.json`;
    let finlvlue=await fetch(lurl);
    console.log(finlvlue);
    let f2=await finlvlue.json();
    console.log(f2);
    let to=tocount.value;
    console.log(to);
    let to2=to.toLowerCase();
    console.log(to2);

    let answer=((f2[fromlower][to2])*inputvalue);
    textcon.innerHTML=`${inputvalue}  ${from}=${answer}  ${to}`


  };

  but.addEventListener("click",(evt)=>{
    evt.preventDefault();
    mainbhai();
  });

  document.addEventListener("keydown",(event)=>{
     if(event.key==="Enter"){
      event.preventDefault();
      mainbhai();
     }
  }
  );