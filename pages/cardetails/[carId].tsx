import { FC } from 'react';
import CarDetailsPage from '../CarDetailsPage';
import { CardIDetails, CardMediaType } from '../../src/lib/types/api';

const CarDetail: FC<{
  data: CardIDetails;
  carMediaData: CardMediaType;
}> = ({ data, carMediaData }) => (
  <CarDetailsPage data={data} carMediaData={carMediaData} />
);

export async function getServerSideProps({
  query,
}: {
  query: { carId: string };
}) {
  const res = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car/${query.carId}`
  );
  const data = await res.json();

  const carMediaResponse = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car_media?carId=${query.carId}`
  );
  const carMediaData = await carMediaResponse.json();
  return { props: { data, carMediaData } };
}
export default CarDetail;
