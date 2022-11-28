var yes = 0;
var answered = 0;
function changeColor(element){
    element.style.color = "red";
    element.disable = true;
    if(element.className == "test+"){
        answered += 1;
        yes += 1;
        element.disabled = true;
        alert(yes);
    }
    else{
        answered += 1;
    }
}
function submitPressed(){
    if(yes >= 3){
        "results".innerHTML = "You most likely have PTSD"
    }
    else{
        "results".innerHTML = "You most likely do not have PTSD"
    }
}

function main(){
    
}
main()