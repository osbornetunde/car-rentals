import { StyledCarWrapper } from './styles';
import { CarType } from '../../lib/types/api';
import { LinkButton } from '../controls/button';

const CarCard = (props: CarType) => {
  const { imageUrl, title, marketplacePrice, id } = props;
  return (
    <StyledCarWrapper pointer>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <p>{marketplacePrice}</p>
      <span>
        <LinkButton
          name="Buy"
          href={{ pathname: '/cardetails', query: { id: `${id}` } }}
        />
      </span>
    </StyledCarWrapper>
  );
};

export default CarCard;
