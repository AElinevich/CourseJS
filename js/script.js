'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
        
    }

    addToStorage() {
        localStorage.setItem('todoList', JSON.stringify([...this.todoData]));
    }

    render() {
        this.todoList.textContent = ' ';
        this.todoCompleted.textContent = ' ';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage()
    }

    createItem(todo) {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key;
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
                <div class="todo-buttons">
                    <button class="todo-edit"></button>
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
        `);

        if(todo.completed) {
            this.todoCompleted.append(li);
            
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();
     
        if(this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
            this.input.value = '';
        } else {alert('Введите текст')}
    }
    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
   
    deleteItem() {
        let todoItem = document.querySelector('.todo-item');
        todoItem.parentNode.removeChild(todoItem);

    }

    completedItem() {
        todo.completed = true;
        this.createItem(this);

    }
    editItem() {
       const todoEdit = document.querySelectorAll('.todo-edit');
        todoEdit.forEach(function (elem){
            elem.addEventListener('click', function func(){
                let todoItem = document.querySelector('.todo-item');
                let input = document.createElement('input');
                input.value = todoItem.innerText;
                todoItem.innerHTML = '';
                todoItem.appendChild(input);

                input.addEventListener('blur', function (){
                    todoItem.innerText = input.value;
                });
                elem.removeEventListener('click', func)
            })
        })
    }
    handler = ()=> {
        let todoContainer = document.querySelector('.todo-container');
        todoContainer.addEventListener('click', (event) => {
            event.preventDefault(); 
            let target = event.target;
            if(target.classList.contains('todo-remove')) {
             this.deleteItem()
            } 
            if(target.classList.contains('todo-complete')){
             this.completedItem();
            }
            if(target.classList.contains('todo-edit')) {
                this.editItem()
               } 
    
    })
    }

    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}


const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();