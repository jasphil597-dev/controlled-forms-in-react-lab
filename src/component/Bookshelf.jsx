import { useState } from 'react';
import '../App.css';

const Bookshelf = () => {
	// State to store the list of books
	const [books, setBooks] = useState([
		{ title: 'Fourth Wing', author: 'Rebecca Yarros' },
		{ title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
	]);

	// State to manage new book inputs
	const [newBook, setNewBook] = useState({
		title: '',
		author: '',
	});

	const [message, setMessage] = useState('');

	// Handle changes in the form inputs
	const handleInputChange = (e) => {
		setNewBook({
			...newBook,
			[e.target.name]: e.target.value,
		});
	};

	// Handle the form submission
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (newBook.title.trim() && newBook.author.trim()) {
			setBooks([...books, { title: newBook.title, author: newBook.author }]);
			setMessage(`Book added: "${newBook.title}" by ${newBook.author}`);
			setNewBook({ title: '', author: '' }); // Clear the form fields
		} else {
			alert('Please provide both a book title and an author!');
		}
	};

	return (
		<div className='bookshelfDiv'>
			<div className='formDiv'>
				<h3>Add a Book</h3>
				<form onSubmit={handleFormSubmit}>
					<input
						type='text'
						name='title'
						// placeholder='Title'
						value={newBook.title}
						onChange={handleInputChange}
					/>
					<input
						type='text'
						name='author'
						// placeholder='Author'
						value={newBook.author}
						onChange={handleInputChange}
					/>
					<button type='submit'>Add Book</button>
				</form>
			</div>

			<div className='bookCardsDiv'>
				{books.length > 0 ? (
					books.map((book, index) => (
						<div key={index} className='bookCard'>
							<p>
								<strong>{book.title}</strong>
							</p>
							<p>by: {book.author}</p>
						</div>
					))
				) : (
					<p>No books added yet. Try adding one!</p>
				)}
			</div>

			{/* Optional message */}
			{message && <p>{message}</p>}
		</div>
	);
};

export default Bookshelf;
