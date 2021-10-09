import { StyledBrandWrapper } from './styles';

type BrandCardPropsType = {
  img: string;
  name: string;
};
const BrandCard = (props: BrandCardPropsType) => {
  const { img, name } = props;
  return (
    <StyledBrandWrapper>
      <img src={img} alt={name} />
      <p>{name}</p>
    </StyledBrandWrapper>
  );
};

export default BrandCard;
