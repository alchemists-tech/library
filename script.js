function Book(title, author, pages) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

};

Book.prototype.info = function() {

    let phrase = ""

    if (!this.read) {

        phrase = "not read yet"

    } else {

        phrase = "has read already"

    }

    return `${title} by ${author}, ${pages} pages, ${phrase}.`

}