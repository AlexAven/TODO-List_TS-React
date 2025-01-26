import styled from 'styled-components';

import Checkbox from './Checkbox';
import { CheckboxType } from '../types';

const TodoWrapper = styled.article`
  padding: 1rem 0;
  border-bottom: 1px solid var(--colors-ui);
  display: flex;
  gap: 2rem;
  align-items: baseline;
`;

const Title = styled.span`
  font-size: var(--fs-md);
  vertical-align: middle;
  line-height: 10px;

`;

const Todo = ({ checked, onChange, title }: CheckboxType) => {
  return (
    <TodoWrapper>
      <Checkbox onChange={onChange} checked={checked} />
      <Title>{title}</Title>
    </TodoWrapper>
  );
};

export default Todo;