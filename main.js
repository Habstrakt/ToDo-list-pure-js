const form = document.querySelector('#addForm');
const textInput = document.querySelector('#newItemText');
const deleteBtn = document.querySelectorAll('button');

console.log(deleteBtn);

function addTodo(event) {
  event.preventDefault();
  console.log(textInput.value);
}



form.addEventListener('submit', addTodo);