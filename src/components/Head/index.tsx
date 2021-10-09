import NextHead from 'next/head';

const defaultDescription = 'Cheap and affordable car with quality in mind';

const Head = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{defaultDescription}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
);

export default Head;
