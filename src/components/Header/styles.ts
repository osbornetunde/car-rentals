import styled from 'styled-components';
import { device } from '../../../utils/device';

const HeaderWrapper = styled.section`
  align-items: center;
  background-color: var(--primary-color);
  display: flex;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 2rem;

  @media ${device.laptop} {
    justify-content: space-between;
  }

  span {
    display: flex;
    padding-right: 2rem;
    &:not(:first-child, :last-child) {
      border-right: 1px solid var(--primary-white);
    }

    svg {
      fill: var(--primary-white);
      margin-right: 1rem;
      font-size: 1.6rem;
    }
    p {
      font-size: 1.3rem;
      color: var(--primary-white);
    }

    p:first-child {
      font-size: 1.5rem;
    }
  }
`;

export default HeaderWrapper;
