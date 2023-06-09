import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../store/reducer';

import { ContactSearch } from './Search.styled';
import { ContactFind } from './Search.styled';

const Search = () => {
  const filterQuery = useSelector(state => state.filter); // Получаем значение фильтра из состояния хранилища
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue.trim().toLowerCase()));
  };

  return (
    <div>
      <ContactFind>
        Find contacts
        <ContactSearch
          placeholder="кого шукаємо..."
          type="text"
          name="filter"
          value={filterQuery}
          onChange={handleFilterChange}
        />
      </ContactFind>
    </div>
  );
};

export default Search;
