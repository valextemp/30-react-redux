import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import createBookWithId from "../../utils/createBookWithId";

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

export const thunkFunction = async (dispatch, getState) => {
	try {
		const res = await axios.get("http://localhost:4000/random-book");
		// if (res.data && res.data.title && res.data.author) {
		if (res?.data?.title && res?.data?.author) {
			//можно и так
			// console.log(res.data);
			dispatch(addBook(createBookWithId(res.data, "API")));
		}
	} catch (error) {
		console.log("Error fetching random book -- ", error);
	}
};
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
