document.querySelectorAll('.interatividade').forEach(selectHeart => {
    selectHeart.addEventListener('click', event => {
        const svg = selectHeart.querySelector('#like');
        svg.style.color = '#F65151';
  })
})

document.querySelectorAll('.interatividade').forEach(selectHeart => {
    selectHeart.addEventListener('dblclick', event => {
        const svg = selectHeart.querySelector('#like');
        svg.style.color = 'white';
  })
})

const listaProjetos = document.querySelector('.todos__projetos')

new function () {
    mostraProjetos()
}

function mostraProjetos() {
    if(localStorage.length <= 0) {
        return
    }
    let projetos = []
    for(let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        const cartao = criaCartao(projeto)
        listaProjetos.innerHTML += cartao
        const codigoHtml = listaProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function criaCartao(projeto) {
    const cartao = `
          <div class="caixa" data-id="${projeto.id}">
            <div class="caixa__grande">                 
                <div class="area">                                      
                    <code class="preview hljs ${projeto.detalhesDoProjeto.linguagem}" ></code> 
                </div>                                
            </div>

            <h2 class="titulo__projeto">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
            <p class="descricao__projeto">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
            <div class="icones_interacao">
                <div class="interatividade">
                    <i class="fas fa-comment icone"></i><p class="interatividade__numeros">9</p>
                    <i class="fas fa-heart icone" id="like"></i><p class="interatividade__numeros">9</p>
                </div>                                
                <img src="imagens/author.svg" alt="Foto do usuário" class="foto">
            </div>
        </div>
    `
    
    return cartao
}