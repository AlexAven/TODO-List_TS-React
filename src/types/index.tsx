export interface MainProps {
  children: React.ReactNode;
};

export type FilterType = 'all' | 'done' | 'undone';

export type CheckboxType = {
  checked: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  title?: string,
};

export type Action =
  | { type: 'ADD_TODO'; payload: { id: string; title: string } }
  | { type: 'REMOVE_TODO'; payload: { id: string } }
  | { type: 'TOGGLE_STATUS'; payload: { id: string } }
  | { type: 'SET_FILTER'; payload: { filter: FilterType } };

export type Dispatch = (action: Action) => void;

export type StateEntity = {
  id: string;
  title: string;
  checked: boolean;
};

export type State = {
  entities: { [key: string]: StateEntity };
  ids: string[];
};