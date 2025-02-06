import styled from 'styled-components';

import { Container } from './Container';

const FooterEl = styled.footer`
  box-shadow: var(--shadow-alt);
`;

const Wrapper = styled.div`
  padding: 1.5rem;

  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-size: var(--fs-sm);
  color: var(--colors-text-alt);
`;

const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <Wrapper>
          <Title>by Kazakov Alexander</Title>
        </Wrapper>
      </Container>
    </FooterEl>
  );
};

export default Footer;
