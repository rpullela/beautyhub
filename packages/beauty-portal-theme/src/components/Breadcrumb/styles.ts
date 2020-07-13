import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    wrapper: {
      paddingTop: spacing(1.5),
      paddingBottom: spacing(1.5),
      [breakpoints.up('md')]: {
        paddingTop: spacing(2.5),
        paddingBottom: spacing(2.5),
      },
    },
    items: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
    },
    item: {
      fontSize: '.75rem',
      whiteSpace: 'nowrap',
      '&:first-child': {
        display: 'block',
        '&:before': {
          display: 'none',
        },
      },
      '&:last-child': {
        display: 'none',
        [breakpoints.up('md')]: {
          display: 'block',
        },
      },
    },
    divider: {
      padding: '0 8px',
      fontSize: '.75rem',
    },
    link: {
      color: palette.common.black,
    },
    active: {
      color: palette.grey[100],
    },
  })
);
