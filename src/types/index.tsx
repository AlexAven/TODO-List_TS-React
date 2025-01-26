export interface MainProps {
  children: React.ReactNode;
};

export type FilterType = 'all' | 'done' | 'undone';

export type CheckboxType = {
  checked: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  title?: string,
};