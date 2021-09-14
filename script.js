
//var randomColor = Math.floor(Math.random()*16777215).toString(16); 
function populate_the_grid(){
    
    const parent = document.querySelector(".parent");

    for(let i=0;i<16;i++){
        for(let j=0;j<16;j++){  
            let new_div = document.createElement('div');
            new_div.addEventListener("mouseenter",function(){
                randomColor(new_div);
            })
            parent.appendChild(new_div);
        }
    }
}

function randomColor(div){
    div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

populate_the_grid();