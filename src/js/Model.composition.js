import { getLocalStorage, setLocalStorage} from './store.js';

export default function Model() {
    let hash = getLocalStorage('todos');

    return {
        add(text) {
            const item = {
                id: hash.length > 0 ? hash[hash.length - 1].id + 1 : 1, // Date.now()
                text: text,
                complete: false
            }

            hash.push(item);
            setLocalStorage('todos', hash);
        },
        edit(id, text) {
            hash = hash.map(item => item.id === id ? { id: item.id, text: text, complete: item.complete } : item)
            setLocalStorage('todos', hash);
        },
        toggle(id) {
            hash = hash.map(item => item.id === id ? { id: item.id, text: item.text, complete: !item.complete } : item)
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