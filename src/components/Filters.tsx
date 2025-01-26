import { useState } from 'react';
import styled from 'styled-components';

import Radio from './Radio';
import { FilterType } from '../types';

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: stretch;
`;

const Filter = () => {
  const [filter , setFIlter] = useState<FilterType>('all');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as FilterType;
    setFIlter(value) ;
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