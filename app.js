document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    let todos = [];

    usernameInput.addEventListener('change', loadTodos);
    addTodoButton.addEventListener('click', addTodo);
    newTodoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
     
        
    
    });

    function loadTodos() {
        const username = usernameInput.value.trim();
        if (!username) return;


    function saveTodos() {
        const username = usernameInput.value.trim();
        if (!username) return;

        localStorage.setItem(username, JSON.stringify(todos));
    }

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.classList.add('todo-item');
            li.innerHTML = `
                <span>${todo}</span>
                <button onclick="removeTodo(${index})">X</button>
            `;
            todoList.appendChild(li);
        });
    }

    function addTodo() {
        const todoText = newTodoInput.value.trim();
        if (!todoText) return;

        todos.push(todoText);
        newTodoInput.value = '';
        saveTodos();
        renderTodos();
    }

    window.removeTodo = function (index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    };
});







