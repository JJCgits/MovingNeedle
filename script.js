let turn = 0;
function alertPerson(){
    let name = prompt("What's your name?");
    alert("Hello " + name + ", welcome to my website about PTSD :) . (This is my first time programming a website on my own, so the website might look a little bad)")
    turn += 1;
    //return(name);
    
}
function changeColor(element){
    element.style.color = "red";
}

function main(){
   
    alertPerson();
    

}
main();