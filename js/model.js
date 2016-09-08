export default class Model {
    constructor(storage) {
        this.storage = storage;
    }

    create(title = '', callback = function(){}){
        let newItem = {
            title: title.trim(),
            completed: false
        };
        this.storage.save(newItem, null ,callback);
    }

    read(callback){
        return this.storage.findAll(callback);
    }

    remove(id, callback){
        this.storage.remove(id, callback);
    }
}