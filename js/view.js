export default class View {
    constructor(template) {
        this.template = template;

        this.$todoList = document.getElementById('todo-list');
        this.$newTodo = document.getElementById('new-todo');
    }

    render(viewCmd, data){
        let viewCommands = {
            showEntries : () => {
                this._addItem(data);
            },
            clearNewTodo : () => {
                this.$newTodo.value = '';
            },
            removeItem : () => {
                this._removeItem(data);
            }
        };
        viewCommands[viewCmd]();
    }

    bind(event, handler){
        if(event === 'newTodo'){
            let temp = this.$newTodo;
            temp.addEventListener('change', () => {
                handler(this.$newTodo.value);
            });
        } else if(event === 'itemRemove'){
            let todo = this.$todoList;
            todo.addEventListener('click', (event) => {
                let target = event.target;
                if(target.className === 'destroy'){
                    handler({id:this._getItemId(target.parentNode, 'li')});
                }
            });

        }
    }

    _addItem(id){
        this.$todoList.innerHTML = this.template.insert(id);
    }

    _removeItem(id){
        let elem = document.querySelector('[data-id="' + id + '"]');
        if(elem){
            this.$todoList.removeChild(elem);
        }
    }

    _getItemId(element, tagName){
        let li;
        if(element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()){
            li = element.parentNode;
        }
        return parseInt(li.dataset.id, 10);
    }
}