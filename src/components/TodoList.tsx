import styled from 'styled-components';

import { Container } from './Container';
import Todo from './Todo';
import { useTodoState, useTodoDispatch } from '../context/todosContext';

const Wrapper = styled.section`
  padding: 3rem;
  max-width: 75rem;
  margin: 0 auto;
`;

const TodoList = () => {
  const dispatch = useTodoDispatch();
  const { ids, entities } = useTodoState();
  
  const handleToggle = (id: string) => dispatch({ type: 'TOGGLE_STATUS', payload: { id } }); 
  const handleRemove = (id: string) => dispatch({ type: 'REMOVE_TODO', payload: { id } });

  return (
    <Container>
      <Wrapper>
        {ids.map((todoID: string) => {
          const todo = entities[todoID];
          return (
            <Todo
              key={todo.id}
              {...todo}
              onChange={() => handleToggle(todo.id)}
              onClick={() => handleRemove(todo.id)}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default TodoList;
