import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./books/reducer"; //теперь будем импортировать из slice
import booksReducer from "./slices/booksSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
	reducer: {
		books: booksReducer,
		filter: filterReducer,
	},
});

export default store;
