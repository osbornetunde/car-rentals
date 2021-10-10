import { useQuery, UseQueryOptions } from 'react-query';
import axios from 'axios';
import {
  CarBrandDataType,
  CarBrandType,
  CarDetailsType,
  CardIDetails,
  CardMediaType,
} from '../lib/types/api';

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const getCars = async (page: number, size: number) =>
  fetcher(
    `https://api.staging.myautochek.com/v1/inventory/car/search?currentPage=${page}&pageSize=${size}`
  );

export const useGetPopulars = (options?: UseQueryOptions<CarBrandDataType>) =>
  useQuery<CarBrandDataType>(
    'popular',
    () =>
      fetcher(
        'https://api.staging.myautochek.com/v1/inventory/make?popular=true'
      ),
    options
  );

export const useGetCars = (
  page: number,
  size: number,
  options?: UseQueryOptions<CarDetailsType>
) => useQuery<CarDetailsType>('cars', () => getCars(page, size), options);

export const useGetCarById = (carId: string) =>
  useQuery<CardIDetails>(
    ['car', carId],
    () =>
      fetcher(`https://api.staging.myautochek.com/v1/inventory/car/${carId}`),
    {
      enabled: !!carId,
    }
  );

export const useGetCarMedia = (carId: string) =>
  useQuery<CardMediaType>(
    ['carMedia', carId],
    () =>
      fetcher(
        `https://api.staging.myautochek.com/v1/inventory/car_media?carId=${carId}`
      ),
    {
      enabled: false,
    }
  );
