import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    teaserWrapper: {
      [breakpoints.up('md')]: {
        maxWidth: 400,
      },
      '&.fixed': {
        position: 'fixed',
        top: 90,
      },
      '&.absolute': {
        position: 'absolute',
        bottom: 0,
      },
    },
    teaser: {
      marginBottom: spacing(2),
      textAlign: 'left',
      color: palette.text.secondary,
      position: 'relative',
      '& figure': {
        marginRight: spacing(1.85),
      },
    },
    teaserFirst: {
      marginBottom: spacing(3),
      '& figure': {
        marginRight: 0,
        [breakpoints.up('md')]: {
          marginRight: spacing(1.85),
        },
      },
      '& a > div': {
        flexDirection: 'column',
      },
      '& h3': {
        fontSize: '.875rem',
        fontWeight: 600,
        lineHeight: 1.3,
        marginTop: spacing(0.625),
        [breakpoints.up('md')]: {
          fontSize: '1.125rem',
        },
      },
      '& div > span': {
        position: 'absolute',
        top: 0,
        backgroundColor: palette.common.white,
        color: palette.quinary.main,
        fontSize: '.75rem',
        fontWeight: 600,
        letterSpacing: 1,
        marginTop: 0,

        paddingTop: spacing(0.375),
        paddingBottom: spacing(0.375),
        paddingLeft: spacing(0.75),
        paddingRight: spacing(0.75),
        [breakpoints.up('md')]: {
          paddingTop: spacing(0.75),
          paddingBottom: spacing(0.75),
        },
      },
    },
    teaserLast: {
      marginTop: spacing(4),
      [breakpoints.up('md')]: {
        marginTop: spacing(6),
      },
      '& figure': {
        marginRight: spacing(1.85),
      },
      '& .c-teaser__copy': {
        flex: '1',
        width: '100%',
      },
      '& h3': {
        fontWeight: 600,
        maxWidth: '70%',
      },
    },
    scrollArea: {
      overflow: 'scroll',
      display: 'flex',
      flexWrap: 'nowrap',
      [breakpoints.up('md')]: {
        display: 'block',
      },
      '& .c-teaser__item': {
        flex: '0 0 75%',
        marginRight: 10,
        [breakpoints.up('md')]: {
          display: 'static',
          marginRight: 0,
        },
      },
    },
    teaserCopy: {
      width: '100%',
      flex: 1,
    },
    teaserImage: {
      marginRight: spacing(1.875),
    },
    teaserLink: {
      fontSize: '1rem',

      color: palette.common.black,
      margin: 0,
      display: 'block',
      '&:hover h3': {
        '& span': {
          backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% .1875rem',
          backgroundPosition: '0 100%',
        },
      },
    },
    teaserType: {
      marginTop: spacing(0.625),
      marginBottom: spacing(0.625),
      display: 'block',
      textTransform: 'uppercase',
      color: palette.quinary.main,
      fontSize: '.625rem',
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: 1,
      [breakpoints.up('md')]: {
        fontSize: '.75rem',
      },
    },
    teaserTitle: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.1,
      margin: 0,
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        lineHeight: 1.3,
        marginTop: spacing(1),
      },
    },
    flexBox: {
      display: 'flex',
      alignItems: 'stretch',
    },
    title: {
      fontSize: '1.375rem',
      lineHeight: 1.1,
      fontWeight: 600,
      margin: 0,
      marginBottom: spacing(2.5),
      paddingTop: spacing(1),
      position: 'relative',
      '&:before': {
        content: '""',
        background: palette.secondary.main,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: 20,
        zIndex: -1,
      },
      [breakpoints.up('md')]: {
        fontSize: '1.875rem',
        paddingTop: spacing(0.625),
      },
    },
    picture: {
      position: 'relative',
      paddingTop: `${(171 / 382) * 100}%`,
      [breakpoints.up('md')]: {
        paddingTop: `${(206 / 400) * 100}%`,
      },
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: 'auto',
      top: 0,
    },
  })
);
