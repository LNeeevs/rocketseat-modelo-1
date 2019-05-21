var contLines = 0;

function coletaTodo(){
    //primeira funcao coleta o id do input
    var todoContent = document.querySelector('#entry-todo').value;

    //cria os elementos necessários para compor uma linha na tela
    var trElement = document.createElement('tr');
    var tdElementA = document.createElement('td');
    var tdElementB = document.createElement('td');
    var thElement = document.createElement('th');
    var btnDel = document.createElement('a');
    var labelBtn = document.createTextNode('Excluir');
    var txtElement = document.createTextNode(todoContent);

    //aumenta o numero de linhas
    contLines++;
    var contElement = document.createTextNode(contLines);

    //botao para deletar
    btnDel.appendChild(labelBtn);

    //criar o evento por click dentro do botão
    btnDel.addEventListener('click', deleteTodo);

    //salvar o texto dentro do elemento na posição correta
    thElement.appendChild(contElement);
    tdElementA.appendChild(txtElement);
    tdElementB.appendChild(btnDel);
    trElement.appendChild(thElement);
    trElement.appendChild(tdElementA);   
    trElement.appendChild(tdElementB);

    //cria uma nova linha com os elementos necessários
    var tabelElement = document.querySelector('#tabela');

    //adiciona o conteúdo mesclado na tabela
    tabelElement.appendChild(trElement);

    var pos = tabelElement.indexOf(trElement);
    alert(pos);

    //salvar o conteúdo
    saveToLocalStorage();

    function deleteTodo(){
        tabelElement.removeChild(trElement);
        saveToLocalStorage();
        //fazer o número de rows zerar ou deixar continuar?
    }
}

function saveToLocalStorage(){
    localStorage.setItem('list-Todos', JSON.stringify(trElement));
}








