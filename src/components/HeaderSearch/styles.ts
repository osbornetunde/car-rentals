import styled from 'styled-components';
import { device } from '../../../utils/device';

const HeaderSearchWrapper = styled.section`
  display: flex;
  background-color: var(--primary-white);
  width: 100%;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 15rem;
  }
  .logo {
    display: flex;

    svg {
      fill: #0070f3;
      font-size: 4rem;
    }

    p {
      font-size: 3rem;
      color: #0070f3;
    }
  }

  .search-container {
    display: flex;
    align-items: center;
    width: 30rem;

    .input-container {
      height: 5rem;
      width: 75%;
      margin-right: 1rem;
    }
    .button-container {
      height: 5rem;
      width: 25%;
    }
    
    .cart-container {
      width: 5rem;
      height: 5rem;
      border-radius: 1rem;
      background-color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      
      svg {
        fill: var(--primary-white);
        font-size: 2rem;
      }
    }
    @media ${device.laptop} {
      justify-content: space-between;
      width: 80rem;

      .button-container {
        height: 5rem;
        width: 15%;
      }
    }
    }
  }
`;

export default HeaderSearchWrapper;
