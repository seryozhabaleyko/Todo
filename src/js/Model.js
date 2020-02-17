class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || []
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    _commit(toods) {
        this.onTodoListChanged(toods)
        localStorage.setItem('todos', JSON.stringify(toods))
    }

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            title: todoText,
            completed: false,
        }

        this.todos.push(todo)

        this._commit(this.todos)
    }

    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, title: updatedText, completed: todo.completed } : todo
        )

        this._commit(this.todos)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)

        this._commit(this.todos)
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, title: todo.title, completed: !todo.completed } : todo
        )

        this._commit(this.todos)
    }
}

export default Model;