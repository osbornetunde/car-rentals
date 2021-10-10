import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import { StyledSidebarWrapper } from './styles';
import { Input } from '../controls/input';
import { Button } from '../controls/button';

const Sidebar = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSearch = (values: { Search: string }) => {
    console.log(values);
  };
  return (
    <StyledSidebarWrapper>
      <h4>Search here...</h4>
      <div className="search-container">
        <span className="input-container">
          <Input
            control={control}
            errors={errors}
            type="text"
            placeholder="Product name..."
            name="search"
            height="3.5rem"
          />
        </span>
        <span className="button-container">
          <Button
            name="Search"
            action={() => handleSubmit(onSearch)}
            disabled={!isValid}
            height="3.5rem"
            background="var(--primary-color)"
          />
        </span>
      </div>
      <div className="price-section">
        <h3>Price</h3>
        <p>Under $1000</p>
        <p>$1000 - $5000</p>
        <p>$5000 - $10000</p>
        <p>$10000 - $20000</p>
        <p>$20000 - $30000</p>
        <p>Over $30000</p>
      </div>
      <div className="price-section">
        <h3>Discount</h3>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>5% or more</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>5% or more</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>10% or more</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>20% or more</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span> 30% or more</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>40% or more</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>50% or more</span>
        </p>
      </div>
      <div className="price-section review">
        <h3>Customer Review</h3>
        <span>
          <ReactStars count={5} size={24} activeColor="#ffd700" />5
        </span>
        <span>
          <ReactStars
            count={4}
            size={24}
            activeColor="#ffd700"
            isHalf
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
          />
          4
        </span>
        <span>
          <ReactStars
            count={3.5}
            size={24}
            activeColor="#ffd700"
            isHalf
            emptyIcon={<i className="far fa-star" />}
            halfIcon={<i className="fa fa-star-half-alt" />}
          />
          3.5
        </span>
        <span>
          <ReactStars count={3} size={24} activeColor="#ffd700" />3
        </span>
        <span>
          <ReactStars count={2} size={24} activeColor="#ffd700" isHalf />2
        </span>
      </div>
      <div className="price-section">
        <h3>Electronics</h3>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Accessories</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Cameras & Photography</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Car & Vehicle Electronics</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Computers & Accessories</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span> GPS & Accessories</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Headphones</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Home Audio</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Home Theater, TV & Video</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Mobiles & Accessories</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Portable Media Players</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Tablets</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Telephones & Accessories</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Wearable Technology</span>
        </p>
      </div>
      <div className="price-section">
        <h3>Cash On Delivery</h3>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Eligible for Cash On Delivery</span>
        </p>
      </div>
      <div className="price-section">
        <h3>New Arrivals</h3>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Last 30 days</span>
        </p>
        <p>
          <Input
            control={control}
            errors={errors}
            type="checkbox"
            name="5%"
            width=".5rem"
            height=".5rem"
          />
          <span>Last 90 days</span>
        </p>
      </div>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
