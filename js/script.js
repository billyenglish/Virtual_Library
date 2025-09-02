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
        
        if (title !== "" && author !== "" && pages > 0 && genre !== "") {
            const newBook = new Book(title, author, pages, genre, images);
            this.library.push(newBook);
        } else {
            console.log("Please fill out all fields correctly");
        }
    }

    bookDuplicate() {
        const currentLibrary = [];

        for (const book of this.library) {
            if (!currentLibrary.some(currentBook => currentBook.title === book.title && currentBook.author === book.author)) {
                currentLibrary.push(book);
            } else {
                console.log(`Duplicate book found: ${book.title}`);
            }
        }

        return currentLibrary;
    }

}

const myLibrary = new Library();
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 295, "Fantasy", 'Image');
myLibrary.addBook("The Hobbit", "J.R.R. Tolkien", 295, "Fantasy", 'Image');
myLibrary.addBook("1984", "George Orwell", 328, "Dystopian", 'Image');
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 281, "Fiction", 'Image');
myLibrary.addBook("", "Unknown Author", 150, "Mystery", 'Image');
console.log(myLibrary.bookDuplicate());

class UIModalDialog {
    constructor() {
        
    }
}