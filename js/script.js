'use strict';

class Todo {
	constructor(form, input, todoList, todoCompleted, todoContainer) {
		this.form = document.querySelector(form);
		this.input = document.querySelector(input);
		this.todoList = document.querySelector(todoList);
		this.todoCompleted = document.querySelector(todoCompleted);
		this.todoContainer = document.querySelector(todoContainer);
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
		if (todo.completed) {
			this.todoCompleted.append(li);
		} else {
			this.todoList.append(li);
		}
	}

	addTodo(e) {
		e.preventDefault();
		if (this.input.value.trim()) {
			const newTodo = {
				value: this.input.value,
				completed: false,
				key: this.generateKey(),
			};
			this.todoData.set(newTodo.key, newTodo);
			this.render();
			this.input.value = '';
		} else { alert('Введите текст') }
	}
	generateKey() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	}

	deleteItem(target) {
		const key = target.closest('.todo-item').key;
		this.todoData.delete(key);
		this.render();
	}

	completedItem(target) {
		const key = target.closest('.todo-item').key;
		const findKey = this.todoData.get(key);
		findKey.completed = !findKey.completed;
		this.render();
	}


	editItem() {
		const parent = target.closest('.todo-item');
		const key = parent.key;
		const findKey = this.todoData.get(key);
		const textTodo = parent.querySelector('.text-todo');

		textTodo.setAttribute('contenteditable', 'true');
		textTodo.focus();
		textTodo.onblur = () => {
			findKey.value = textTodo.textContent;
			this.addToStorage();
		};
	}
		handler = (e) => {
			let target = e.target;
			const complete = target.closest('.todo-complete');
			const remove = target.closest('.todo-remove');
			const edit = target.closest('.todo-edit');
			if (complete) this.completedItem(target);
			else if (remove) this.deleteItem(target);
			else if (edit) this.editItem(target);
			else return;
		}

		init() {
			this.form.addEventListener('submit', this.addTodo.bind(this));
			this.todoContainer.addEventListener('click', this.handler.bind(this));
			this.render();
		}
	}

	const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');

	todo.init();
