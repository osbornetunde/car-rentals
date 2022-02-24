import { FC, useEffect, useState } from 'react';
import { Badge } from 'reactstrap';
import ReactPlayer from 'react-player/lazy';
import {
  CardIDetails,
  CarMediaItemType,
  CardMediaType,
} from '../../src/lib/types/api';
import { HomePageContainer } from '../../src/styles/homepage.styles';
import { StyledCarDetailsWrapper } from '../../src/styles/carDetails.styles';
import currencyFormat from '../../utils/NairiaFormatter';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { CarouselPropsType } from '../../src/lib/types/forms';
import Carousel from '../../src/components/controls/carousel';

const CarDetailsPage: FC<{
  data: CardIDetails;
  carMediaData: CardMediaType;
}> = ({ data, carMediaData }) => {
  const [images, setImages] = useState<CarouselPropsType[]>();
  const [video, setVideo] = useState<CarMediaItemType[]>();

  useEffect(() => {
    if (carMediaData) {
      const carouselImage = carMediaData?.carMediaList
        ?.filter((media: CarMediaItemType) => !media.url.includes('mp4'))
        .map((media: CarMediaItemType) => ({
          src: `${media.url}`,
          altText: `${media.name}`,
          caption: `${media.name}`,
        }));

      const currentVideo = carMediaData?.carMediaList?.filter(
        (media: CarMediaItemType) => media.url.includes('mp4')
      );
      setVideo(currentVideo);
      setImages(carouselImage);
    }
  }, [carMediaData]);

  return (
    <HomePageContainer>
      <h1>Car Details</h1>
      <StyledCarDetailsWrapper>
        <div className="image-section">
          {data?.imageUrl ? (
            <img src={data?.imageUrl} alt={data?.carName} />
          ) : (
            <img src={data?.bodyType.imageUrl} alt={data?.bodyType.name} />
          )}
          <div className="image-list">
            {images && <Carousel items={images} height="10rem" />}
          </div>
        </div>
        <div className="details-section">
          <p className="name">
            {data?.carName}
            {data?.sold && <Badge color="secondary">Sold Out</Badge>}
          </p>
          <p className="price-wrapper">
            <span>{currencyFormat.format(Number(data?.marketplacePrice))}</span>
            <del>
              {currencyFormat.format(Number(data?.marketplaceOldPrice))}
            </del>
            <label>Free delivery</label>
          </p>
          <p className="location">{`${data?.city}, ${data?.state}, ${data?.country}`}</p>
          {data?.engineType && (
            <p>
              <span className="label">Engine-</span>
              {capitalizeFirstLetter(data?.engineType)}
            </p>
          )}
          {data?.fuelType && (
            <p>
              <span className="label">Fuel-</span>
              {capitalizeFirstLetter(data?.fuelType)}
            </p>
          )}
          {data?.transmission && (
            <p>
              <span className="label">Transmission-</span>
              {capitalizeFirstLetter(data?.transmission)} {data.model.wheelType}
            </p>
          )}
          {data?.exteriorColor && (
            <p>
              <span className="label">Exterior Color-</span>
              {capitalizeFirstLetter(data?.exteriorColor)}
            </p>
          )}
          {data?.interiorColor && (
            <p>
              <span className="label">Interior Color-</span>
              {capitalizeFirstLetter(data?.interiorColor)}
            </p>
          )}
          {data?.ownerType && (
            <p>
              <span className="label">Owner-</span>
              {capitalizeFirstLetter(data?.ownerType)}
            </p>
          )}
          {data?.sellingCondition && (
            <p>
              <span className="label">Condition-</span>
              {capitalizeFirstLetter(data?.sellingCondition)}
            </p>
          )}
          {data?.mileage && data?.mileageUnit && (
            <p>
              <span className="label">Mileage-</span>
              {`${data?.mileage}${data?.mileageUnit}`}
            </p>
          )}
          {data?.hasFinancing && (
            <p>
              <span className="label">Monthly Payment-</span>
              {currencyFormat.format(data?.installment)}
            </p>
          )}
        </div>
      </StyledCarDetailsWrapper>
      <div className="video-container">
        {video &&
          video?.length > 0 &&
          video?.map((item) => (
            <ReactPlayer
              key={item.id}
              url={item.url}
              controls
              height="20rem"
              width="40rem"
            />
          ))}
      </div>
    </HomePageContainer>
  );
};

export default CarDetailsPage;
