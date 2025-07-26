import { useEffect, useState } from 'react';
import { getBooks, saveBooks } from '../data/books';
import { Link } from 'react-router-dom';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  const deleteBook = (id) => {
    const updated = books.filter(book => book.id !== id);
    setBooks(updated);
    saveBooks(updated);
  };

  return (
    <div className="container">
  <h1>Library System</h1>
  <Link to="/add" className="button green">Add Book</Link>
  <ul className="book-list">
    {books.map(book => (
      <li key={book.id} className="book-item">
        <div>{book.title} by {book.author}</div>
        <div>
          <Link to={`/edit/${book.id}`} className="button">Edit</Link>
          <button onClick={() => deleteBook(book.id)} className="button red">Delete</button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}

export default Home;
