import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ palette }: Theme) =>
  createStyles({
    element: {
      backgroundColor: palette.common.white,
      border: `2px solid ${palette.primary.main}`,
      color: palette.primary.main,
      fontWeight: 700,
      borderRadius: '25px',
      position: 'fixed',
      width: 130,
      height: 45,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: 15,
      bottom: 20,
      zIndex: 2,
      background: `linear-gradient(to right, ${palette.primary.main} 50%, ${palette.common.white} 50%)`,
      backgroundSize: '200% 100%',
      backgroundPosition: 'right bottom',
      transition: 'all .3s ease-out',
      margin: 'auto',
      '&:hover': {
        color: palette.common.white,
        border: `2px solid ${palette.common.white}`,
        backgroundPosition: 'left bottom',
        '& svg': {
          fill: palette.common.white,
        },
      },
      '& svg': {
        fill: palette.primary.main,
        width: 24,
        height: 24,
        transition: 'all .5s',
      },
    },
    isActive: {
      transform: 'perspective(1px) translateZ(0) translateX(0)',
    },
    isHidden: {
      transform: 'perspective(1px) translateZ(0) translateX(100px)',
    },
  })
);
