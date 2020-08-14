import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    newsletter: {
      position: 'relative',
      paddingBottom: spacing(4),
      paddingTop: spacing(4),
      textAlign: 'center',
    },
    newsletterContent: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 760,
      margin: 'auto',
      paddingLeft: spacing(2.5),
      paddingRight: spacing(2.5),
    },
    newsletterTitle: {
      fontSize: '1.125rem',
      lineHeight: 1.3,
      margin: 0,
      [breakpoints.up('md')]: {
        fontSize: '1.875rem',
        marginBottom: spacing(3.75),
      },
      '& p': {
        margin: 0,
      },
    },
    subscribe: {
      fontSize: '1.125rem',
      fontWeight: 700,
      width: 160,
      height: 50,
      cursor: 'pointer',
      borderRadius: '25px',
      backgroundColor: palette.primary.main,
      color: palette.common.white,
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
  })
);
