const todoList = document.querySelector(".todo-list");
key = 'todo-list'
const button = document.querySelector('button')
const input = document.querySelector('#new-todo')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = ({ text }) => 
        {const li = document.createElement('li')
        li.textContent = text
        todoList.append(li)}

todos.forEach(renderTodos)

button.addEventListener('click', () => {
    todoList.innerHTML = ' '
    todos.push({ text: input.value, completed: false })
    todos.forEach(renderTodos)
    localStorage.setItem(key, JSON.stringify(todos))
})



