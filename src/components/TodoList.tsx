import styled from 'styled-components';

import { Container } from './Container';
import Todo from './Todo';
// import { useState } from 'react';

const Wrapper = styled.section`
  padding: 3rem;
  max-width: 75rem;
  margin: 0 auto;
`;

const TodoList = () => {
  // const state = {
  //   entities: {},
  //   ids: [],
  // }
  // const [todos, setTodos] = useState();

  return (
    <Container>
      <Wrapper>
        <Todo checked={true} title={'ASS1'} />
        <Todo checked={false} title={'ASS1'} />
        <Todo checked={false} title={'ASS1'} />
      </Wrapper>
    </Container>
  );
};

export default TodoList;
