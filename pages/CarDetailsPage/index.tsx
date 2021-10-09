import { useRouter } from 'next/router';
import { StyledBrandWrapper } from '../../src/components/BrandCard/styles';
import { useGetCarById } from '../../src/hooks/fetcher';

const CarDetailsPage = () => {
  const router: any = useRouter();
  console.log(router.query);
  const { data } = useGetCarById(router?.query?.id);
  console.log('=====>', data);
  return <StyledBrandWrapper>hello</StyledBrandWrapper>;
};

export default CarDetailsPage;
