const areaCodigo = document.querySelector('.area');

const linguaguem = document.querySelector('#seletor');

const botao = document.querySelector('.visualizar');

function mudaLinguagem() {
    const codigo = areaCodigo.querySelector('code');
    areaCodigo.innerHTML = `<code class="preview hljs ${linguaguem.value}" contenteditable="true" aria-label="editor"></code>`;
    areaCodigo.firstChild.innerText = codigo.innerText;
}

linguaguem.addEventListener('change', () => {
    mudaLinguagem();
});

botao.addEventListener('click', ()=> {
    const codigo = areaCodigo.querySelector('code');
    hljs.highlightBlock(codigo);
})


