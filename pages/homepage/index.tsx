import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Spinner,
} from 'reactstrap';
import { HomePageContainer, StyledCard } from './styles';
import { getCars, useGetPopulars } from '../../src/hooks/fetcher';
import { CarBrandType, CarDetailsType, CarType } from '../../src/lib/types/api';
import BrandCard from '../../src/components/BrandCard';
import CarCard from '../../src/components/CarCard';

const HomePage = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const [size, setPageSize] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { data } = useGetPopulars();

  const {
    data: carData,
    isFetching,
    isPreviousData,
  } = useQuery<CarDetailsType>(
    ['cars', page, size],
    () => getCars(page + 1, size),
    {
      keepPreviousData: true,
    }
  );

  console.log('data', carData);

  useEffect(() => {
    if (carData) {
      const { pagination } = carData;
      const total = Math.ceil(pagination?.total / pagination?.pageSize);
      setTotalPage(total);
    }
  }, [carData]);
  useEffect(() => {
    (async () => {
      if (totalPage > 0) {
        await queryClient.prefetchQuery(['cars', page + 1, size], () =>
          getCars(page + 1, size)
        );
      }
    })();
  }, [carData, page, size, queryClient]);

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
        <StyledCard height="auto">
          <h4>Cars</h4>
          <div className="card-item">
            {carData?.result?.map((item: CarType) => (
              <div key={item.id}>
                <CarCard {...item} />
              </div>
            ))}
          </div>
          <div className="card-footer">
            <div>
              Current Page:
              {page + 1}
            </div>
            <div className="button-container">
              <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 0}
              >
                Previous Page
              </button>{' '}
              <button
                onClick={() => {
                  setPage((old) => (totalPage ? old + 1 : old));
                }}
                disabled={isPreviousData || page === totalPage}
              >
                Next Page
              </button>
            </div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>{size}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setPageSize(5)}>5</DropdownItem>
                <DropdownItem onClick={() => setPageSize(10)}>10</DropdownItem>
                <DropdownItem onClick={() => setPageSize(20)}>20</DropdownItem>
                <DropdownItem onClick={() => setPageSize(30)}>30</DropdownItem>
                <DropdownItem onClick={() => setPageSize(40)}>40</DropdownItem>
                <DropdownItem onClick={() => setPageSize(50)}>50</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {isFetching ? <Spinner type="grow" color="primary" /> : null}
          </div>
        </StyledCard>
      </section>
    </HomePageContainer>
  );
};

export default HomePage;
