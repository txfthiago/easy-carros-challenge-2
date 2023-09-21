const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  console.log("menu clicked");

  if(menu.classList.contains("menu")){

    menu.classList.remove("menu");

    // Adiciona a nova classe
    menu.classList.add("menu-active");
  }else{
    menu.classList.remove("menu-active");

    // Adiciona a nova classe
    menu.classList.add("menu");

  }
 
});
