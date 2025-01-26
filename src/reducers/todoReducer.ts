/* eslint-disable @typescript-eslint/no-unused-vars */
type Action =
  | { type: 'ADD_TODO'; payload: { id: string; title: string } }
  | { type: 'REMOVE_TODO'; payload: { id: string } };

type Entity = {
  id: string;
  title: string;
  checked: boolean;
};

type State = {
  entities: { [key: string]: Entity };
  ids: string[];
};

export const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, title } = action.payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { id, title, checked: false },
        },
        ids: [...state.ids, id],
      };
    }
    case 'REMOVE_TODO': {
      const { id } = action.payload;
      const { [id]: _, ...remainingEntities } = state.entities;
      return {
        ...state,
        entities: remainingEntities,
        ids: state.ids.filter((existingId) => existingId !== id),
      };
    }
    default:
      return state;
  }
};
