function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let checkedOut = [];
  const bookStatus = [];
  books.forEach((book) => {
    const isBookReturned = book.borrows[0].returned;

    if (isBookReturned) {
      checkedOut.push(book);
    } else {
      returned.push(book);
    }
  });
  bookStatus.push(returned);
  bookStatus.push(checkedOut);
  return bookStatus;
}

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function getBorrowersForBook(book, accounts) {
  let transaction = book.borrows;
  let res = transaction.map((transaction) => {
    const accInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accInfo
    }
    return newTransaction
  })
  return res.slice(0, 10);
 
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
