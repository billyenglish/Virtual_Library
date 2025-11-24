import "./styles.css";

const currentLibrary = [
    {
        bookCover: 'https://www.thebookdesigner.com/wp-content/uploads/2023/12/The-Hobbit-Book-Cover-with-Bilbos-barrel-ride.jpg',
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        genre: 'Fantasy',
        date: 1937,
        pages: 300,
        read: true,
        id: 0
    },
    {
        bookCover: '',
        title: 'The Greate Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Classic, Fiction',
        date: 1925,
        pages: 180,
        read: true,
        id: 1
    },
    {
        bookCover: '',
        title: '1984',
        author: 'George Orwell',
        genre: 'Classic, Fiction',
        date: 1949,
        pages: 328,
        read: true,
        id: 2
    },
    {
        bookCover: '',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        genre: 'Classic, Fiction',
        date: 1813,
        pages: 279,
        read: true,
        id: 3
    }
];

const libraryStorage = JSON.stringify(currentLibrary);
console.log(libraryStorage);

localStorage.setItem('libraryData', libraryStorage);

