import Link from 'next/link';
import { AiFillCar } from 'react-icons/ai';
import { FaCartArrowDown } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Input } from '../controls/input';
import { Button } from '../controls/button';
import HeaderSearchWrapper from './styles';
import { SearchInput } from '../../lib/types/forms';

const HeaderSearch = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SearchInput>();

  const onSearch = (value: SearchInput) => {
    console.log('===>', value);
  };
  return (
    <HeaderSearchWrapper>
      <div className="logo">
        <Link href="/">
          <>
            <AiFillCar />
            <p>Car Store</p>
          </>
        </Link>
      </div>
      <div className="search-container">
        <span className="input-container">
          <Input
            control={control}
            errors={errors}
            type="text"
            placeholder="Search"
            name="search"
            height="5rem"
          />
        </span>
        <span className="button-container">
          <Button
            name="Search"
            action={() => handleSubmit(onSearch)}
            disabled={!isValid}
            height="4rem"
            background="#F45C5D"
          />
        </span>
        <span className="cart-container">
          <FaCartArrowDown />
        </span>
      </div>
    </HeaderSearchWrapper>
  );
};

export default HeaderSearch;
