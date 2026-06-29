let btn = document.querySelector(".cl");
let login = document.querySelector(".login");

let n = document.querySelector(".new")
let me = document.querySelector(".me")
let msg = document.querySelector(".msg")

let arr = [login,n,me,msg]
let i = 0;
btn.addEventListener("click",()=>{
    for(let i = 0;i<4;i++){
        setTimeout(() => {
          arr[i].style.visibility = "visible"
          }, 2000 * i);
    }
})
