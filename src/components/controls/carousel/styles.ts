import styled from 'styled-components';

const CarouselWrapper = styled.div`
  width: 100%;
  height: 50rem;

  .carousel {
    height: 100%;

    .carousel-inner {
      height: 100%;

      .carousel-item {
        height: 100%;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export { CarouselWrapper };
