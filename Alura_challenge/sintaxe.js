const areaCodigo = document.querySelector('.area');
const linguaguem = document.querySelector('#seletor');
const botao = document.querySelector('.visualizar');
const tituloProjeto = document.querySelector('.nome__projeto');
const descricaoProjeto = document.querySelector('#descricao__projeto');
const salvaProjeto= document.querySelector('.salva__projeto');


function mudaLinguagem() {
    const codigo = areaCodigo.querySelector('code').innerText;
    areaCodigo.innerHTML = `<code class="preview hljs ${linguaguem.value}" contenteditable="true" aria-label="editor"></code>`;
    areaCodigo.firstChild.innerText = codigo;
}

linguaguem.addEventListener('change', () => {
    mudaLinguagem();
});

botao.addEventListener('click', ()=> {
    const codigo = areaCodigo.querySelector('code');
    hljs.highlightBlock(codigo);
});

salvaProjeto.addEventListener('click', () => {
    if (typeof(Storage) !== "undefined") {
        console.log('Yay, support!');
        const projeto = montaProjeto();
        salvaLocalStorage(projeto);
    } else {
        console.log('Nay, no support!');
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguaguem.value,
            'codigo': areaCodigo.querySelector('code').innerText
        }
    }
    return projeto
}

let numeroId = 1

if(localStorage.length > 0) {
    numeroId = localStorage.length;
}

function atribuiId() {
    if(localStorage.length == 0) {
        return 0
    } else {
        if(localStorage.length == numeroId) {
            let novoId = numeroId;
            numeroId++;
            return novoId;
        }
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson));
}



