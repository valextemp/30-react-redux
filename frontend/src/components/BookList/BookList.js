import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
// import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import {
	deleteBook,
	toggleFavorite,
	selectBooks,
} from "../../redux/slices/booksSlice";
import {
	selectTitleFilter,
	selectAuthorFilter,
	selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import "./BookList.css";

const BookList = () => {
	// const books = useSelector((state) => state.books);// это по старому
	const books = useSelector(selectBooks); // это по новому через Slice
	const titleFilter = useSelector(selectTitleFilter);
	const authorFilter = useSelector(selectAuthorFilter);
	const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
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
		const matchesAuthor = book.author
			.toLowerCase()
			.includes(authorFilter.toLowerCase());
		const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
		// console.log({ title: book.title, matchesTitle });
		return matchesTitle && matchesAuthor && matchesFavorite;
	});

	const highlightMatch = (text, filter) => {
		const regex = new RegExp(`(${filter})`, "gi"); //Регулярное выражение ,gi глобально (все вхождения фильтра в строку)
		// console.log(text.split(regex));
		return text.split(regex).map((substring, i) => {
			if (substring.toLowerCase() === filter.toLowerCase()) {
				return (
					<span
						key={i}
						className="highlight"
					>
						{substring}
					</span>
				);
			}
			return substring;
		});
	};

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
									{++i}. {highlightMatch(book.title, titleFilter)} by{" "}
									<strong>{highlightMatch(book.author, authorFilter)}</strong>{" "}
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
