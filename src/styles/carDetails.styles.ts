import styled from 'styled-components';

const StyledCarDetailsWrapper = styled.section`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  margin: 2rem 0;
  gap: 6rem;

  .image-section {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      min-width: 100%;
      object-fit: contain;
    }

    .image-list {
      display: flex;
      width: 70%;
    }
  }

  .details-section {
    display: flex;
    flex-direction: column;
    width: 65%;
    align-items: flex-start;

    p {
      letter-spacing: 1px;
      font-size: 1.5rem;
      line-height: 1.9;
      color: #000000;
    }

    .name {
      font-size: 2.3rem;
      margin-bottom: 1rem;
    }
    .price-wrapper {
      margin-bottom: 1rem;
      margin: 0;
      color: #999;
      font-family: var(--primary-font);

      span {
        font-size: 1.8rem;
        color: #d60404;
      }

      del {
        font-size: 1.5rem;
        color: #999;
        margin-inline: 0.5rem;
        font-weight: 300;
      }

      label {
        color: #000;
        display: inline-block;
      }
    }

    .location {
      font-size: 1.6rem;
      line-height: 1.9;
    }

    .label {
      margin-right: 1rem;
      font-weight: 600;
    }
  }
`;

export { StyledCarDetailsWrapper };
