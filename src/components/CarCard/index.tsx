import { StyledCarWrapper } from './styles';
import { CarType } from '../../lib/types/api';
import { LinkButton } from '../controls/button';
import { currencyFormatInt } from '../../../utils/NairiaFormatter';

const CarCard = (props: CarType) => {
  const { imageUrl, title, marketplacePrice, marketplaceOldPrice, id } = props;

  return (
    <StyledCarWrapper pointer>
      {imageUrl ? (
        <img src={imageUrl} alt={title} />
      ) : (
        <span className="image-placeholder">
          {' '}
          <p>No Image</p>
        </span>
      )}
      <p className="item-name">{title}</p>
      <span className="price-wrapper">
        <p className="item-price">{currencyFormatInt(marketplacePrice)}</p>
        <del>{currencyFormatInt(marketplaceOldPrice)}</del>
      </span>
      <span>
        <LinkButton name="Buy" href={`/cardetails/${id}`} />
      </span>
    </StyledCarWrapper>
  );
};

export default CarCard;
