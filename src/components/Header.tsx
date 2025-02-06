import styled from 'styled-components';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
  padding: 3rem;

  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: var(--fs-lg);
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderEl>
      <Wrapper>
        <Title>todo list</Title>
      </Wrapper>
    </HeaderEl>
  );
};

export default Header;
