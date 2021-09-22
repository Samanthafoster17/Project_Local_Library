function getTotalBooksCount(books) {
  let total = 0;
  books.forEach((book) => total++)
  return total
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  accounts.forEach((account) => total++)
  return total
}

function getBooksBorrowedCount(books) {
  let total = 0;
  for (let book in books) {
    const { borrows } = books[book];
    borrows.forEach((item) => {
      if (item.returned === false) {
        total++
      }
    })
}
return total
}
    

function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre);
  const results = [];
  bookGenres.map((genre) => {
    const genreExists = results.findIndex((element) => element.name === genre);
    if (genreExists >= 0) {
      results[genreExists].count = results[genreExists].count + 1;
    } else {
      results.push({ name: genre, count: 1 });
    }
  });
  return results.sort((genreA, genreB) => genreB.count - genreA.count).slice(0, 5);
 }

function getMostPopularBooks(books) {
   return books 
   .map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }))
  .sort((bookA, bookB) => bookB.count - bookA.count)
  .slice(0, 5);
 }

function getMostPopularAuthors(books, authors) {
  return authors.map(author => {
    author.count = books.filter(book => book.authorId === author.id).reduce((author, book) => author + (book.borrows && book.borrows.length || 0), 0);
    author.name = `${author.name.first} ${author.name.last}`;
    delete author.id
    return author
  }).sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5);

}

module.exports = {
        getTotalBooksCount,
        getTotalAccountsCount,
        getBooksBorrowedCount,
        getMostCommonGenres,
        getMostPopularBooks,
        getMostPopularAuthors,
      };
