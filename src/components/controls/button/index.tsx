import Link from 'next/link';
import { StyledButton, StyledLinkButton } from './styles';

type ButtonType = {
  name: string;
  href?: any | unknown;
  action?: () => void;
  [k: string]: string | boolean | undefined | (() => void);
};

export const Button = ({ name, action, ...rest }: ButtonType) => (
  <StyledButton onClick={action} {...rest}>
    {name}
  </StyledButton>
);

export const LinkButton = ({ name, href, ...rest }: ButtonType) => (
  <Link href={href} passHref>
    <StyledLinkButton href={href} {...rest}>
      {name}
    </StyledLinkButton>
  </Link>
);
