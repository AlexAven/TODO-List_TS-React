import React from 'react';
import styled from 'styled-components';
import { IoSunny, IoMoonOutline } from 'react-icons/io5';

import useTheme from '../hooks/useTheme';

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
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? <IoMoonOutline size={'2rem'}/> : <IoSunny size={'2rem'} />}
    </ModeSwitcher>
  );
};

export default ThemeSwitcher;