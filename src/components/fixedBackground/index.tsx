import { StyledFixedBackgroundWrapper } from './styles';
import FixedCard from './FixedCard';

const FixedBackground = () => (
  <StyledFixedBackgroundWrapper>
    <FixedCard
      firstHeading="Smooth, Rich & Loud Audio"
      secondHeading="Branded Headphones"
      thirdHeading="Sale up to 25% off all in store"
      image="./images/off1.png"
    />
    <FixedCard
      firstHeading="A Bigger Phone"
      secondHeading="Smart Phones 5"
      thirdHeading="Free shipping order over $100"
      image="./images/off2.png"
    />
  </StyledFixedBackgroundWrapper>
);

export default FixedBackground;
