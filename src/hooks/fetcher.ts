import { useQuery, UseQueryOptions } from 'react-query';
import axios from 'axios';
import {
  CarBrandDataType,
  CarBrandType,
  CarDetailsType,
} from '../lib/types/api';

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const useGetPopulars = (options?: UseQueryOptions<CarBrandDataType>) =>
  useQuery<CarBrandDataType>(
    'popular',
    () =>
      fetcher(
        'https://api.staging.myautochek.com/v1/inventory/make?popular=true'
      ),
    options
  );

export const useGetCars = (options?: UseQueryOptions<CarDetailsType>) =>
  useQuery<CarDetailsType>(
    'cars',
    () => fetcher('https://api.staging.myautochek.com/v1/inventory/car/search'),
    options
  );

export const useGetCarById = (carId: string) =>
  useQuery<CarBrandType>(
    ['car', carId],
    () =>
      fetcher(`https://api.staging.myautochek.com/v1/inventory/car/${carId}`),
    {
      enabled: !!carId,
    }
  );

export const useGetCarMedia = (carId: string) =>
  useQuery<CarBrandType>(
    ['carMedia', carId],
    () =>
      fetcher(
        `https://api.staging.myautochek.com/v1/inventory/car_media?carId=${carId}`
      ),
    {
      enabled: false,
    }
  );
