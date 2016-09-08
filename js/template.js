export default class Template{
    constructor(){
        this.defaultTemplate =
            '<li data-id="{{id}}" class="{{completed}}">' +
                '<div class="view">' +
                    '<input class="toggle" type="checkbox" {{checked}}>' +
                    '<label>{{title}}</label>' +
                    '<button class="destroy"></button>' +
                '</div>' +
            '</li>';


    }

    insert(data){
        let view = '';
        for(var i = 0; i < data.length; i++){
            let template = this.defaultTemplate;
            let completed = '';
            let checked = '';

            if(data[i].completed){ //data[i].completed's default value = false
                completed = 'completed';
                checked = 'checked';
            }

            template = template.replace('{{id}}', data[i].id);
            template = template.replace('{{title}}', data[i].title);
            template = template.replace('{{completed}}', completed);
            template = template.replace('{{checked}}', checked);

            view = view + template;
        }
        return view;
    }
}