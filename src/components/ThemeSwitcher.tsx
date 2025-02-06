import { useEffect } from 'react';
import styled from 'styled-components';

import { useTodoDispatch, useTodoState } from '../context/todosContext';
import { IoSunny, IoMoonOutline } from 'react-icons/io5';

const ModeSwitcher = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--colors-ui);
  padding: 0 2rem;
  border-radius: var(--radii);
  color: var(--colors-button);
  cursor: pointer;

  &:hover {
    background-color: var(--colors-ui-hover);
  }
`;

const ThemeSwitcher: React.FC = () => {
  const dispatch = useTodoDispatch();
  const { theme } = useTodoState();

  const toggleTheme = () =>
    dispatch({
      type: 'TOGGLE_THEME',
      payload: { selectedTheme: theme === 'light' ? 'dark' : 'light' },
    });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? <IoMoonOutline size={'2rem'} /> : <IoSunny size={'2rem'} />}
    </ModeSwitcher>
  );
};

export default ThemeSwitcher;
