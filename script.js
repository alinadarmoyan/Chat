// let p = document.getElementById("pElement")
// function whenclicked(event) {
//     console.log(event);
//     p.innerText = "Yeeey clicked"
// }
// p.addEventListener("click", whenclicked)
// p.onclick = whenclicked

// let p = document.getElementById("pElement")
// let clickCount = 0
// function clicks(event) {
//     clickCount++
//     console.log(event);
//     p.innerText = clickCount
// }
// p.addEventListener("click", clicks)

function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
 
    function handleSubmit() {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    addEventListener("keyup", submited = (a) => {
        if(a.key === "Enter"){
            handleSubmit();
        }
    });

socket.on('display message', handleMessage);
} 

window.onload = main;