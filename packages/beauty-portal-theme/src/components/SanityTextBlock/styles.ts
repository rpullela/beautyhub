import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      paddingBottom: spacing(2),
      paddingTop: spacing(2),
      backgroundColor: palette.background.default,
      [breakpoints.up('md')]: {
        paddingBottom: spacing(3),
        paddingTop: spacing(3),
      },
      '& h1': {
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.1,
        marginTop: 0,
        marginBottom: 10,
        [breakpoints.up('md')]: {
          fontSize: '2.875rem',
        },
      },
      '&.textblocktypea': {
        backgroundColor: palette.common.white,
        '& p': {
          width: '80%',
        },
      },
    },
    sectionDescription: {
      textAlign: 'left',
      margin: '32px',
      color: palette.grey[50],
      '& p': {
        fontSize: '.875rem',
        lineHeight: '1.5rem',
        [breakpoints.up('md')]: {
          fontSize: '1.125rem',
          lineHeight: '2.5rem',
          margin: 0,
        },
      },
      '& h1, & h2, & h3, & h4, & h5, & h6': {
        color: palette.primary.main,
      },
      '& h2': {
        fontSize: '1.375rem',
        fontWeight: 600,
        letterSpacing: 0,
        margin: 0,
        paddingBottom: '10px',
        marginBottom: spacing(1),
        [breakpoints.up('md')]: {
          fontSize: '1.75rem',
        },
      },
      '& blockquote': {
        position: 'relative',
        paddingTop: 40,
        width: '80%',
        margin: 'auto',
        '& p': {
          fontStyle: 'italic',
          fontSize: '1.75rem',
          position: 'relative',
          fontWeight: 400,
          zIndex: 1,
          '& span': {
            '&:last-child': {
              fontSize: '1rem',
              color: palette.grey[50],
            },
          },
        },
        '&:before': {
          position: 'absolute',
          top: -10,
          left: '50%',
          content: '""',
          backgroundImage: props => `url(${props.icon})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '30px 30px',
          backgroundPosition: 'center center',
          backgroundColor: palette.common.white,
          height: 40,
          width: 40,
          transform: 'translateX(-50%)',
          zIndex: 1,
        },
        '&:after': {
          position: 'absolute',
          content: '""',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 200,
          height: 2,
          backgroundColor: palette.primary.main,
          zIndex: 0,
        },
      },
    },
    alignLink: {
      textAlign: 'center',
      marginTop: '10px',
    },
    jumpIn: {
      fontSize: '1.2rem',
      fontWeight: 700,
      width: 160,
      height: 50,
      cursor: 'pointer',
      borderRadius: '25px',
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      textTransform: 'uppercase',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(to right, ${palette.grey[100]} 50%, ${palette.primary.main} 50%)`,
      backgroundSize: '200% 100%',
      backgroundPosition: 'right bottom',
      transition: 'all .3s ease-out',
      margin: 'auto',
      '&:hover': {
        color: palette.common.white,
        backgroundPosition: 'left bottom',
      },
    },
    textSocialMenu: {
      marginRight: '20px',
      marginLeft: '-100px',
    },
  })
);
