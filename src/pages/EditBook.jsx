import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBooks, saveBooks } from '../data/books';

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '' });

  useEffect(() => {
    const books = getBooks();
    const found = books.find(b => b.id === id);
    if (found) setBook(found);
    else navigate('/');
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = getBooks();
    const updated = books.map(b => (b.id === id ? book : b));
    saveBooks(updated);
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title:</label>
          <input
            type="text"
            name="title"
            className="border p-2 w-full"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block">Author:</label>
          <input
            type="text"
            name="author"
            className="border p-2 w-full"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditBook;
