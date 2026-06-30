let requisicao = new XMLHttpRequest();
let url = '/cloned_folder_name/healthArticle/atividade_coursera/atv.json'

requisicao.open('GET', url, true);
requisicao.responseType = 'json';

requisicao.onload = function(){
    let dados2 = requisicao.response.usuario;
    let dados = requisicao.response.topicos;
    let saidaJson = document.querySelector('#saidaJson');
    let formatacaoDivUsuario = document.createElement('div')
    formatacaoDivUsuario.classList.add('usuario');
    

    let usuario = document.createElement('h2');
    usuario.textContent = "Nome do Aluno: " + dados2.nome;

    formatacaoDivUsuario.appendChild(usuario);
    saidaJson.appendChild(formatacaoDivUsuario);


    dados.forEach(function(dado){
        let formatacaoDiv = document.createElement('div');
        formatacaoDiv.classList.add('topicos');

        let titlo = document.createElement('h3');
        titlo.textContent = dado.materia;

        formatacaoDiv.appendChild(titlo);
        saidaJson.appendChild(formatacaoDiv);
    })

};

requisicao.send();