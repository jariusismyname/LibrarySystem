import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks, saveBooks } from '../data/books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = getBooks();
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
    };
    saveBooks([...books, newBook]);
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block">Author:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
