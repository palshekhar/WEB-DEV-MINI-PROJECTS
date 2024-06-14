let main=document.getElementById("main");
var s=" ";
arr=[`https://i.pinimg.com/474x/14/e5/77/14e5770a3ed93ade21705f263e8ce69a.jpg`
,"https://i.pinimg.com/474x/3a/03/63/3a0363da919f21f41552ea64d7ffc54f.jpg","https://i.pinimg.com/474x/d3/44/c1/d344c11c648b51a0fa61ec452e6f55d8.jpg","https://i.pinimg.com/474x/ed/67/27/ed672793e3fe8eb2bce8b06fb755d9f7.jpg","https://i.pinimg.com/474x/17/b0/0d/17b00d1105e0d2871a0923174807a579.jpg","https://i.pinimg.com/474x/28/80/51/288051045f3cf662fee1bcec85499288.jpg"];

for (let index = 0; index < 54; index++) {
    var r=Math.floor(Math.random()*arr.length);
    s +=`<div id="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;





// https://i.pinimg.com/474x/ba/88/6c/ba886cc0f136216284121b15b933a59e.jpg

// https://in.pinterest.com/pin/19844054600913041/


// https://in.pinterest.com/pin/330240585193291242/

// https://in.pinterest.com/pin/1078541810735154895/

// https://in.pinterest.com/pin/268386459037066254/

// https://in.pinterest.com/pin/23784704270858742/