import styled from 'styled-components';

import { FilterType } from '../types';
import Radio from './Radio';
import { useTodoState, useTodoDispatch } from '../context/todosContext';

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: stretch;
`;

const Filter = () => {
  const dispatch = useTodoDispatch();
  const { filter } = useTodoState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as FilterType;

    dispatch({ type: 'SET_FILTER', payload: { filter: value } });
  };

  return (
    <Wrapper>
      <Radio
        title={'Все'}
        value="all"
        name="filter"
        checked={filter === 'all'}
        onChange={handleChange}
      />
      <Radio
        title={'Сделаны'}
        value="done"
        name="filter"
        checked={filter === 'done'}
        onChange={handleChange}
      />
      <Radio
        title={'Не сделаны'}
        value="undone"
        name="filter"
        checked={filter === 'undone'}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Filter;
