import { createContext, useReducer, useContext } from 'react';
import { todoReducer } from '../reducers/todoReducer';

type Entity = {
  id: string;
  title: string;
  checked: boolean;
};

type State = {
  entities: { [key: string]: Entity };
  ids: string[];
};

type Action =
  | { type: 'ADD_TODO'; payload: { id: string; title: string } }
  | { type: 'REMOVE_TODO'; payload: { id: string } }
  | { type: 'TOGGLE_STATUS'; payload: { id: string } };

type Dispatch = (action: Action) => void;

type TodoProviderProps = { children: React.ReactNode };

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const initialState: State = {
  entities: {},
  ids: [],
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useTodoState must be used within a TodoProvider');
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error('useTodoDispatch must be used within a TodoProvider');
  }
  return context;
};