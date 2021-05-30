function menuOnClick() {
    document.getElementById('menu__botao').classList.toggle('change');
    document.querySelector('.lista__menu_hamburguer').classList.toggle('change');
    document.querySelector('.lista__menu_hamburguer').classList.toggle('change__hamburguer');
}

var esconder = document.querySelector(".lupa_img");

esconder.addEventListener("click", function() {

    var pesquisa = document.querySelector(".cabecalho__nav_pesquisa");
    
  if(pesquisa.style.display === "none") {
        pesquisa.style.display = "flex";
    } else {
      pesquisa.style.display = "none";
  }
    
});

