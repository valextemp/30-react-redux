import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
	name: "books",
	initialState: initialState,
	reducers: {
		addBook: (state, action) => {
			// return [...state, action.payload]; //можно по обычному
			state.push(action.payload); // С исп библиотеки Immer
		},
		deleteBook: (state, action) => {
			return state.filter((book) => book.id !== action.payload);
		},
		toggleFavorite: (state, action) => {
			// return state.map((book) =>
			// 	book.id === action.payload
			// 		? { ...book, isFavorite: !book.isFavorite }
			// 		: book
			// );

			//тоже самое только с учетом createSlice и Immer
			state.forEach((book) => {
				if (book.id === action.payload) {
					book.isFavorite = !book.isFavorite;
				}
			});
		},
	},
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
