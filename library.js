const myLibrary = []

function Book(id, title, author, num_pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.read = read;
    this.info = function () {
        let read_str = ""
        if (this.read) {
            read_str = "read"
        }
        else {
            read_str = "not read yet"
        }
        return this.title + " by " + this.author + ", " + this.num_pages + " pages, " + read_str
    }
}

function addBookToLibrary(title, author, num_pages, read) {
    let new_id = crypto.randomUUID()
    const new_book = new Book(new_id, title, author, num_pages, read)
    myLibrary.push(new_book)
}

