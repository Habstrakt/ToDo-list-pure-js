const form = document.querySelector('#addForm');
const itemsList = document.querySelector('#items');
const textInput = document.querySelector('#newItemText');
const searchInput = document.querySelector('#filter');


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
  textInput.value = '';
}

function deleteTodo(event) {
  if(event.target.getAttribute('data-action') === 'delete') {
    event.target.parentNode.remove();
  }
}

function searchTodo(event) {
  const searchText = event.target.value.toLowerCase();
  const todoLists = itemsList.querySelectorAll('li');

  todoLists.forEach(function(item) {
    let todoText = item.firstChild.textContent.toLowerCase();

    if(todoText.indexOf(searchText) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}






form.addEventListener('submit', addTodo);
itemsList.addEventListener('click', deleteTodo);
searchInput.addEventListener('keyup', searchTodo);


/*
1. Получаем фразу из поиска и переводим в нижний регистр.
2. Поиск
  а) получаем список всех задач
  б) перебераем циклом все найденые циклы li с задачами
  в) получаем текст задачи из списка и переводим его в нижний регистр
  г) проверяем вхоождение искомой подстроки в текст задачи
  если вхождение есть, показываем элемент с задачей, если вхождение нет, скрываем элемент с задачей
*/