/* eslint-disable @typescript-eslint/no-unused-vars */
import { Action, State } from '../types';

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
    case 'TOGGLE_STATUS': {
      const { id } = action.payload;
      const { [id]: current } = state.entities;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...current, checked: !current.checked },
        },
      };
    }
    case 'SET_FILTER': {
      const { filter } = action.payload;
      return {
        ...state,
        filter,
      };
      }
    default:
      return state;
  }
};
