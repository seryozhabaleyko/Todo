import cr from './helpers.js';

function View() {

    const app = document.getElementById('app');

    const form = cr('form', 'form-todo');

    console.log(app);
    


    return {
        bindAdd() {
            
        },
    }
}

const view = View();