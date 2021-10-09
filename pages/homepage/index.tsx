import { HomePageContainer, StyledCard } from './styles';
import { useGetCars, useGetPopulars } from '../../src/hooks/fetcher';
import { CarBrandType, CarType } from '../../src/lib/types/api';
import BrandCard from '../../src/components/BrandCard';
import CarCard from '../../src/components/CarCard';

const HomePage = () => {
  const { data } = useGetPopulars();
  const { data: carData } = useGetCars();
  return (
    <HomePageContainer>
      <h1>
        <span>O</span>
        ur <span>N</span>
        ew <span>P</span>
        roduct
      </h1>
      <section className="content-section">
        <StyledCard>
          <h4>Brands</h4>
          <div className="card-item">
            {data?.makeList?.map((item: CarBrandType) => (
              <div key={item.id}>
                <BrandCard img={item.imageUrl} name={item.name} />
              </div>
            ))}
          </div>
        </StyledCard>
        <StyledCard height="100rem">
          <h4>Cars</h4>
          <div className="card-item">
            {carData?.result?.map((item: CarType) => (
              <div key={item.id}>
                <CarCard {...item} />
              </div>
            ))}
          </div>
        </StyledCard>
      </section>
    </HomePageContainer>
  );
};

export default HomePage;
