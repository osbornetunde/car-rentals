import styled from 'styled-components';

const StyledFixedBackgroundWrapper = styled.section`
  background: url('./images/bg.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 40rem;
  display: flex;
  padding: 6rem 10rem;
  gap: 5rem;
  justify-content: center;

  .card-wrapper {
    display: flex;
    width: 60rem;
    height: 30rem;
    padding: 3rem 5rem;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    background: var(--primary-white);

    .card-details {
      flex-direction: column;
      align-items: center;
      width: 100%;

      .first-heading {
        font-size: 1.8rem;
        color: #f44336;
      }

      .second-heading {
        font-size: 2.8rem;
        margin-top: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      .third-heading {
        margin: 0;
        letter-spacing: 1px;
        font-size: 1.3rem;
        line-height: 1.9;
        color: #999;
        font-family: 'Open Sans', sans-serif;
      }
    }
    .image-wrapper {
      img {
        height: 50%;
        width: 50%;
        object-fit: contain;
      }
    }
  }
`;

export { StyledFixedBackgroundWrapper };
