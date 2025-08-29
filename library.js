const myLibrary = []
const book_container = document.querySelector(".book-cards-container");

function Book(id, title, author, genre, num_pages, status) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre
    this.num_pages = num_pages;
    this.status = status;
    // this.info = function () {
    //     let read_str = ""
    //     if (this.read) {
    //         read_str = "read";
    //     }
    //     else {
    //         read_str = "not read yet";
    //     }
    //     return this.title + " by " + this.author + ", " + this.num_pages + " pages, " + read_str;
    // }
}

// Add a method on the prototype
Book.prototype.toggleStatus = function () {
    this.status = this.status === "Read" ? "Not Read" : "Read";
};

function addBookToLibrary(title, author, genre, num_pages, read) {
    let new_id = crypto.randomUUID();
    const new_book = new Book(new_id, title, author, genre, num_pages, read);
    myLibrary.push(new_book);
}

book_container.addEventListener("click", (event) => {
    const target = event.target;
    const book_id = target.closest(".book-card")?.id; // returns null if can't find closest book-card

    if (!book_id) return; // Click was not on a book card element

    if (target.classList.contains("remove-book-btn") || target.closest(".remove-book-btn")) {
        removeBook(book_id);
        displayBooks();
    } else if (target.classList.contains("book-status-btn")) {
        updateBookStatus(book_id);
        displayBooks();
    }
})

function displayBooks() {
    // Clear display first
    while (book_container.firstChild) {
        book_container.removeChild(book_container.firstChild);
    }
    for (let index = 0; index < myLibrary.length; index++) {
        let book = myLibrary[index];

        const new_card = document.createElement("div");
        new_card.setAttribute("id", book.id);
        new_card.classList.add("book-card");
        
        new_card.innerHTML = `
        <div class="book-top">
            <h1 class="book-title">${book.title}</h1>
            <p>by</p>
            <h2 class="book-author">${book.author}</h2>
            <p class="book-genre">${book.genre}</p>
        </div>
        <div class="book-bottom">
            <p class="book-pages">${book.num_pages} pages</p>
            <button class="book-status-btn" id="${book.id}">${book.status}</button>
            <button type="button" class="remove-book-btn" id="${book.id}">
                <img class="trash-icon" src="trash-can-outline.svg">
            </button>
        </div>
        `;
        book_container.appendChild(new_card);
    }
}

function removeBook(remove_book_id) {
    for (let index = 0; index < myLibrary.length; index++) {
        let book = myLibrary[index];
        if (book.id === remove_book_id) {
            myLibrary.splice(index, 1);
            break;
        }
    }   
}

function updateBookStatus(update_book_id) {
    for (let index = 0; index < myLibrary.length; index++) {
        let book = myLibrary[index];
        if (book.id === update_book_id) {
            book.toggleStatus();
            break;
        }
    }
}

addBookToLibrary("The Hobbit", "J.R.R Tolkein", "fantasy", 300, "Read");
addBookToLibrary("1984", "George Orwell", "dystopian-fiction", 368, "Not Read");
addBookToLibrary("Neuromancer", "Willian Gibson", "science-fiction", 304, "Not Read");
addBookToLibrary("War and Peace", "Leo Tolstoy", "historical-fiction", 1400, "Not Read");
displayBooks();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-button");
const form = document.querySelector(".add-form");

const titleInput = document.getElementById("book-title-form");
const authorInput = document.getElementById("book-author-form");
const genreInput = document.getElementById("book-genre-form");
const pagesInput = document.getElementById("book-pages-form");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

document.getElementById("confirm-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const readInput = document.querySelector('input[name="book-read"]:checked');
    addBookToLibrary(titleInput.value, authorInput.value, genreInput.value, pagesInput.value, readInput.value)
    displayBooks()

    dialog.close();
});