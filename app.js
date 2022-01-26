//Array that holds the library
let myBooks = [];
let counter = 0;

//Query Selectors
let shelf = document.querySelector('.bookList');
let bookBtn = document.querySelector('#hide');
let form = document.querySelector('.bookForm');
let submit = document.querySelector('#bookSubmit');

//Form inputs
let bookTitle = document.querySelector('#title');
let bookAuthor = document.querySelector('#author');
let bookPages = document.querySelector('#pages');

//Constructor function
// function Book() {}

bookBtn.addEventListener('click', function () {
  form.classList.toggle('hide');
});

submit.addEventListener('click', function (e) {
  e.preventDefault();
  let title = bookTitle.value;
  let author = bookAuthor.value;
  let pages = bookPages.value;
  let newBook = new Book(title, author, pages);
  myBooks.push(newBook);
  addBookToLibrary();
  counter++;
});

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function () {
    return title, author, pages;
  };
}

function addBookToLibrary() {
  for (let i = counter; i < myBooks.length; i++) {
    let newCard = document.createElement('div');
    // newCard.classList.add('read');
    newCard.innerHTML =
      '<strong>' +
      myBooks[i].title +
      '</strong>' +
      '<br>' +
      myBooks[i].author +
      '<br>' +
      myBooks[i].pages +
      '<br>';
    shelf.appendChild(newCard);
    let readBtn = document.createElement('button');
    readBtn.innerText = 'Read?';
    readBtn.classList.add('btn-secondary');
    newCard.appendChild(readBtn);
    let bookRead = document.querySelectorAll('.btn-secondary').forEach((book) => {
      book.addEventListener('click', function () {
        newCard.classList.toggle('read');
      });
    });
    // bookRead.addEventListener('click', function () {
    //   newCard.classList.toggle('read');
    // });
  }
}
