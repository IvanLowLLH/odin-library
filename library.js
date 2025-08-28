const myLibrary = []

function Book(id, title, author, genre, num_pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre
    this.num_pages = num_pages;
    this.read = read;
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

function addBookToLibrary(title, author, genre, num_pages, read) {
    let new_id = crypto.randomUUID();
    const new_book = new Book(new_id, title, author, genre, num_pages, read);
    myLibrary.push(new_book);
}

function displayBooks() {
    const book_container = document.querySelector(".book-cards-container");
    for (let index = 0; index < myLibrary.length; index++) {
        console.log(`${index}`)
        let book = myLibrary[index];
        let book_status = "Not Read";
        if (book.read){
            book_status = "Read"
        }
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
            <p class="book-status">${book_status}</p>
        </div>
        `;
        book_container.appendChild(new_card);
    }
}

addBookToLibrary("The Hobbit", "J.R.R Tolkein", "fantasy", 300, true);
addBookToLibrary("1984", "George Orwell", "dystopian-fiction", 368, false);
addBookToLibrary("Neuromancer", "Willian Gibson", "science-fiction", 304, false);
addBookToLibrary("War and Peace", "Leo Tolstoy", "historical-fiction", 1400, false);
displayBooks();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});