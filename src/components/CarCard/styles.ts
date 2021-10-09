import styled from 'styled-components';

const StyledCarWrapper = styled.div<{ pointer?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 13rem;
  height: 12rem;
  margin-block: 3rem;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.pointer ? 'pointer' : 'default')};
  padding: 2rem 0.5rem;

  &:hover {
    box-shadow: ${(props) => (props.pointer ? '1px 2px 5px #cccccc' : 'none')};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }

  p {
    padding-top: 1rem;
    font-size: 1.4rem;
    color: var(--primary-black);
  }
`;

export { StyledCarWrapper };
