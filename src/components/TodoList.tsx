import styled from 'styled-components';

import { Container } from './Container';
import Todo from './Todo';
import { useTodoState, useTodoDispatch } from '../context/todosContext';

const Wrapper = styled.section`
  padding: 3rem;
  max-width: 75rem;
  margin: 0 auto;
`;

const NoTodos = styled.h2`
  position: relative;
  top: 7rem;
  font-size: var(--fs-md-lg);
  color: var(--colors-text-alt);
  text-align: center;
`;

const TodoList = () => {
  const dispatch = useTodoDispatch();
  const { ids, entities, filter } = useTodoState();
  
  const handleToggle = (id: string) => dispatch({ type: 'TOGGLE_STATUS', payload: { id } }); 
  const handleRemove = (id: string) => dispatch({ type: 'REMOVE_TODO', payload: { id } });  

  const filteredTodos = ids
    .map((id) => entities[id])
    .filter((todo) => {
      switch (filter) {
        case 'done':
          return todo.checked;
        case 'undone':
          return !todo.checked;
        case 'all':
        default:
          return true;
      }
    });

  return (
    <Container>
      <Wrapper>
        {
          filteredTodos.length < 1 ? (
            <NoTodos>
              здесь пока пусто...
            </NoTodos>) :
          (filteredTodos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                onChange={() => handleToggle(todo.id)}
                onClick={() => handleRemove(todo.id)}
              />
            );
          }))
        }
      </Wrapper>
    </Container>
  );
};

export default TodoList;
