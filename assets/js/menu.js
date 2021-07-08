function load(){
    let element = document.querySelector(".ResponsiveMenu");
    element.addEventListener('click',menu);
}

function menu() {
    let element = document.querySelector(".menu");

    if(element.style.display == 'flex'){
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}