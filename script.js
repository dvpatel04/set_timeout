let btn = document.querySelector(".cl");
let login = document.querySelector(".login");

let n = document.querySelector(".new")
let me = document.querySelector(".me")
let msg = document.querySelector(".msg")

let arr = ["Login Succesful","new email","Meeting in 10 miniutes","New Messeage"]
let i = 0;
btn.addEventListener("click",()=>{
    for(let i = 0;i<4;i++){
        setTimeout(() => {
          alert(arr[i])
          }, 2000 * i);
    }
})
