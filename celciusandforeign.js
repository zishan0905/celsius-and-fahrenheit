let inp = document.querySelector("input")
let first = document.querySelector(".second__first1")
let first1 = document.querySelector(".second__first2")
let second= document.querySelector(".second__second1")
let second1 = document.querySelector(".second__second2")
let butt = document.querySelector("#but")
let para = document.querySelector(".res")
let result =document.querySelector("h4")



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
    if(second.style.backgroundColor===""){
        second.style.backgroundColor="blue"
    }
    else if(second.style.backgroundColor==="white"){
    second.style.backgroundColor="blue"
    if(second.style.backgroundColor==="blue"){
        first.style.backgroundColor="white"
        if(second.style.backgroundColor==="blue"){
            first.style.backgroundColor=""
        }
        
    }}
    }
//     function check(){
// if(inp.value===""){
//     window.alert("fill the box")
// }
// else{
//     continue
// }}

    function cli(){
        result.innerText=""
       
       if(first.style.backgroundColor==="blue"){
            let inpt=inp.value
            let m =(inpt*9/5)+32
            result.append(inpt+" " +"celsius"+" "+"or"+" "+m+" "+"fahrehiet"+"."+" "+"The degree Celsius is a unit of temperature on the Celsius scale,[1] a temperature scale originally known as the centigrade scale.[2] The degree Celsius (symbol: °C) can refer to a specific temperature on the Celsius scale or a unit to indicate a difference or range between two temperatures."+" "+"It is named after the Swedish astronomer Anders Celsius (1701–1744), who developed a similar temperature scale. Before being renamed to honor Anders Celsius in 1948, the unit was called centigrade, from the Latin centum, which means 100, and gradus, which means steps.")
            
        }else if(second.style.backgroundColor==="blue"){
           result.innerText=""
           let inpt=inp.value
           let l =(inpt-32)*5/9
            result.append(inpt+" " +"fahrenhiet"+" "+"or"+" "+l+" "+"celsius"+"."+" "+"The Fahrenheit scale measures temperatures in degrees Fahrenheit (°F). In this system, water freezes at 32°F and boils at 212°F. This scale used to be common around the world, but now it is mostly used in the US.Fahrenheit had based his invention on Danish scientist Ole Roemer's alcohol-based thermometer. Roemer labeled his temperature scale with zero marked at the temperature where brine (salt water) froze and 60 as the point at which water boiled, wrote Ulrich Grigull, the late director of the Institute for Thermodynamics at the Technical University of Munich in Germany,")
            
        }
        
    }
    


first1.onclick=color
second1.onclick=color1;
butt.onclick=cli
console.log("hello")

