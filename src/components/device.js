const size = {
    mobileS: '323px',
    mobileM: '376px',
    mobileL: '426px',
    tablet: '768px',
    laptop: '1024px',
    // laptopL: '1440px',
    // desktop: '2560px'
  }


  export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    // laptopL: `(min-width: ${size.laptopL})`,
    // desktop: `(min-width: ${size.desktop})`,
    // desktopL: `(min-width: ${size.desktop})`
  };