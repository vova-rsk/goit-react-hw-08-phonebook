import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { Filter, FilterIconWrapper, StyledInputBase } from './FilterBar.styled';
import getFilter from '../../redux/filter/filter-selectors';

const FilterBar = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Filter>
      <FilterIconWrapper>
        <SearchIcon />
      </FilterIconWrapper>
      <StyledInputBase
        placeholder="Filter…"
        inputProps={{ 'aria-label': 'filter' }}
        value={filter}
        onChange={e => dispatch(e.target.value)}
      />
    </Filter>
  );
};

export default FilterBar;
