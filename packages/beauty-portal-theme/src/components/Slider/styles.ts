import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 600,
      margin: 0,
      marginBottom: spacing(3),
      marginRight: spacing(3),
    },
    sliderWrapper: {
      position: 'relative',
      [breakpoints.up('md')]: {
        margin: 0,
      },
      '& .swiper-lazy': {
        opacity: 0,
        transition: 'all .3s ease-out',
        '&.swiper-lazy-loaded': {
          opacity: 1,
        },
      },
      '& figure': {
        maxWidth: 752,
      },
      '& picture': {
        display: 'block',
      },
      '& .swiper-pagination': {
        display: 'flex',
        justifyContent: 'center',
        position: 'static',
        marginTop: spacing(2),
        marginBottom: spacing(2),
        [breakpoints.up('md')]: {
          marginTop: spacing(2.5),
          marginBottom: spacing(2.5),
        },
      },
      '& .swiper-pagination-bullet': {
        backgroundColor: palette.grey[20],
        width: 10,
        height: 10,
        [breakpoints.up('md')]: {
          width: 20,
          height: 20,
        },
      },

      '& .swiper-pagination-bullet-active': {
        backgroundColor: palette.common.black,
      },
    },
    copy: {
      backgroundColor: palette.common.white,
      maxWidth: '96%',
      marginTop: spacing(-1.875),
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      zIndex: 1,
      position: 'relative',
      [breakpoints.up('md')]: {
        position: 'absolute',
        top: '50%',
        right: 30,
        transform: 'translateY(-50%)',
        zIndex: 1,
        maxWidth: 462,
        width: 462,
      },
    },
    heading: {
      marginBottom: spacing(1.875),
    },
    copyInner: {
      padding: spacing(2.5),
      [breakpoints.up('md')]: {
        padding: spacing(3),
      },
    },
    slideType: {
      marginBottom: spacing(1),
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: palette.quinary.main,
      fontSize: '.75rem',
      fontWeight: 700,
    },
    callToAction: {
      fontSize: '.875rem',
      fontWeight: 700,
      backgroundColor: palette.primary.main,
      color: palette.common.black,
      paddingTop: spacing(1.25),
      paddingBottom: spacing(1.25),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      display: 'inline-block',

      position: 'relative',
      transition: 'all .3s ease-out',
      transform: 'perspective(1px) translateZ(0)',
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: palette.common.black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '&:hover': {
        color: palette.common.white,
        '&:before': {
          transform: 'scaleX(1)',
        },
      },
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        paddingTop: spacing(1.75),
        paddingBottom: spacing(1.75),
        paddingLeft: spacing(2.5),
        paddingRight: spacing(2.5),
      },
    },
    carouselArrow: {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 50px)',
      width: 77,
      height: 77,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
    },
    navigationButton: {
      display: 'none',
      position: 'absolute',
      top: '30%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      background: 'transparent',
      border: 'none',
      padding: 0,
      margin: 0,
      width: 26,
      height: 50,
      cursor: 'pointer',
      '& svg': {
        transition: 'all .3s ease-in',
      },
      [breakpoints.up('sm')]: {
        display: 'block',
        top: '45%',
        height: 80,
        width: 45,
        '& svg': {
          transition: 'all .3s ease-in',
        },
      },
      '&:disabled': {
        opacity: 0.2,
        cursor: 'not-allowed',
      },
    },
    nextButton: {
      right: 10,
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
        },
      },
      [breakpoints.up('md')]: {
        right: -60,
      },
    },
    prevButton: {
      left: 10,
      '& svg': {
        transform: 'rotate(180deg)',
      },
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
        },
      },
      [breakpoints.up('md')]: {
        left: -60,
      },
    },
    // Tile Slider
    sliderLink: {
      display: 'block',
      '&:hover': {
        '& p > span': {
          backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
        },
        '& .icon:before': {
          transform: 'scaleX(1)',
        },
        '& picture img': {
          transform: 'scale(1.1)',
        },
      },
    },
    heroImage: {
      position: 'relative',
      overflow: 'hidden',
      '& picture img': {
        transition: 'all .8s ease-out 0s !important',
      },
    },
    iconPlay: {
      width: '2.5rem',
      height: '2.5rem',
      bottom: '.5rem',
      left: '.5rem',
      backgroundColor: palette.primary.main,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 1.2s ease 0s !important',
      transform: 'perspective(1px) translateZ(0)',
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: palette.common.black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '& svg': {
        width: '1.5rem',
        height: '1.5rem',
        fill: palette.common.white,
        [breakpoints.up('md')]: {
          width: '2rem',
          height: '2rem',
        },
      },
      [breakpoints.up('md')]: {
        width: '3.25rem',
        height: '3.25rem',
        bottom: '.6875rem',
        left: '.6875rem',
      },
    },
    sliderItemCaption: {
      fontSize: '.875rem',
      fontWeight: 600,
      color: palette.common.black,
      marginTop: spacing(0.625),
      marginBottom: spacing(0.625),
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
      '& span': {
        transition: 'all .15s',
        backgroundImage:
          'linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
    },
    tileSlideType: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: palette.common.white,
      fontSize: '.625rem',
      fontWeight: 600,
      lineHeight: 1.1,
      color: palette.quinary.main,
      paddingTop: spacing(0.375),
      paddingBottom: spacing(0.375),
      paddingLeft: spacing(0.625),
      paddingRight: spacing(0.625),
      zIndex: 1,
      textTransform: 'uppercase',
      letterSpacing: 1,
      [breakpoints.up('md')]: {
        fontSize: '.75rem',
        padding: spacing(0.75),
      },
    },
    textCenter: {
      textAlign: 'center',
    },
    pb20: {
      paddingBottom: spacing(2.5),
      [breakpoints.up('md')]: {
        paddingBottom: 0,
      },
    },
  })
);
