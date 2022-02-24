import axios from 'axios';

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export const getCars = async (page: number, size: number) =>
  fetcher(
    `https://api.staging.myautochek.com/v1/inventory/car/search?currentPage=${page}&pageSize=${size}`
  );
