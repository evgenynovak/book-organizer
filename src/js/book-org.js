
const bookForm = document.querySelector('.book-form');
const bookFormAdd = document.querySelector('.book-form__add');
const bookList = document.querySelector('.book-list'); 
const bookListItems = document.querySelectorAll('.book-list__item');

function addBookListItem(event){
  event.preventDefault();
  const bookListItem = createListItem(bookFormAdd.value);
  bookList.appendChild(bookListItem);
  bookFormAdd.value = '';
};

function createListItem(bookName){

  const ListItem = document.createElement('li');
  ListItem.className = 'book-list__item';
  
  const bookListTitle = document.createElement('label');
  bookListTitle.innerText = bookName;
  bookListTitle.className = 'book-list__title';

  const buttonEdit =  document.createElement('button');
  buttonEdit.innerText = 'Изменить';
  buttonEdit.className = 'book-list__button book-list__button_edit';

  const buttonDelete =  document.createElement('button');
  buttonDelete.innerText = 'Удалить';
  buttonDelete.className = ' book-list__button book-list__button_delete';

  ListItem.appendChild(bookListTitle);
  ListItem.appendChild(buttonEdit);
  ListItem.appendChild(buttonDelete);
  
  return ListItem;
};


bookForm.addEventListener('submit', addBookListItem);





