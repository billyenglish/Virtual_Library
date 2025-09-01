class Book {
    constructor(title, author, pages, genre, images) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.images = images;
        this.read = false
        this.id = crypto.randomUUID();
    }

}

class Library {
    constructor() {
        this.library = [];
    }

    addBook(title, author, pages, genre, images) {
        const newBook = new Book(title, author, pages, genre, images);

        newBook.title !== "" &&
        newBook.author !== "" &&
        newBook.pages > 0 &&
        newBook.genre !== ""
            ? this.library.push(newBook)
            : "Please fill in all fields correctly";
    }

    bookDupllicate() {
        const currentLibrary = [];

        const uniqueBooks = this.library.map((myLibrary) => {
            if (currentLibrary.hasOwnProperty(myLibrary)) {
                currentLibrary.push(myLibrary);
            }
        });

        return uniqueBooks;
    }

}

const myLibrary = new Library();
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 295, "Fantasy", 'Image');
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 295, "Fantasy", 'Image');
myLibrary.addBook("1984", "George Orwell", 328, "Dystopian", 'Image');
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 281, "Fiction", 'Image');
myLibrary.addBook("", "Unknown Author", 150, "Mystery", 'Image');
console.log(myLibrary.bookDupllicate());
