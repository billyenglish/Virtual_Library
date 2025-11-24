import { getCurrentStorage } from "./getCurrentStorage";

export const createStorageLibrary = function () {
    const currentLibrary = getCurrentStorage();
    const currentBookShelf = document.querySelector(".bookshelf_container");
    let createBookElement = '';

    if (!currentLibrary || !currentBookShelf) return;

    currentLibrary.forEach(book => {
        createBookElement += `
            <div 
                class="current_book"
                data-id="${book.id}"
                style="
                    background-image: 
                    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, .7)), 
                    url('${book.bookCover}');
                "
            >
                <div class="title_container">
                    <h3 class="current_book_title">
                        ${book.title}
                    </h3>
                </div>

                <div class="author_container">
                    <h4 class="author_title">
                        ${book.author}
                    </h4>
                </div>

                <div class="genre_container">
                    <h5 class="genre_title">
                        Genre: <span class="genre">${book.genre}</span>
                    </h5>
                </div>

                <div class="year_published_container">
                    <h6 class="year_published_title">
                        Year Published: <span class="year_published">${book.date}</span>
                    </h6>
                </div>

                <div class="pages_container">
                    <p class="book_pages">  
                        Pages: <span class="pages">${book.pages}</span>
                    </p>
                </div>

                <div class="current_book_control_panel">
                    <button>Delete</button>
                    <button>Read</button>
                </div>

            </div>
        `;
    });

    // ⬇️ this is the important fix
    currentBookShelf.insertAdjacentHTML('beforeend', createBookElement);
};
