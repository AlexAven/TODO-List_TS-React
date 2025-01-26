import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { IoBriefcase } from 'react-icons/io5';
import { useTodoDispatch } from '../context/todosContext';

const Form = styled.form`
  width: 100%;
  max-width: 80rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem;
`;

const InputEl = styled.input.attrs({
  type: 'text',
  placeholder: 'Запишите сюда свое дело...',
})`
  flex-grow: 1;
  border: 0.1rem solid var(--colors-ui-border);
  border-radius: var(--radii);
  padding: 1rem 3rem;
`;

const SearchIcon = styled(IoBriefcase)`
  position: relative;
  right: 5rem;
`;

const SubmitBtn = styled.button.attrs({ type: 'submit' })`
  flex-shrink: 0;
  border: 0.1rem solid var(--colors-ui-border);
  border-radius: var(--radii);
  color: var(--colors-button);
  padding: 0 2rem;
  background-color: var(--colors-ui);
  font-weight: var(--fw-semi-bold);

   &:hover {
    background-color: var(--colors-ui-hover);
  }
`;

const Input = () => {
  const [input, setInput] = useState<string>('');
  const dispatch = useTodoDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = input.trim();
    
    if (value !== '') {
      const newId = nanoid();
      dispatch({ type: 'ADD_TODO', payload: { id: newId, title: value } });
      setInput('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} >
      <InputEl value={input} onChange={handleChange} />
      <SearchIcon />
      <SubmitBtn>В список!</SubmitBtn>
    </Form>
  );
};

export default Input;
