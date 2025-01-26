import styled from 'styled-components';
import { MainProps } from '../types';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }: MainProps) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
