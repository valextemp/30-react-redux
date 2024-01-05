import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	title: "",
	author: "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState: initialState,
	reducers: {
		setTitleFilter: (state, action) => {
			//Вы можете изменять(mutate) состояние (state) блогодаря Immer библиотетке
			state.title = action.payload; //можно изменять состояние так в slice, в класическом (без slice) так делать нельзя

			// А можно как обычно возвращать новое состояние
			// return { ...state, title: action.payload };//первый вариант
		},
		setAuthorFilter: (state, action) => {
			state.author = action.payload;
		},
		resetFilters: (state) => {
			return initialState;
		},
	},
});

// console.log(filterSlice.actions);
// console.log(filterSlice.actions.setTitleFilter('test'));
// console.log(filterSlice.actions.setTitleFilter);

// export const setTitleFilter = filterSlice.actions.setTitleFilter();-- так не работает (наверно не функция)

//то же самое
export const { setTitleFilter, setAuthorFilter, resetFilters } =
	filterSlice.actions;

//говорит надо так делать, чтобы не делать state.filter.title в компонентах, но что это за state непонятно
export const selectTitleFilter = (state) => {
	// console.log("state -- ", state);
	// console.log("state Object.keys -- ", Object.keys(state));
	// console.log("state.books -- ", state.books);
	// console.log("state.filter -- ", state.filter);
	return state.filter.title;
};

export const selectAuthorFilter = (state) => state.filter.author;
// console.log("selectTitleFilter --", selectTitleFilter);

export default filterSlice.reducer;
