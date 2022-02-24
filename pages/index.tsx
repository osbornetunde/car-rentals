import type { FC } from 'react';
import HomePage from './homepage';
import { CarBrandDataType, CarDetailsType } from '../src/lib/types/api';

const Home: FC<{ data: CarDetailsType; popularCarData: CarBrandDataType }> = ({
  data,
  popularCarData,
}) => <HomePage data={data} popularCarData={popularCarData} />;

export async function getServerSideProps() {
  const res = await fetch(
    'https://api.staging.myautochek.com/v1/inventory/car/search?currentPage=1&pageSize=10'
  );
  const data = await res.json();
  const popularCarResponse = await fetch(
    'https://api.staging.myautochek.com/v1/inventory/make?popular=true'
  );
  const popularCarData = await popularCarResponse.json();
  return { props: { data, popularCarData } };
}

export default Home;
