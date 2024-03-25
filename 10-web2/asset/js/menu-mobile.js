document.addEventListener("DOMContentLoaded",(event)=>{
   //selecionar eventos principales
   let mobile_btn=document.querySelector(".navbar__mobile-btn");
   let mobile_menu=document.querySelector(".menu-mobile");
   //funcion mostrar y ocultar 
   const shadowHiddenMenu=() =>{
      let show=document.querySelector(".menu-mobile--show");
     if(show){
        mobile_menu.classList.remove("menu-mobile--show");
     }else{
        mobile_menu.classList.add("menu-mobile--show");
     }

   };
   //al dar click mostra menu de navegacion 

   console.log(mobile_btn,mobile_menu);
   mobile_btn.addEventListener("click",shadowHiddenMenu)
   //al rededimesionar la pantalla ocultar el menu si es necesario 
   window.addEventListener("resize",()=>{
      let window_width=parseInt(document.body.clientWidth);
      if(window_width >= 1000){
         mobile_menu.classList.remove("menu-mobile--show");

      }
   });
   //poder cerrar el menu si es necesario 
   let btn_close=document.querySelector(".menu-mobile__close");
   btn_close.addEventListener("click",shadowHiddenMenu);
   //submenus
   let menu_item = document.querySelectorAll(".menu-mobile__item");
   menu_item.forEach(item =>{

      item.addEventListener("click",(event)=>{
       let submenu=item.lastElementChild;
       
       if(submenu.className === "menu-mobile__submenu-mobile"){
         if (submenu.style.display ==="block"){
            submenu.style.display ="none"

         }else{
            submenu.style.display = "block"
         }


       }

      });

   });

})
