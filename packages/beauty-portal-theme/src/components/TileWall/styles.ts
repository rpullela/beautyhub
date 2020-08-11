import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    sectionTitle: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: spacing(1.875),
      [breakpoints.up('md')]: {
        marginBottom: spacing(3),
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    sectionLink: {
      color: palette.common.black,

      fontSize: '.875rem',
      fontWeight: 700,
      alignSelf: 'flex-start',
      backgroundImage: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        marginLeft: spacing(3),
        marginBottom: spacing(1),
        alignSelf: 'center',
      },
      '&:hover, &:focus': {
        backgroundImage: `linear-gradient(120deg,${palette.common.black} 0%,${palette.common.black} 100%)`,
      },
    },
    slider: {
      paddingTop: spacing(2.5),
      position: 'relative',
      [breakpoints.up('md')]: {
        paddingTop: 0,
        paddingBottom: spacing(2.5),
      },
      '& .swiper-scrollbar': {
        backgroundColor: 'transparent',
      },
      '& .swiper-scrollbar-drag': {
        backgroundColor: 'rgba(0,0,0,.2)',
      },
      '& .swiper-container-horizontal > .swiper-scrollbar': {
        width: '100%',
        height: 5,
        [breakpoints.up('md')]: {
          height: 10,
        },
      },
    },
    sliderLink: {
      display: 'block',
      '&:hover': {
        '& p > span': {
          backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
        },
        '& .icon:before': {
          transform: 'scaleX(1)',
        },
      },
    },
    sliderTitle: {},
    sliderItemCaption: {
      fontSize: '.875rem',
      fontWeight: 600,
      color: palette.common.black,
      marginTop: spacing(1.875),
      marginBottom: spacing(0.625),
      textAlign: 'center',
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
  })
);
