import styled from 'styled-components';

const StyledCarWrapper = styled.div<{ pointer?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: auto;
  margin-inline: 1rem;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.pointer ? 'pointer' : 'default')};
  padding: 2rem 0.5rem;

  &:hover {
    box-shadow: ${(props) => (props.pointer ? '1px 2px 5px #cccccc' : 'none')};
  }

  .image-placeholder {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.4rem;
      color: var(--primary-black);
      font-weight: 900;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .item-name {
    padding-top: 1rem;
    font-size: 1.7rem;
    color: #000;
    letter-spacing: 1px;
    width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }

  .price-wrapper {
    display: flex;
    margin-bottom: 1rem;

    .item-price {
      font-size: 1.3rem;
      color: #d60404;
      font-weight: 500;
    }
    del {
      margin-left: 0.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--primary-black);
    }
  }
`;

export { StyledCarWrapper };
