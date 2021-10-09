import styled from 'styled-components';
import Link, { LinkProps } from 'next/link';
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

const StyledLinkButton = styled(Link)<ButtonProps & LinkProps>`
  background: ${(props) => props.background || 'var(--primary-color)'};
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
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export { StyledButton, StyledLinkButton };
