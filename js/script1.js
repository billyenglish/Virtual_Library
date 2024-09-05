/* User Sign In Form Opening and Closing */

const userSignIn = document.querySelector("#sign-in");
const signInModal = document.querySelector(".dialog-signin");


const openSignIn = () => signInModal.showModal();
const closeSignIn = () => signInModal.close();

userSignIn.addEventListener("click", () => {
    openSignIn();
});

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    bookTitle() {
        return this.title === "" ? "Please Enter A Book Title" : this.title;
    }

    bookAuthor() {
        return this.author === "" ? "Please Enter A Book Author" : this.author;
    }

    bookPages() {
        return this.pages > 0 ? "Please Valid Number of Book Pages" : this.pages;
    }

    isRead() {
        return this.read;
    }
}

const myLibrary = [];

function addToLibrary(bookTitle, bookAuthor, bookPages, bookIsRead) {
    let createBook = new Book(bookTitle, bookAuthor, bookPages, bookIsRead);
    myLibrary.push(createBook);
    return myLibrary;
}

function createBook() {
    let result = addToLibrary('Title', 'Author', 'Pages', 'isRead');
}

console.log(createBook());