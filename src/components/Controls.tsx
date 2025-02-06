import styled from 'styled-components';

import Input from './Input';
import ThemeSwitcher from './ThemeSwitcher';
import Filter from './Filters';

const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 3rem;
`;

const Controls = () => {
  return (
    <ControlsContainer>
      <Wrapper>
        <Input />
        <ThemeSwitcher />
      </Wrapper>
      <Filter />
    </ControlsContainer>
  );
};

export default Controls;
