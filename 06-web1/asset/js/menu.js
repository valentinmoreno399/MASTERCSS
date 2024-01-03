document.addEventListener("DOMContentLoaded",(event) => {
    
    let button = document.querySelector(".layout__menu-toggle");
    let icon__bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let icon_marks = document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", (event) => {
        let visible = document.querySelector(".layout__aside--visible");
        if(!visible){
            aside.classList.add("layout__aside--visible");
            icon__bars.style.opacity=0;
            icon_marks.style.opacity=1;
        }else{
            aside.classList.remove("layout__aside--visible")
            icon__bars.style.opacity=1;
            icon_marks.style.opacity=0;
        }
    });
    /*el resize se utiliza para que vuelva a forma original la barra cuando le cambiambamos la medida*/
    window.addEventListener("resize",() => {
     let size = parseInt(document.body.clientWidth);

    if(size <= 1060){
        aside.classList.remove("layout__aside--visible");
        icon__bars.style.opacity=1;
        icon_marks.style.opacity=0;

    }
    });


});

