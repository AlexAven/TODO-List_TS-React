import styled from 'styled-components';

import { Container } from './Container';
import Todo from './Todo';
import { useTodoState } from '../context/todosContext';

const Wrapper = styled.section`
  padding: 3rem;
  max-width: 75rem;
  margin: 0 auto;
`;

const TodoList = () => {
  const { ids, entities } = useTodoState();
  
  return (
    <Container>
      <Wrapper>
        {ids.map((todoID: string) => {
          const todo = entities[todoID];
          return (
            <Todo key={todo.id} {...todo} />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default TodoList;
