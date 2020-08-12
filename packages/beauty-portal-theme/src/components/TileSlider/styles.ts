import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    sectionTitle: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '1.375rem',
      marginBottom: spacing(1.875),
      [breakpoints.up('md')]: {
        marginBottom: spacing(3),
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    sectionDescription: {
      paddingBottom: '10px',
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
      maxWidth: '1350px',
      paddingTop: spacing(2.5),
      paddingBottom: spacing(2.5),
      position: 'relative',
      marginLeft: spacing(4),
      marginRight: spacing(4),

      [breakpoints.up('md')]: {
        paddingTop: spacing(5),
        paddingBottom: spacing(5),
      },
      '& .swiper-container': {
        paddingBottom: spacing(2.5),
      },

      '& .swiper-scrollbar': {
        backgroundColor: 'transparent',
      },
      '& .swiper-scrollbar-drag': {
        backgroundColor: palette.grey[20],
      },
      '& h4': {
        letterSpacing: '2px',
        textTransform: 'uppercase',
        lineHeight: 0.6,
        fontSize: '1.75rem',
        fontWeight: 400,
        margin: 0,
        marginBottom: spacing(1),
        [breakpoints.up('md')]: {
          fontSize: '2.30rem',
        },
      },
      '& p': {
        color: palette.grey[100],
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
    sliderTitle: {
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 0.6,
      letterSpacing: 0,
      margin: 0,
      marginBottom: spacing(1),
      [breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
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
    sectionDivider: {
      borderTop: `4px solid ${palette.common.white}`,
      height: '20px',
      maxWidth: '40px',
    },
    productNav: {
      textAlign: 'center',
      paddingTop: '20px',
    },
  })
);
