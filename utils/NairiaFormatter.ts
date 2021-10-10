const currencyFormat = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  currencyDisplay: 'symbol',
});

export const currencyFormatInt = (value: number) =>
  currencyFormat.format(value).replace(/\.00/g, '');

export default currencyFormat;
