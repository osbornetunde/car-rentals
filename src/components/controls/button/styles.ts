import styled from 'styled-components';
import { Button } from 'reactstrap';

type ButtonProps = {
  background?: string;
  color?: string;
  fontFamily?: string;
};

const StyledButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => props.background || 'var(--primary-color)'};
  border-radius: 0;
  color: ${(props) => props.color || 'var(--primary-white)'};
  font-family: ${(props) => props.fontFamily || 'var(--primary-font)'};
  height: 100%;
  width: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  border: none;
  cursor: pointer;
`;

const StyledLinkButton = styled.a<ButtonProps>`
  background: ${(props) => props.background || 'var(--primary-color)'};
  border-radius: 0.4rem;
  color: ${(props) => props.color || 'var(--primary-white)'};
  font-family: ${(props) => props.fontFamily || 'var(--primary-font)'};
  height: 100%;
  width: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  padding: 13px;
  outline: none;
  box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 45%);
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  &:hover {
    background: white;
    color: var(--primary-color);
  }
`;
export { StyledButton, StyledLinkButton };
