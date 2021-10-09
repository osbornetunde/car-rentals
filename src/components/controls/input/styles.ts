import { FC } from 'react';
import styled from 'styled-components';
import { Input, FormGroup, InputProps } from 'reactstrap';
import { StyledInputContainerProp } from '../../../lib/interface/IStyles';

const InputContainer = styled(FormGroup)<StyledInputContainerProp>`
  width: ${(props) => props.width || '100%'};

  label {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

const StyledInput: FC<InputProps> = styled(Input)`
  height: ${(props) => props.height || '3.5rem'};
  width: 100%;
  font-family: var(--regular-font);
  background: var(--primary-white) !important;
  font-size: 1.4rem;
  line-height: 1.6rem !important;
  border-radius: 0;
  box-shadow: 0 0.1rem 0.2rem 0 rgb(0 0 0 / 22%);
  padding: 1rem;

  &::placeholder {
    color: #191e21;
    font-weight: 500;
  }
`;

export { InputContainer, StyledInput };
