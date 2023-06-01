const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarContato();
    atualizaTabela();
});

function adicionarContato(){
    const nome = document.getElementById('add-nome');
    const telefone = document.getElementById('add-fone');

    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `<td><img src="./images/excluir.png" alt="Excluir" class="btn-excluir"><img src="./images/editar.png" alt="Editar" class="btn-editar"></td>`;
    linha += '</tr>';

    linhas += linha;

    nome.value = '';
    telefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    const excluir = document.querySelectorAll('.btn-excluir');
    excluir.forEach(btn => {
        btn.addEventListener('click', function() {
            const linha = btn.parentNode.parentNode;
            excluirContato(linha);
            atualizaTabela();
        });
    });

    const editar = document.querySelectorAll('.btn-editar');
    editar.forEach(btn => {
        btn.addEventListener('click', function() {
            const linha = btn.parentNode.parentNode;
            editarContato(linha);
        });
    });
}

function excluirContato(linha) {
    //ainda sem implementação
}

function editarContato(linha) {
    //ainda sem implementação
}
