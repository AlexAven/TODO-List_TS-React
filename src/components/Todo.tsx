import styled from 'styled-components';

import Checkbox from './Checkbox';
import RemoveBtn from './RemoveBtn';
import { CheckboxType } from '../types';

const TodoWrapper = styled.article`
  padding: 1rem 0;
  border-bottom: 1px solid var(--colors-ui);
  display: flex;
  gap: 2rem;
  align-items: baseline;
  position: relative;
`;

const Title = styled.span<{ $ischecked: boolean }>`
  font-size: var(--fs-md);
  vertical-align: middle;
  line-height: 10px;
  color: ${({ $ischecked }) => ($ischecked ? 'var(--colors-text-alt)' : '')};
  text-decoration: ${({ $ischecked }) => ($ischecked ? 'line-through' : 'none')};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0.7rem;
  top: 35%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Todo = ({ checked, onChange, title, onClick }: CheckboxType) => {
  return (
    <TodoWrapper>
      <Checkbox onChange={onChange} checked={checked} />
      <Title $ischecked={checked}>{title}</Title>
      <ButtonWrapper>
        <RemoveBtn onClick={onClick} />
      </ButtonWrapper>
    </TodoWrapper>
  );
};

export default Todo;
