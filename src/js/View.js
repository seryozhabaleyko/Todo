

class View {
    constructor() {
        this.app = this.getElement('#app')

        this.header = this.createElement('div', 'header')

        this.title = this.createElement('h1', 'todo-title')
        this.title.textContent = 'Todos'

        this.form = this.createElement('form', 'todo-form')

        this.input = this.createElement('input', 'todo-input')
        this.input.type = 'text'
        this.input.placeholder = 'add todo'
        this.input.name = 'todo'

        this.submitButton = this.createElement('button', 'todo-btn')
        this.submitButton.textContent = 'Добавить'

        this.todoList = this.createElement('ul', 'todo-list')

        this.form.append(this.input, this.submitButton)

        this.header.append(this.title, this.form)

        this.app.append(this.header, this.todoList)

        this._temporaryTodoText
        this._initLocalListeners()
    }


    // Обновить временное состояние
    _initLocalListeners() {
        this.todoList.addEventListener('input', event => {
            if (event.target.className === 'editable') {
                this._temporaryTodoText = event.target.innerText
            }
        })
    }

    displayTodos(todos) {
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }

        if (todos.length === 0) {
            const p = this.createElement('p')
            p.textContent = 'Нечего делать! Добавить задачу?'
            this.todoList.append(p)
        } else {
            todos.forEach(todo => {
                const li = this.createElement('li', 'todo-item')
                li.id = todo.id

                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.completed

                const span = this.createElement('span', 'todo-item-text')
                span.contentEditable = true
                span.classList.add('editable')

                if (todo.completed) {
                    const strike = this.createElement('s')
                    strike.textContent = todo.title
                    span.append(strike)
                } else {
                    span.textContent = todo.title
                }

                const deleteButton = this.createElement('button', 'delete')
                deleteButton.textContent = 'удалить'
                li.append(checkbox, span, deleteButton)

                this.todoList.append(li)
            })
        }
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }

    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault()

            if (this._todoText) {
                handler(this._todoText)
                this._resetInput()
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id)
                handler(id)
            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id)
                handler(id)
            }
        })
    }

    bindEditTodo(handler) {
        this.todoList.addEventListener('focusout', event => {
            if (this._temporaryTodoText) {
                const id = parseInt(event.target.parentElement.id)

                handler(id, this._temporaryTodoText)
                this._temporaryTodoText = ''
            }
        })
    }
}

export default View;