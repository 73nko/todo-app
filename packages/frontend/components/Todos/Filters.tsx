import { Filter } from './useTodos';
import styled from '@emotion/styled';

type FilterButtonProps = {
  isActive: boolean;
};

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  justify-content: flex-start;

  p {
    color: var(--secondary-text-color);
  }
`;

const FilterButton = styled.button<FilterButtonProps>`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) =>
    props.isActive ? 'var(--main-color)' : 'var(--main-text-color)'};
  font-size: 1rem;
`;

export const Filters = ({ updateFilter, filter }) => {
  return (
    <FiltersContainer>
      <p>Show:</p>
      <FilterButton
        isActive={filter === Filter.ALL}
        onClick={() => updateFilter(Filter.ALL)}
      >
        {Filter.ALL}
      </FilterButton>
      <FilterButton
        isActive={filter === Filter.COMPLETED}
        onClick={() => updateFilter(Filter.COMPLETED)}
      >
        {Filter.COMPLETED}
      </FilterButton>
      <FilterButton
        isActive={filter === Filter.INCOMPLETED}
        onClick={() => updateFilter(Filter.INCOMPLETED)}
      >
        {Filter.INCOMPLETED}
      </FilterButton>
    </FiltersContainer>
  );
};
