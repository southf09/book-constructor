let myBooks = ['The Hobbit', 'KKC', 'IT', 'Jaws'];
let shelf = document.querySelector('.container');
//Constructor function
// function Book() {}

// function addBookToLibrary() {}

for (let i = 0; i < myBooks.length; i++) {
  let newBook = document.createElement('div');
  newBook.textContent = myBooks[i];
  shelf.appendChild(newBook);
}
