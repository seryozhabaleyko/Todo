export default function Template() {
    /* const template = `
        <li data-id="${this.id}"${this.completed ? ' class="completed"' : ''}>
            <input class="toggle" type="checkbox" ${this.completed ? 'checked' : ''}>
            <label>${escapeForHTML(this.title)}</label>
		    <button class="destroy"></button>
        <li/>
    `; */

    return {
        todoList(items) {
            return items.reduce(function (accumulator, item) { return accumulator}, '');
        }
    }
}