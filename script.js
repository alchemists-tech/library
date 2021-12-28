let myLibrary = [];
const addButton = document.querySelector(".add");

function Book(title, author, pages, read = false) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

};

addButton.addEventListener(click, )

Book.prototype.info = function() {

    let phrase = "";

    if (!this.read) {

        phrase = "not read yet"

    } else {

        phrase = "has read already"

    };

    return `${title} by ${author}, ${pages} pages, ${phrase}.`;

};

function addBookToLibrary(title, author, pages, read) {

    myLibrary.push( new Book(title, author, pages, read));

};