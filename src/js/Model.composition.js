import { getLocalStorage, setLocalStorage} from './store.js';

export default function Model() {
    let hash = getLocalStorage('todos');

    return {
        add(text) {
            const item = {
                id: hash.length > 0 ? hash[hash.length - 1].id + 1 : 1, // Date.now()
                title: text,
                completed: false
            }

            hash.push(item);
            setLocalStorage('todos', hash);
        },
        edit(id, text) {
            hash = hash.map(item => item.id === id ? { id: item.id, title: text, completed: item.completed } : item)
            setLocalStorage('todos', hash);
        },
        toggle(id) {
            hash = hash.map(item => item.id === id ? { id: item.id, title: item.title, completed: !item.completed } : item)
            setLocalStorage('todos', hash);
        },
        delete(id) {
            hash = hash.filter(item => item.id !== id);

            setLocalStorage('todos', hash);
        }
    }
}

const model = Model();

model.add('Привет, я Сережа!!!');
model.edit(1, 'выфвфывфывфывыфвфывфы');
model.toggle(1);
model.delete(2);