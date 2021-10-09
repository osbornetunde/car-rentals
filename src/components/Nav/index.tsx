import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledDropdown } from './styles';
import { Dropdown } from '../controls/dropdown';
import { OptionsType } from '../../lib/types/input';
import {
  CarouselPropsType,
  CategoriesDropdownType,
} from '../../lib/types/forms';
import NavMenu from './NavMenu';
import Carousel from '../controls/carousel';

const categoriesOption: OptionsType[] = [
  {
    value: '4-Door Sedans',
    label: '4-Door Sedans',
  },
  { value: '2-Door Coupes', label: '2-Door Coupes' },
  { value: 'Station Wagons', label: 'Station Wagons' },
  { value: 'Convertibles', label: 'Convertibles' },
  { value: 'Sports Cars', label: 'Sports Cars' },
  { value: 'SUV', label: 'SUV' },
  { value: 'Mini-Vans', label: 'Mini-Vans' },
];

const Nav = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<CategoriesDropdownType>();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onSelect = (value: CategoriesDropdownType) => {
    console.log('selected', value);
  };

  useEffect(() => {
    handleSubmit(onSelect);
  }, []);

  return (
    <StyledDropdown>
      <div className="dropdown-container">
        <Dropdown
          name="categories"
          placeholder="All Categories"
          errors={errors}
          control={control}
          options={categoriesOption}
          isOpen={dropdownOpen}
          toggle={toggle}
          width="20rem"
          height="5rem"
        />
      </div>
      <div className="nav-section">
        <NavMenu />
      </div>
    </StyledDropdown>
  );
};

export default Nav;
