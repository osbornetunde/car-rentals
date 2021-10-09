import styled from 'styled-components';
import { device } from '../../../utils/device';

const StyledDropdown = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  background: #f8f9fa;

  .dropdown-container {
    width: 100%;
  }

  .nav-section {
    display: none;
  }

  @media ${device.laptop} {
    flex-direction: row;
    padding: 2rem 15rem;
    align-items: center;
    justify-content: space-between;

    .dropdown-container {
      width: 15rem;
    }

    .nav-section {
      display: flex;

      .nav > .nav-item {
        margin-inline: 1rem;
      }

      .nav > .nav-item a {
        color: #000000;
        font-size: 1.3rem;
      }
      .nav > .nav-item a:hover {
        color: var(--primary-black);
      }
    }
  }
`;

export { StyledDropdown };
