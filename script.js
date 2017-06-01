var books = [];
var sortedBooks = [];

function addBook(bookName, bookCategory, bookRating) {
    var newBook = new Object();
    newBook.name = bookName;
    newBook.category = bookCategory;
    newBook.rating = bookRating;
    books.push(newBook);
    sortedBooks = books.sort(function(a, b) {
        return b.rating - a.rating });
}
$('.post-book').click(function() {
    var bookName = $('.book-input').val();
    var bookCategory = $('.category-input').val();
    var bookRating = $('.rate-input').val();
    addBook(bookName, bookCategory, bookRating);
    updateBooks();
});

// function changeToText(bookRating){
    
//     switch(bookRating) {
//     case "1":
        
//         break;
//     case n:
//         code block
//         break;
//     default:
//         code block
// }
// }

function updateBooks() {
    $('.books-list').empty();
    for (var i = 0; i < sortedBooks.length; i++) {
        $('.books-list').append("<li>" + "Title: " + sortedBooks[i].name + 
            " Category: " + sortedBooks[i].category + 
            " Rating: " + sortedBooks[i].rating + "</li>");
    }

};

