import * as a from "./actionTypes";

export const addBook = (newBook) => {
	return {
		type: a.ADD_BOOK,
		payload: newBook,
	};
};

//mine
export const deleteBook = (id) => {
	return {
		type: a.DELETE_BOOK,
		payload: id,
	};
};
