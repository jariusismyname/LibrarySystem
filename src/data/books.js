export const getBooks = () => {
  const books = localStorage.getItem("books");
  return books ? JSON.parse(books) : [];
};

export const saveBooks = (books) => {
  localStorage.setItem("books", JSON.stringify(books));
};
