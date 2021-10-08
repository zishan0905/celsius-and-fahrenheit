let inp = document.querySelector("input")
let first = document.querySelector(".second__first1")
let first1 = document.querySelector(".second__first2")
let second= document.querySelector(".second__second1")
let second1 = document.querySelector(".second__second2")



function color(e){
e.preventDefault()
if(first.style.backgroundColor===""){
    first.style.backgroundColor="blue"
    if(first.style.backgroundColor==="blue"){
        second.style.backgroundColor="white"
    }
}
}

function color1(e){
    e.preventDefault()
    if(second.style.backgroundColor==="white"){
    second.style.backgroundColor="blue"
    if(second.style.backgroundColor==="blue"){
        first.style.backgroundColor="white"
        if(second.style.backgroundColor==="blue"){
            first.style.backgroundColor=""
        }
        (second.style.backgroundColor==="white")
            second.backgroundColor="blue"
        
    }}
    }
  

first1.onclick=color
second1.onclick=color1;