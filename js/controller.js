export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bind('newTodo', (title) => {
            this.addItem(title);
        });

        this.view.bind('itemRemove', (item) => {
            this.removeItem(item.id);
        });

        this.showAll();
    }

    showAll(){
        this.model.read((data) => {
            this.view.render('showEntries', data);
        });
    }

    addItem(title){
        if(title.trim() === ''){
            return;
        }
        this.model.create(title, () => {
            this.view.render('clearNewTodo', title);
        });
        this.showAll();
    }

    removeItem(id){
        this.model.remove(id, () => {
            this.view.render('removeItem', id);
        });
    }
}