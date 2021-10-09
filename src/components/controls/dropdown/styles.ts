import { FC } from 'react';
import styled from 'styled-components';
import {
  Dropdown,
  DropdownItemProps,
  DropdownMenuProps,
  DropdownProps,
  FormGroup,
  FormGroupProps,
} from 'reactstrap';
import { StyledInputContainerProp } from '../../../lib/interface/IStyles';

const DropdownContainer = styled(FormGroup)<
  StyledInputContainerProp & FormGroupProps
>`
  width: ${(props) => props.width || '100%'} !important;

  label {
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 0.1rem !important;
  }
`;
const StyledDropdown: FC<
  DropdownProps & DropdownItemProps & DropdownMenuProps
> = styled(Dropdown)`
  button {
    height: ${(props) => props.height || '3.5rem'};
    min-width: ${(props) => props.width || '100%'} !important;
    font-family: var(--primary-font);
    background: var(--primary-white);
    font-size: 1.4rem;
    color: #000000;
  }
`;

export { StyledDropdown, DropdownContainer };
