import Controller from './Controller.js';
import Model from './Model.js';
import View from './View.js';

const model = new Model();
const view = new View();

const app = new Controller(model, view);