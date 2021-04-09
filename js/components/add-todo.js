import Alert from './alert.js';

export default class AddTodo {
  constructor() {
    this.btn = document.getElementById('add');
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
    this.price = document.getElementById('price');


    this.alert = new Alert('alert');
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (title.value === '' || description.value === '' ) {//|| price.value === ''
        this.alert.show('Complete los campos obligatorios');
      } else {
        this.alert.hide();
        callback(this.title.value, this.description.value, this.price.value);
      }
    }
  }
}
