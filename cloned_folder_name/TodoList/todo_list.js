const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');
const clearCompletedBtn = document.querySelector('#clearCompletedBtn');
const clearAllTask = document.querySelector('#clearAllTasks')

let tasks = [];
console.log(taskInput.value)
console.log(tasks)

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    tasks = tasks.filter(task => !task);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearAllTask.addEventListener("click", clearAllTasks);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
