
const bookForm = document.querySelector('.book-form');
const bookFormAdd = document.querySelector('.book-form__add');
const bookFormRadioInputs = document.querySelectorAll('.book-form__radio-input');
const bookList = document.querySelector('.book-list'); 
const bookListItems = document.querySelectorAll('.book-list__item');
let itemId = 0;

function selectedTags(allTags) {
  booktags = document.createElement('span');
  booktags.className = 'book-list__tags';
  for (let i = 0; i < allTags.length ; i++) {
    if ( allTags[i].checked ) {
      booktag = document.createElement('label');
      booktag.innerText = allTags[i].value;
      booktag.className = 'book-list__tag tag';
      booktags.append(booktag);
    }
  };
  return booktags
};

function tagsAll(tags, tagsId) {
  let fragment = new DocumentFragment();
  for (let i = 0; i < tags.length ; i++) {
      bookInput = document.createElement('input');
      bookInput.className = 'book-list__radio-input';
      bookInput.id = tags[i].id + tagsId;
      bookInput.type = tags[i].type;
      bookInput.value = tags[i].value;
      bookInput.name = tags[i].name;
      bookInput.checked = tags[i].checked;
      booktag = document.createElement('label');
      booktag.innerText = tags[i].value;
      booktag.className = 'book-list__tag tag';
      booktag.prepend(bookInput);
      fragment.append(booktag);
  };
  return fragment
};



function addBookListItem(event){
  event.preventDefault();
  itemId = ++itemId
  const bookListItem = createListItem(bookFormAdd.value, bookFormRadioInputs, itemId);
  bookList.appendChild(bookListItem);
  // чистим форму
  bookFormAdd.value = '';
  for (let i = 0; i < bookFormRadioInputs.length ; i++) {
    bookFormRadioInputs[i].checked = false;
  };
};

function createListItem(bookName, tags, id){

  const ListItem = document.createElement('li');
  ListItem.className = 'book-list__item';

  const bookLictBlock = document.createElement('div');
  bookLictBlock.className = 'book-list__block';

  const bookLictBlockAfter = bookLictBlock.cloneNode(false);
  bookLictBlockAfter.classList.add('book-list__block_hide');
  
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

  ListItem.append(bookLictBlock);
  ListItem.append(bookLictBlockAfter);
  bookLictBlockAfter.append(tagsAll(tags,id));
  bookLictBlock.after(bookLictBlock);
  bookLictBlock.append(bookListTitle);
  bookLictBlock.append(bookListTitleInput);
  bookLictBlock.append(selectedTags(tags));
  bookLictBlock.append(buttonEdit);
  bookLictBlock.append(buttonDelete);

  buttonEdit.addEventListener('click', editBookItem);
  buttonDelete.addEventListener('click', deleteBookItem);

  return ListItem;
};

function editBookItem(){
  const bookItem =  this.parentNode.parentNode;
  const title = bookItem.querySelector('.book-list__title');
  const titleInput = bookItem.querySelector('.book-list__title-input');
  const tagsInput = bookItem.querySelector('.book-list__tags');
  const isEdit = bookItem.classList.contains('book-list__item_edit');
  const block = bookItem.querySelector('.book-list__block_hide');
  const tagsAll = block.querySelectorAll('.book-list__radio-input');

  if ( isEdit ) {
    title.innerText = titleInput.value;
    tagsInput.replaceWith(selectedTags(tagsAll));
    this.innerText = 'Изменить';
    } else {
    titleInput.value = title.innerText;
    this.innerText = 'Сохранить';
    };



    bookItem.classList.toggle('book-list__item_edit');

};

function deleteBookItem(){
  bookList.removeChild(this.parentNode.parentNode);
};




bookForm.addEventListener('submit', addBookListItem);






