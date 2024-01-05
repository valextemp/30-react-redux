import { useDispatch, useSelector } from "react-redux";
import {
	setTitleFilter,
	setAuthorFilter,
    setOnlyFavoriteFilter,
	resetFilters,
	selectTitleFilter,
	selectAuthorFilter,
    selectOnlyFavoriteFilter
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
	const dispatch = useDispatch();
	// const titleFilter = useSelector((state) => state.filter.title);
	const titleFilter = useSelector(selectTitleFilter); //его вариант
	const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter=useSelector(selectOnlyFavoriteFilter);

	// const handleTitleFilterChange = (e) => {
	// 	dispatch(setTitleFilter(e.target.value)); //e.target.value-- будет значение из input
	// };

	//мой вариант
	const handleTitleFilterChange = (title) => {
		dispatch(setTitleFilter(title)); //e.target.value-- будет значение из input
	};

	//my variant
	const handleAuthorFilterChange = (author) => {
		dispatch(setAuthorFilter(author));
	};

    const handleOnlyFavoriteFilterChange=()=>{
        dispatch(setOnlyFavoriteFilter())
    }

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
				<div className="filter-group">
					<input
						type="text"
						value={authorFilter}
						placeholder="Filter by author..."
						onChange={(e) => handleAuthorFilterChange(e.target.value)} //мой вариант
						// onChange={handleAuthorFilterChange}
					/>
				</div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange} />
                        Only favorite
                    </label>
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
