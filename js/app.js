import Storage from './storage.js';
import Model from './model.js';
import Template from './template.js';
import View from './view.js';
import Controller from './controller.js';

class App{
    constructor() {
        this.storage = new Storage();
        this.model = new Model(this.storage);
        this.template = new Template();
        this.view = new View(this.template);
        this.controller = new Controller(this.model, this.view);
    }
}
new App();