import { useDispatch, useSelector } from "react-redux";
import { filterValue, setFilterValue } from "../../redux/filtersSlice";
import css from '../SearchBox/SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filterName = useSelector(filterValue);

  const handleFilter = (e) => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <div className={css.searchForm}>
      <label className={css.searchLabel} htmlFor="searchBoxId">Find contacts by name</label>
      <input className={css.searchInput}
        type="text" 
        id="searchBoxId"
        value={filterName}
        onChange={handleFilter}
      />
    </div>
  );
}

export default SearchBox;
