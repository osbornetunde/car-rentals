import {
  FaMapMarker,
  FaShoppingCart,
  FaTruck,
  FaPhone,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import HeaderSearch from '../HeaderSearch';
import Nav from '../Nav';
import HeaderWrapper from './styles';
import Carousel from '../controls/carousel';
import { CarouselPropsType } from '../../lib/types/forms';

const items: CarouselPropsType[] = [
  {
    src: '/images/b1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: '/images/b2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: '/images/b3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
  {
    src: '/images/b4.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
];

const Header = () => (
  <>
    <HeaderWrapper>
      <span>
        <p>Offer Zone Top Deals & Discounts</p>
        <FaShoppingCart />
      </span>
      <span>
        <FaMapMarker />
        <p>Select Location</p>
      </span>
      <span>
        <FaTruck />
        <p>Track Order</p>
      </span>
      <span>
        <FaPhone />
        <p>001 234 5678</p>
      </span>
      <span>
        <FaSignInAlt />
        <p>Log In</p>
      </span>
      <span>
        <FaSignOutAlt />
        <p>Register</p>
      </span>
    </HeaderWrapper>
    <HeaderSearch />
    <Nav />
    <Carousel items={items} />
  </>
);
export default Header;
