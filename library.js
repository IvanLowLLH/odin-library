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
        const new_card = document.createElement("div");
        new_card.setAttribute("id", book.id);
        new_card.classList.add("book-card");
        
        // book-top
        const new_card_top = document.createElement("div");
        new_card_top.classList.add("book-top");
        const book_title = document.createElement("h1");
        book_title.textContent = book.title;
        book_title.classList.add("book-title");
        const by = document.createElement("p");
        by.textContent = "by";
        const book_author = document.createElement("h2");
        book_author.textContent = book.author;
        book_author.classList.add("book-author");
        const book_genre = document.createElement("p");
        book_genre.textContent = book.genre;
        book_genre.classList.add("book-genre");
        new_card_top.appendChild(book_title);
        new_card_top.appendChild(by);
        new_card_top.appendChild(book_author);
        new_card_top.appendChild(book_genre);

        // book-bottom
        const new_card_bottom = document.createElement("div");
        new_card_bottom.classList.add("book-bottom");
        const book_pages = document.createElement("p");
        book_pages.textContent = `${book.num_pages} pages`;
        book_pages.classList.add("book-pages");
        const book_read = document.createElement("p");
        if (book.read) {
            book_read.textContent = "Read";
        }
        else {
            book_read.textContent = "Not Read";
        }
        book_read.classList.add("book-status");
        new_card_bottom.appendChild(book_pages);
        new_card_bottom.appendChild(book_read);

        new_card.appendChild(new_card_top);
        new_card.appendChild(new_card_bottom);

        book_container.appendChild(new_card);
    }
}

addBookToLibrary("The Hobbit", "J.R.R Tolkein", "fantasy", 300, false);
addBookToLibrary("1984", "George Orwell", "dystopian-fiction", 368, false);
addBookToLibrary("Neuromancer", "Willian Gibson", "science-fiction", 304, false);
addBookToLibrary("War and Peace", "Leo Tolstoy", "historical-fiction", 1400, false);
displayBooks();