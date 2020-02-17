export const getLocalStorage = (name) => 
    JSON.parse(window.localStorage.getItem(name) || []);
    
export const setLocalStorage = (name, keyValue) => 
    window.localStorage.setItem(name, JSON.stringify(keyValue)
);


function store() {

    return {
        update(update) {
            const id = update.id;
            const todos = getLocalStorage('todos');
        }
    }
}