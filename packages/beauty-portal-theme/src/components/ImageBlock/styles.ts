import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      backgroundColor: palette.common.white,
      marginTop: '-70px',
      paddingTop: 0,
      '&.imageblocktypeb': {
        '& .c-image_wrapper': {
          [breakpoints.up('md')]: {
            order: 1,
          },
        },
        '& .c-image_text': {
          right: 0,
          [breakpoints.up('md')]: {
            right: 10,
          },
        },
      },
    },
    sectionTitle: {
      color: palette.common.white,
      marginTop: spacing(1.25),
      marginBottom: spacing(0.625),
      lineHeight: 1.2,
      '& span': {
        transition: '.15s',
        display: 'inline',
        backgroundImage: `linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
      [breakpoints.up('md')]: {
        marginBottom: spacing(2.5),
      },
    },
    link: {
      display: 'block',
      '&:hover': {
        '& h2 span': {
          backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% .1875rem',
          backgroundPosition: '0 100%',
        },
        '& img': {
          transform: 'scale(1.1)',
        },
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      [breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
    imageWrapper: {
      // marginLeft: -16,
      // marginRight: -16,
      overflow: 'hidden',
      '& img': {
        transition: 'all 500ms ease 0s !important',
      },
      [breakpoints.up('md')]: {
        order: 2,
      },
    },
    copyText: {
      padding: spacing(2.25),
      background: palette.primary.main,
      color: palette.common.white,
      order: 2,
      top: spacing(-2.25),
      position: 'relative',

      [breakpoints.up('md')]: {
        order: 1,
        alignSelf: 'center',
        padding: spacing(3),
        right: -20,
        top: 0,
        maxWidth: 500,
      },
      '& p': {
        margin: 0,
        fontSize: '.875rem',
        [breakpoints.up('md')]: {
          fontSize: '1.125rem',
        },
      },
    },
    sectionDivider: {
      borderTop: `4px solid ${palette.common.white}`,
      height: '20px',
      maxWidth: '40px',
    },
    articleTitle: {
      letterSpacing: '1px',
      textTransform: 'uppercase',
      fontSize: '1.75rem',
      fontWeight: 400,
      margin: 0,
      marginBottom: spacing(2),
      [breakpoints.up('md')]: {
        fontSize: '2.30rem',
      },
    },
    sliderTitle: {
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 0.6,
      letterSpacing: 0,
      margin: 0,
      marginBottom: spacing(3),
      [breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
    readStory: {
      fontSize: '1.2rem',
      fontWeight: 700,
      width: 160,
      height: 50,
      textAlign: 'right',
      cursor: 'pointer',
      borderRadius: '25px',
      marginTop: spacing(4),
      border: `solid 2px ${palette.common.white}`,
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      textTransform: 'uppercase',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(to right, ${palette.common.white} 50%, ${palette.primary.main} 50%)`,
      backgroundSize: '200% 100%',
      backgroundPosition: 'right bottom',
      transition: 'all .3s ease-out',
      margin: 'auto',
      '&:hover': {
        color: palette.primary.main,
        backgroundPosition: 'left bottom',
      },
    },
    alignLink: {
      float: 'right',
    },
  })
);
