export default class Storage {
    constructor(name){
        this._dbName = name;
        if(!localStorage[name]){
            let data = {
                todos: []
            };
            localStorage[name] = JSON.stringify(data);
        }
    }

    findAll(callback = function(){}){
        callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
    }

    save(updateData, id, callback = function(){}){
        let data = JSON.parse(localStorage[this._dbName]);
        let todos = data.todos;

        if(id){
            for(var i = 0; i < todos.length; i++){
                if(todos[i].id === id){
                    for(var key in updateData){
                        todos[i][key] = updateData[key];
                    }
                    break;
                }
            }
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, todos);
        } else {
            updateData.id = new Date().getTime();

            todos.push(updateData);
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, [updateData]);
        }
    }

    remove(id, callback){
        let data = JSON.parse(localStorage[this._dbName]);
        let todos = data.todos;

        for(var i = 0; i < todos.length; i++){
            if(todos[i].id === id){
                todos.splice(i, 1);
                break;
            }
        }
        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, todos);
    }
}
