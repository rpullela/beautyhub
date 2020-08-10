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
          margin: 'auto',
        },
      },
    },
    sectionDescription: {
      textAlign: 'left',
      margin: 'auto',
      color: palette.grey[50],
      '& p': {
        fontSize: '.875rem',
        lineHeight: '2.5rem',
        margin: 0,
        [breakpoints.up('md')]: {
          fontSize: '1.125rem',
        },
      },
      '& h1, & h2, & h3, & h4, & h5, & h6': {
        color: palette.common.black,
      },
      '& h2': {
        fontSize: '1.5rem',
        letterSpacing: '2px',
        lineHeight: '2rem',
        fontWeight: '700',
        marginBlockStart: '0.4em',
        marginBlockEnd: '0.4em',
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
              color: palette.common.black,
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
          backgroundColor: palette.quaternary.main,
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
      color: palette.common.black,
      textTransform: 'uppercase',
      position: 'relative',
      transform: 'perspective(1px) translateZ(0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      margin: 'auto',
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: palette.common.black,
        borderRadius: '25px',
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
    },
  })
);
