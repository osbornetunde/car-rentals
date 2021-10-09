const size = {
  mobileS: '26.5em', // 424px
  mobileM: '36em', // 576px
  mobileL: '48em', // 768px
  tablet: '62em', // 992px
  laptop: '64em', // 1024px
  laptopL: '75em', // 1200px
  desktop: '160em', // 2560px
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
