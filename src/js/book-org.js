
const bookForm = document.querySelector('.book-form');
const bookFormAdd = document.querySelector('.book-form__add');
const bookFormRadioInputs = document.querySelectorAll('.book-form__radio-input');
const bookList = document.querySelector('.book-list'); 
const bookListItems = document.querySelectorAll('.book-list__item');

function getTeg(allTegs) {
  bookTegs = document.createElement('span');
  bookTegs.className = 'book-list__tegs';
  for (let i = 0; i < allTegs.length ; i++) {
    if ( allTegs[i].checked ) {
      bookTeg = document.createElement('label');
      bookTeg.innerText = allTegs[i].value;
      bookTeg.className = 'book-list__teg teg';
      bookTegs.appendChild(bookTeg);
    }
  };
  
  return bookTegs
};

function addBookListItem(event){
  event.preventDefault();
  const bookListItem = createListItem(bookFormAdd.value, getTeg(bookFormRadioInputs));
  bookList.appendChild(bookListItem);
  // чистим форму
  bookFormAdd.value = '';
  for (let i = 0; i < bookFormRadioInputs.length ; i++) {
    bookFormRadioInputs[i].checked = false;
  };
};

function createListItem(bookName, tags){

  const ListItem = document.createElement('li');
  ListItem.className = 'book-list__item';
  
  const bookListTitle = document.createElement('label');
  bookListTitle.innerText = bookName;
  bookListTitle.className = 'book-list__title';

  const bookListTitleInput = document.createElement('input');
  bookListTitleInput.className = 'book-list__title-input';

  const buttonEdit =  document.createElement('button');
  buttonEdit.innerText = 'Изменить';
  buttonEdit.className = 'book-list__button book-list__button_edit';

  const buttonDelete =  document.createElement('button');
  buttonDelete.innerText = 'Удалить';
  buttonDelete.className = ' book-list__button book-list__button_delete';

  ListItem.appendChild(bookListTitle);
  ListItem.appendChild(tags);
  ListItem.appendChild(buttonEdit);
  ListItem.appendChild(buttonDelete);
  
  return ListItem;
};


bookForm.addEventListener('submit', addBookListItem);






