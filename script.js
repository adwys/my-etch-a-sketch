

function populate_the_grid(x){
    clear_board()
    const parent = document.querySelector(".parent");
    parent.style.display = ""
    let repeat_string  = "repeat("+ x +",1fr);"
    console.log(repeat_string);
    parent.style.cssText  = "grid-template-columns:"+  repeat_string;
    // parent.style.cssText   = "grid-template-rows:"+  repeat_string;

    for(let i=0;i<x;i++){
        for(let j=0;j<x;j++){  
            let new_div = document.createElement('div');
            new_div.classList.add("square");
            new_div.addEventListener("mouseenter",function(){
                randomColor(new_div);
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

function randomColor(div){
    div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

populate_the_grid(16);