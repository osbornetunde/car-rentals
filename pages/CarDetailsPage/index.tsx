import { useRouter } from 'next/router';
import { useGetCarById } from '../../src/hooks/fetcher';
import { CardIDetails } from '../../src/lib/types/api';
import { HomePageContainer } from '../homepage/styles';
import { StyledCarDetailsWrapper } from './styles';

const CarDetailsPage = () => {
  const router: any = useRouter();
  const { carId } = router.query;
  const { data }: { data?: CardIDetails } = useGetCarById(carId);
  console.log('=====>', data);
  return (
    <HomePageContainer>
      <h1>{data?.carName}</h1>
      <StyledCarDetailsWrapper>hi</StyledCarDetailsWrapper>
    </HomePageContainer>
  );
};

export default CarDetailsPage;
