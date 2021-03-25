'use strict';

const cancelTaskElement = document.querySelector('.cancel-checkbox');
const taskTextElement = document.querySelector('.task-text');

const addTaskBtn = document.querySelector('.add-task-btn');
const taskContainer = document.querySelector('.task-container');
const addTaskText = document.querySelector('.add-task');
const taskText = document.querySelector('.task-text');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//Complete task
taskContainer.addEventListener('click', function(e){
let item = e.target;
// alert('ok');
if(item.classList.contains('cancel-checkbox'))
item.parentElement.lastElementChild.classList.toggle('cancel')

// else if(!item.classList.contains('cancel-checkbox'))
// item.parentElement.classList.remove('cancel')

else if(item.classList.contains('task-delete-btn')){
item.parentElement.remove();
}
else if(item.classList.contains('task-edit-btn')){
    // item.parentElement.classList.remove();
    editTaskModal();

    }
})



const editTaskModal = () => {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden')
}
// const createTask = (text) => {
//     const btnEl = document.querySelector('.add-task.btn-2');
//     const div = document.createElement('li');
//     div.classList.add('tasks');
//     taskContainer.appendChild(div);

//     const checkBox = document.createElement('input');
//     checkBox.setAttribute('type', 'checkbox');
//     checkBox.classList.add('cancel-checkbox');
//     div.appendChild(checkBox);

//     const span = document.createElement('span');
//     span.classList.add('task-text');
//     span.innerText = text;
//     div.appendChild(span);

//     document.querySelector('.add-task').value = '';
//     console.log(btnEl);

// }

// btnEl.addEventListener('click', function(){
//     alert('ok')
// })

addTaskText.onkeyup = () =>{
    if(addTaskText.value.length === 40 ){
        alert(`Please task can't be more than 40 characters`);
        addTaskText.focus();
    }
}

const createTask = () => {
    // alert(addTaskText.value.length);
    if(addTaskText.value.length === 0 ){
        alert('Please write a task')
        addTaskText.focus();
    }
    else if(addTaskText.value.length === 40 ){
        alert(`Please task can't be more than 40 characters`);
        addTaskText.focus();
    }
    else{
        const div = document.createElement('div');
        div.className = "tasks";
        div.innerHTML = `<input type="checkbox" class="cancel-checkbox" /> 
        <button class="task-edit-btn"><i class="fas fa-pencil-alt"></i></button> 
        <button type="button" class="task-delete-btn"></button>
        <span class="task-text">${addTaskText.value}</span>
        `;
    taskContainer.appendChild(div);
    addTaskText.value = '';
    addTaskText.focus();
    }
   
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

addTaskBtn.addEventListener('click', createTask)

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
})