// Configurar Moment.js para usar el idioma español
moment.locale('es'); // Asegúrate de que esto esté antes de cualquier uso de Moment.js

// Selecciona elementos del DOM
const taskForm = document.getElementById("taskForm");
const taskNameInput = document.getElementById("taskName");
const taskPriorityInput = document.getElementById("taskPriority");
const altaList = document.getElementById("altaList");
const mediaList = document.getElementById("mediaList");
const bajaList = document.getElementById("bajaList");
const completedList = document.getElementById("completedList");

// Almacena las tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Evento para agregar tareas
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = {
    name: taskNameInput.value,
    priority: taskPriorityInput.value,
    completed: false,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  saveTasks();
  renderTasks();
  taskForm.reset();
});

// Renderiza las tareas en las columnas correspondientes
function renderTasks() {
  altaList.innerHTML = "";
  mediaList.innerHTML = "";
  bajaList.innerHTML = "";
  completedList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.setAttribute("data-id", task.id);

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    // Calcular el tiempo transcurrido desde la creación usando Moment.js en español
    const timeAgo = moment(task.createdAt).fromNow();

    // Contenido de cada tarea con tiempo transcurrido
    taskItem.innerHTML = `
      <span onclick="toggleTask(${task.id})">${task.name} <small>(${timeAgo})</small></span>
      <button onclick="toggleTask(${task.id})">${task.completed ? "↩️" : "✔️"}</button>
      <button onclick="deleteTask(${task.id})">X</button>
    `;

    if (task.completed) {
      completedList.appendChild(taskItem);
    } else if (task.priority === "alta") {
      altaList.appendChild(taskItem);
    } else if (task.priority === "media") {
      mediaList.appendChild(taskItem);
    } else if (task.priority === "baja") {
      bajaList.appendChild(taskItem);
    }
  });

  initDraggable();
}

// Configura Draggable.js para las listas de tareas
function initDraggable() {
  const containers = [altaList, mediaList, bajaList, completedList];
  const draggable = new Draggable.Draggable(containers, {
    draggable: '.task-item',
    delay: 0,
  });

  draggable.on('drag:stop', (event) => {
    const taskId = event.source.getAttribute('data-id');
    const newContainer = event.source.parentNode.id;
    updateTaskPriority(taskId, newContainer);
    saveTasks();
    renderTasks();
  });
}

// Actualiza la prioridad de la tarea según la columna a la que se arrastra
function updateTaskPriority(taskId, newContainerId) {
  const task = tasks.find((t) => t.id === parseInt(taskId));

  if (newContainerId === "completedList") {
    task.completed = true;
  } else {
    task.completed = false;
    if (newContainerId === "altaList") task.priority = "alta";
    if (newContainerId === "mediaList") task.priority = "media";
    if (newContainerId === "bajaList") task.priority = "baja";
  }
}

// Marca una tarea como completada o pendiente
function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

// Elimina una tarea
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  renderTasks();
}

// Guarda las tareas en localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Inicializa la aplicación
renderTasks();
