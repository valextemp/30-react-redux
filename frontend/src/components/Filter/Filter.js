import { useDispatch, useSelector } from "react-redux";
import {
	setTitleFilter,
	resetFilters,
	selectTitleFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
	const dispatch = useDispatch();
	// const titleFilter = useSelector((state) => state.filter.title);
	const titleFilter = useSelector(selectTitleFilter); //его вариант

	// const handleTitleFilterChange = (e) => {
	// 	dispatch(setTitleFilter(e.target.value)); //e.target.value-- будет значение из input
	// };

	//мой вариант
	const handleTitleFilterChange = (title) => {
		dispatch(setTitleFilter(title)); //e.target.value-- будет значение из input
	};

	const handleResetFiters = () => {
		dispatch(resetFilters());
	};

	return (
		<div className="app-block filter">
			<div className="filter-row">
				<div className="filter-group">
					<input
						type="text"
						value={titleFilter}
						placeholder="Filter by title..."
						onChange={(e) => handleTitleFilterChange(e.target.value)} //мой вариант
						// onChange={handleTitleFilterChange}
					/>
				</div>
				<button
					type="button"
					onClick={handleResetFiters}
				>
					Reset Filters
				</button>
			</div>
		</div>
	);
};

export default Filter;
