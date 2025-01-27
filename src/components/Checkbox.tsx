import styled from 'styled-components';

import { CheckboxType } from '../types';

const CheckboxWrapper = styled.label`
`;

const CheckboxEl = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  position: relative;
  top: 0.5rem;
  margin: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--colors-ui-border);
  border-radius: var(--radii);

  &:hover {
    cursor: pointer;
  }

  &:checked {
    background-color: var(--colors-ui-border);

    &::after {
      content: '';
      position: absolute;
      left: 10px;
      top: 6px;
      width: 7px;
      height: 11px;
      border: solid white;
      border-width: 0 0.2rem 0.2rem 0;
      transform: rotate(45deg);
    }
  }
`;

const Checkbox = ({ checked, onChange }: CheckboxType) => {
  return (
    <CheckboxWrapper>
      <CheckboxEl type="checkbox" checked={checked} onChange={onChange} />
    </CheckboxWrapper>
  );
};

export default Checkbox;
