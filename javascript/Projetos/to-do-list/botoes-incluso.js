
const btnAddTask = document.getElementById('btn-add-task');
const tBody = document.getElementById('list-task');

btnAddTask.addEventListener('click', function () {
  const inputTask = document.getElementById('input-task');
  const tr = document.createElement('tr');
  const taskTd = document.createElement('td');
  const actionsTd = document.createElement('td');
 

  tr.appendChild(taskTd);
  tr.appendChild(actionsTd);
  tBody.appendChild(tr);

  console.log(tBody);
});



// ================================
// ADICIONAR TAREFA
// ================================

btnAddTask.addEventListener('click', function () {

    const inputTask = document.getElementById('input-task');

    // Verifica se o campo está vazio
    if (inputTask.value.trim() === '') {
        alert('Digite uma tarefa!');
        return;
    }

    // Cria a linha
    const tr = document.createElement('tr');

    // Cria as células
    const taskTd = document.createElement('td');
    const actionsTd = document.createElement('td');

    // Coloca o nome da tarefa
    taskTd.innerHTML = inputTask.value;

    // Centraliza os botões
    actionsTd.classList.add('text-center');


    // ================================
    // BOTÃO EDITAR
    // ================================

    const btnEdit = document.createElement('button');

    btnEdit.innerHTML = 'Editar';

    btnEdit.classList.add(
        'btn',
        'btn-primary',
        'btn-sm',
        'me-1'
    );


    // Função do botão Editar
    btnEdit.addEventListener('click', function () {

        const novaTarefa = prompt(
            'Digite a nova tarefa:',
            taskTd.innerText
        );

        if (novaTarefa !== null && novaTarefa.trim() !== '') {

            taskTd.innerText = novaTarefa;

        }

    });


    // ================================
    // BOTÃO CONCLUIR
    // ================================

    const btnConcluir = document.createElement('button');

    btnConcluir.innerHTML = 'Concluir';

    btnConcluir.classList.add(
        'btn',
        'btn-success',
        'btn-sm',
        'me-1'
    );


    // Função do botão Concluir
    btnConcluir.addEventListener('click', function () {

        taskTd.style.textDecoration = 'line-through';
        taskTd.style.color = 'gray';

        btnConcluir.disabled = true;

    });


    // ================================
    // BOTÃO REJEITAR
    // ================================

    const btnRejeitar = document.createElement('button');

    btnRejeitar.innerHTML = 'Rejeitar';

    btnRejeitar.classList.add(
        'btn',
        'btn-danger',
        'btn-sm'
    );


    // Função do botão Rejeitar
    btnRejeitar.addEventListener('click', function () {

        const confirmar = confirm(
            'Deseja rejeitar esta tarefa?'
        );

        if (confirmar) {

            tr.remove();

        }

    });


    // ================================
    // ADICIONA OS BOTÕES
    // ================================

    actionsTd.appendChild(btnEdit);
    actionsTd.appendChild(btnConcluir);
    actionsTd.appendChild(btnRejeitar);


    // ================================
    // MONTA A LINHA
    // ================================

    tr.appendChild(taskTd);
    tr.appendChild(actionsTd);

    tBody.appendChild(tr);


    // Limpa o campo
    inputTask.value = '';

    // Coloca o cursor novamente no input
    inputTask.focus();


    console.log(tBody);

});

