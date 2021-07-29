const form = document.querySelector('#addForm');
const textInput = document.querySelector('#newItemText');
const deleteBtn = document.querySelector('button');


function addTodo(event) {
  event.preventDefault();
  let newTodo = textInput.value;
  const items = document.querySelector('#items');
  const item = `<li class="list-group-item">${newTodo} <button data-action="delete" type="button" class="btn btn-light btn-sm float-right">Удалить</button></li>`;


  if(!newTodo) {
    alert('Ошибка. Пустое поле')
  } else (
    alert('Задача добавлено')
  )


  items.insertAdjacentHTML('afterbegin', item);
}





form.addEventListener('submit', addTodo);

