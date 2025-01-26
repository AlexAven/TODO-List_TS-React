import styled from 'styled-components';

const RadioLabel = styled.label<{ $ischecked: boolean }>`
  padding: 0.5rem 1.5rem;
  border: 1px solid var(--colors-ui-border);
  cursor: pointer;
  box-shadow: 4px 4px #827f7f;
  background-color: ${({ $ischecked }) =>
  $ischecked ? 'var(--colors-ui-filters)' : 'transparent'};
    
  &:hover {
    background-color: ${({ $ischecked }) =>
      $ischecked ? 'var(--colors-ui-filters)' : 'var(--colors-ui-filters-hover)'};
  }
  `;

const RadioEl = styled.input.attrs({ type: 'radio', name: 'filter' })`
  display: none;
  `;

const RadioTitle = styled.span`
  color: var(--colors-text-alt);
  white-space: nowrap;
`;


interface Radio {
  title: string,
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Radio = ({ title, onChange, value, checked, name }: Radio) => {
  return (
    <RadioLabel $ischecked={checked}>
      <RadioEl value={value} onChange={onChange} checked={checked} name={name} />
      <RadioTitle>{title}</RadioTitle>
    </RadioLabel>
  );
};

export default Radio;
