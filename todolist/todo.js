let tasks = [];

function renderTasks() {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `
            <p><strong>${task.title}</strong></p>
            <p>${task.description}</p>
            <button onclick="completeTask(${task.id})">Completar</button>
            <button onclick="editTask(${task.id})">Editar</button>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;
        tasksContainer.appendChild(taskElement);
    }); 
}
function renderTasks() {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `
            <p><strong>${task.title}</strong></p>
            <p>${task.description}</p>
            <button onclick="completeTask(${task.id})" ${task.completed ? 'disabled' : ''}>Completar</button>
            <button onclick="editTask(${task.id})">Editar</button>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;

        if (task.completed) {
            taskElement.style.textDecoration = 'line-through';
        }

        tasksContainer.appendChild(taskElement);
    });
}

function completeTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        renderTasks();
    }
}


function addTask() {
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;

    if (title.trim() !== "") {
        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            completed: false
        };

        tasks.push(newTask);
        renderTasks();
        clearInputFields();
    }
}

function completeTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        renderTasks();
    }
}

function editTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        const newTitle = prompt("Nuevo título:", tasks[taskIndex].title);
        const newDescription = prompt("Nueva descripción:", tasks[taskIndex].description);

        if (newTitle !== null && newDescription !== null) {
            tasks[taskIndex].title = newTitle;
            tasks[taskIndex].description = newDescription;
            renderTasks();
        }
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

function clearInputFields() {
    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";
}

renderTasks();
