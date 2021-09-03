//book

class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
    this.isbn = Math.floor(1000000 + Math.random() * 9000000); // 7 ;
  }
}

//ui

class UI {
  static displayBooks() {
    const books = Storage.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><span>${book.isbn}</span></td>
        <td><span class="author">${book.author}</span></td>
        <td><span class="title">${book.title}</span></td>
        <td><a href="#" class="btn btn-danger btn-sm delete" id="del">X</a></td>
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
    const books = Storage.getBooks();
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
    let booksStorage = localStorage.setItem("books", JSON.stringify(books));
    console.log("!" + booksStorage);
    // проверить работает ли;
  }

  static removeBook(isbn) {
    const books = Storage.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }

  // static addEditedBook(isbn, title, author) {
  //   let books = Storage.getBooks();
  //   console.log(isbn, author, title);
  //   let booksEdit = [];
  //   books.forEach((book, index) => {
  //     if (book.isbn === isbn) {
  //       let book = JSON.parse(localStorage.getItem("books"));
  //       book[index].title = title;
  //       book[index].author = author;
  //       // booksEdit.push(book[index]);
  //       books.push(book[index]);
  //       // localStorage.setItem("books", JSON.stringify(books));
  //       console.log(book[index].title);
  //       console.log(book[index].author);
  //       console.log(book);
  //     }
  //   });

  //   localStorage.setItem("books", JSON.stringify(books));
  // }

  static editBook(isbn, author, title) {
    let books = Storage.getBooks();
    console.log(isbn, author, title);

    for (let index = 0; index < books.length; index++) {
      if (books[index].isbn === isbn) {
        books[index].title = title;
        books[index].author = author;
      }
    }
    localStorage.setItem("books", JSON.stringify(books));

    // localStorage.setItem("books", JSON.stringify(books));
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

  //validate
  if (title === "" || author === "") {
    UI.showAlert("Please fili in all fields", "danger");
  } else {
    //instatiate book
    const book = new Book(title, author);

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

//event: remove or change a book

document.querySelector("#book-list").addEventListener("click", (e) => {
  //  e.target.parentElement.parentElement.innerText;
  // alert(/.+?(?=	)/.exec(str));
  if (e.target.classList.contains("delete")) {
    let str = e.target.parentElement.parentElement.innerText;

    let a = /.+?(?=	)/.exec(str);

    console.log(a[0]);

    UI.deleteBook(e.target);

    //remove book from store
    // Storage.removeBook(e.target.parentElement.parentElementSibling.textContent);

    Storage.removeBook(a[0]);

    //show success
    UI.showAlert("Book removed", "danger");

    //CHANGE BOOK
  } else if (
    e.target.classList.contains("author") ||
    e.target.classList.contains("title")
  ) {
    console.log(e.target);
    let a = e.target;
    let input = document.createElement("input");
    input.classList.add("form-control");
    a.parentElement.append(input);
    // a.remove();
    a.style.display = "none";
    input.autofocus = true; // не работает автофокус
    console.log(input.autofocus);

    input.addEventListener("focusout", (e) => {
      a.style.display = "inline-block";
      a.textContent = input.value;

      //isbn скрыть и сделать чтобы случайно генерировалось, чтобы цифры не повторялись

      let str = e.target.parentElement.parentElement.innerText;
      let isbn = /.+?(?=	)/.exec(str);
      let author = str.split("	")[2];
      let title = str.split("	")[1];

      //Добавить валидацию + старій вариант чтобі оставляло
      if (input.value === "") {
        a.textContent = "unknown";
      }

      // Storage.addEditedBook(isbn[0], author, title);
      Storage.editBook(isbn[0], author, title);
      // Storage.removeBook(isbn[0]);
      // UI.deleteBook(e.target);
      // Storage.removeBook(isbn[0]);
      // Storage.addBook(isbn[0], author, title);

      input.remove();
      //add book to store
      // Storage.addBook(book);
      console.log(isbn[0]);
    });
  } else {
    // alert("no");
  }
});
