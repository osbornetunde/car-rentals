import styled from 'styled-components';

const StyledSidebarWrapper = styled.section`
  background: #f9f9f9;
  width: 35%;
  padding: 3rem;

  h4 {
    color: #f45c5d;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .search-container {
    display: flex;
    margin-bottom: 1rem;
  }

  .price-section {
    margin-block: 2rem;
    border-top: 1px solid #ccc;
    padding-top: 1rem;

    h3 {
      font-size: 1.8rem;
      color: #f45c5d;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.5rem;
      color: var(--primary-black);
      margin-bottom: 1rem;
      cursor: pointer;
      display: flex;
      gap: 0.5rem;
      align-items: flex-end;

      span {
        margin-left: 2rem;
      }
    }
  }

  .review span {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    gap: 1rem;
  }
`;

export { StyledSidebarWrapper };
