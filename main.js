const form = document.querySelector('#addForm');
const itemsList = document.querySelector('#items');
const textInput = document.querySelector('#newItemText');
const deleteBtn = document.querySelector('button');


// function addTodo(event) {
//   event.preventDefault();
//   let inputTodo = textInput.value;
//   const itemTodo = `<li class="list-group-item">${inputTodo} <button data-action="delete" type="button" class="btn btn-light btn-sm float-right">Удалить</button></li>`;


//   if(!inputTodo) {
//     alert('Ошибка. Пустое поле')
//   } else (
//     alert('Задача добавлено')
//   )


//   items.insertAdjacentHTML('afterbegin', itemTodo);
// }

function addTodo(event) {
  event.preventDefault();

  let inputTodo = textInput.value;
  let itemTodo = document.createElement('li');
  let btnDelete = document.createElement('button');

  itemTodo.appendChild(document.createTextNode(inputTodo));
  itemTodo.className = 'list-group-item';

  btnDelete.appendChild(document.createTextNode('Удалить'));
  btnDelete.className = 'btn btn-light btn-sm float-right';
  btnDelete.setAttribute('data-action', 'delete')

  itemTodo.appendChild(btnDelete);


  if(!inputTodo) {
    console.log('Ошибка ! Вы не ввели задачу');
    return false
  } else {
    console.log('Вы добавили задачу');
  }

  itemsList.insertAdjacentElement('afterbegin', itemTodo);
}




form.addEventListener('submit', addTodo);

