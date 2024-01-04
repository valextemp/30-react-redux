import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { selectTitleFilter } from "../../redux/slices/filterSlice";
import "./BookList.css";

const BookList = () => {
	const books = useSelector((state) => state.books);
	const titleFilter = useSelector(selectTitleFilter);
	const dispatch = useDispatch();

	//mine
	const handleDeleteBook = (id) => {
		dispatch(deleteBook(id));
	};

	const handleToggleFavorite = (id) => {
		dispatch(toggleFavorite(id));
	};

	const filteredBooks = books.filter((book) => {
		const matchesTitle = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase());
		// console.log({ title: book.title, matchesTitle });
		return matchesTitle;
	});

	return (
		<div className="app-block book-list">
			<h2>Book List</h2>
			{books.length === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{/* {books.map((book, i) => ( */}
					{filteredBooks.map(
						(
							book,
							i //теперь только по фильтрованному списку
						) => (
							<li key={book.id}>
								<div className="book-info">
									{++i}. {book.title} by <strong>{book.author}</strong>
								</div>
								<div className="book-actions">
									<span onClick={() => handleToggleFavorite(book.id)}>
										{book.isFavorite ? (
											<BsBookmarkStarFill className="star-icon" />
										) : (
											<BsBookmarkStar className="star-icon" />
										)}
									</span>
									<button onClick={() => handleDeleteBook(book.id)}>
										Delete book
									</button>
								</div>
							</li>
						)
					)}
				</ul>
			)}
		</div>
	);
};

export default BookList;
