type CardPropType = {
  firstHeading: string;
  secondHeading: string;
  thirdHeading: string;
  image: string;
};
const FixedCard = (props: CardPropType) => {
  const { firstHeading, secondHeading, thirdHeading, image } = props;
  return (
    <div className="card-wrapper">
      <div className="card-details">
        <p className="first-heading">{firstHeading}</p>
        <p className="second-heading">{secondHeading}</p>
        <p className="third-heading">{thirdHeading}</p>
      </div>
      <div className="image-wrapper">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default FixedCard;
