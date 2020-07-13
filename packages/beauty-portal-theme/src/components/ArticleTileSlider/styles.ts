import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    slider: {
      paddingTop: spacing(2.5),
      paddingBottom: spacing(2.5),
      position: 'relative',
      marginLeft: spacing(2),
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
      '& .swiper-container-horizontal > .swiper-scrollbar': {
        width: '100%',
        bottom: 0,
        height: 5,
        left: 0,
        [breakpoints.up('md')]: {
          height: 10,
        },
      },
    },
    sectionTitle: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: spacing(1.875),
      [breakpoints.up('md')]: {
        marginBottom: spacing(2),
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
    sliderTitle: {
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: 0,
      margin: 0,
      marginBottom: spacing(1),
      [breakpoints.up('md')]: {
        fontSize: '2.25rem',
      },
    },
  })
);
