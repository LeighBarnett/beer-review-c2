var books = [];

function addBook(bookName, bookCategory) {
    var newBook = new Object();
    newBook.name = bookName;
    newBook.category = bookCategory;
    books.push(newBook);
}
$('.post-book').click(function() {
    var bookName = $('.book-input').val();
    var bookCategory = $('.category-input').val();
    addBook(bookName, bookCategory);
    updateBooks();
});

function updateBooks() {
    $('.books-list').empty();
    for (var i = 0; i < books.length; i++) {
        $('.books-list').append("<li>" + "Title: " + books[i].name + " - Category: " + books[i].category + "</li");
    };
};
