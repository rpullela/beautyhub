import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      paddingBottom: spacing(2.5),
      [breakpoints.up('md')]: {
        paddingTop: spacing(5),
        paddingBottom: spacing(5),
      },
    },
    svg: {
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    waveContainer: {
      display: 'inline-block',
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      verticalAlign: 'middle',
      overflow: 'hidden',
    },
    waveHeight: {
      height: '100px',
    },
  })
);
