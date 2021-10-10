import { Card } from 'reactstrap';
import styled from 'styled-components';

const HomePageContainer = styled.section`
  padding: 2rem 7rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 3rem;
    font-size: 5rem;
    text-shadow: rgba(0, 0, 0, 0.1) 2px 5px;

    span {
      color: var(--primary-color);
    }
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
`;

const StyledCard = styled(Card)`
  padding: 5rem 3rem;
  width: ${(props) => props.width || '80rem'};
  height: ${(props) => props.height || '70rem'};
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    display: block;
    font-weight: 700;
    font-size: 2.5rem;
    font-style: italic;
    text-align: center;
    margin-bottom: 2rem;
    font-family: var(--regular-font);
  }

  .card-item {
    display: flex;
    flex-wrap: wrap;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .button-container {
      width: 40%;
      button {
        background-color: var(--primary-color);
        color: var(--primary-white);
        border: none;
        height: 3rem;
        border-radius: 1rem;

        &:hover {
          opacity: 0.5;
        }

        &:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
      }
    }
  }
`;
export { HomePageContainer, StyledCard };
