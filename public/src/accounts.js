function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lNameA, lNameB) =>
  lNameA.name.last.toLowerCase() > lNameB.name.last.toLowerCase() ? 1 : -1 );
  return accounts;
  
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  const { id } = account;
  for(let book in books){
    const { borrows } = books[book];
    borrows.forEach((item) => {
      if(item.id === id){
        total++
      }
    })
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let result = [];
  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
  });
  result = result.map((book) => {
    const author = authors.find((author1) => author1.id === book.authorId);
    const newBook = {
      ...book,
      author,
    };
    return newBook;
  });
  return result;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
