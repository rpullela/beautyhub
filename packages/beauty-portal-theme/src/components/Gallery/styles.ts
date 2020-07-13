import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    galleryWrapper: {
      padding: 0,
      paddingBottom: spacing(2.5),
      marginBottom: spacing(2.5),
      '& figure': {
        maxWidth: 500,
        margin: 'auto',
      },
      '& .swiper-container': {
        maxWidth: 752,
        margin: 'auto',
        '& .swiper-wrapper': {
          paddingTop: 40,
          [breakpoints.up('sm')]: {
            paddingTop: 0,
          },
        },
        '& .swiper-slide': {
          backgroundColor: '#f4f4f4',
        },
      },
      '& .swiper-container-thumbs': {
        marginBottom: spacing(3),
        '& .swiper-slide': {
          width: 80,
          opacity: 0.4,
          '&.swiper-slide-thumb-active': {
            opacity: 1,
          },
        },
      },
      '& .swiper-container-horizontal > .swiper-pagination-bullets': {
        top: 10,
        bottom: 'auto',
      },
      '& .swiper-button-prev, & .swiper-button-next, & .swiper-container-thumbs': {
        display: 'none',
        [breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      '& .swiper-pagination': {
        [breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      '& .swiper-button-next:after, & .swiper-button-prev:after': {
        color: palette.primary.main,
      },
      '& .swiper-pagination-bullet-active': {
        background: palette.primary.main,
      },
    },
  })
);
