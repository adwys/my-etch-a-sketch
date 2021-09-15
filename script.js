
class mode{
    set change_mode(mode){
        this.mode =mode;
    }

    get get_mode(){
        return this.mode;
    }
}


function populate_the_grid(x){
    clear_board();
    const parent = document.querySelector(".parent");
    parent.style.display = "";
    let repeat_string  = "repeat("+ x +",1fr);"
    console.log(repeat_string);
    parent.style.cssText  = "grid-template-columns:"+  repeat_string;

    for(let i=0;i<x;i++){
        for(let j=0;j<x;j++){  
            let new_div = document.createElement('div');
            new_div.classList.add("square");
            new_div.addEventListener("mouseenter",function(){
                Color_div(new_div);
            })
            parent.appendChild(new_div);
        }
    }
}

function clear_board(){
    let elements = document.getElementsByClassName("square");
    while(elements.length > 1){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function Color_div(div){
    if(mode.get_mode == "rainbow")
        div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    else{
        div.style.backgroundColor = document.getElementById("color").value
    }
}

function rainbow_color(){
    mode.change_mode = "rainbow";
}

function single_color(){
    mode.change_mode = "simple";
}

mode = new mode();
mode.change_mode = "simple";
console.log(mode.mode);
populate_the_grid(16);