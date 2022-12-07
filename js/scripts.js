// função que adiciona tarefa
function addTask(){

    // titulo da tarefa
    var taskTitle = document.querySelector('#task-title').value;

    if(taskTitle){

        // clona template
        var template = document.querySelector('.template');

        var newTask = template.cloneNode(true);

        // adiciona titulo 

        newTask.querySelector('.task-title').textContent = taskTitle;

        // remover tasks desnecessárias

        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // adiciona tarefa na lista 
        var list = document.querySelector('#task-list')

        list.appendChild(newTask);

        // adicionar evento de remover tarefa
        var removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(e){
            removeTask(this);

        });

        //adicionar evento de completar tarefa
        var doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(e){

            completarTask(this);
        });

        //limpar texto
        document.querySelector('#task-title').value = '';

    }
}

// função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}


// função de completar tarefa
function completarTask(task){

    var taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}


// evento de adicionar tarefa
var addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e){

    e.preventDefault();

    addTask();

});