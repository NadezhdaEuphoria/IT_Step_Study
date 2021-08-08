//book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//ui

class UI {
  static displayBooks() {
    // const StoredBooks = [
    //   {
    //     title: "Book One",
    //     author: "John Doe",
    //     isbn: "9589358",
    //   },
    //   {
    //     title: "Book Two",
    //     author: "Jane Doe",
    //     isbn: "123458",
    //   },
    // ];

    const books = Storage.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn=sm delete">X</a></td>
        `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");

    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    //vanish in 3 sec\
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

//store

class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
      const books = Store.getBooks();
      books.push(book);

      localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
      const books = Store.getBooks();
      books.forEach((book, index) => {
          if (book.isbn === isbn) {
              books.splice(index,1);
          }
      });
      localStorage.setItem('books', JSON.stringify(books));
  }
}

//event: display books]

document.addEventListener("DOMContentLoaded", UI.displayBooks);

//event: add book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent actual submit
  e.preventDefault();

  //get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  //validate
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fili in all fields", "danger");
  } else {
    //instatiate book
    const book = new Book(title, author, isbn);

    console.log(book);

    //add book to UI
    UI.addBookToList(book);

    //add book to store
    Storage.addBook(book);

    //show success
    UI.showAlert("Book added", "success");

    //clear fields

    UI.clearFields();
  }
});

//event: remove a book

document.querySelector("#book-list").addEventListener("click", (e) => {
  console.log(e.target);
  UI.deleteBook(e.target);

//remove book from store

Storage.removeBook(e.target.parentElement.parentElementSibling.textContent);

  //show success
  UI.showAlert("Book removed", "danger");
});
