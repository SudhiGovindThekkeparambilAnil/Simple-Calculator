const display = document.getElementById("display");

function appendtodisplay(data){
    display.value += data;
}

function cleardisplay()
{
    display.value="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value="invalid";
    }
}

function cancel(){
    display.value=display.value.slice(0,-1);
}