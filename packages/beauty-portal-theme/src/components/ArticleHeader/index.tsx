import React, { FunctionComponent, useState } from 'react';
import { Preloader, Oval } from 'react-preloader-icon';
import { Link } from 'gatsby';
import classNames from 'classnames';
import SocialMenu from '../SocialMenu';
import { getYouTubeId } from '../../helpers/youtube';
import { urlFor } from '../../helpers/imageUrl';
import { ReactComponent as Skill } from '../../images/icons/skill.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';
import { ReactComponent as IconTime } from '../../images/icons/time.svg';
import useStyles from './styles';

const ArticleHeader: FunctionComponent<ArticleHeaderInterface> = ({
  article,
  type,
  socialLinks,
  playLabel,
}) => {
  const classes = useStyles();
  const [showVideo, setShowVideo] = useState(false);
  const [videoSourceUrl, setVideoSourceUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(false);
  const {
    headline,
    subheading,
    heroImage,
    heroVideo,
    author,
    skillLevel,
    time,
    _rawHeroImage,
    _rawHeroVideo,
    _type,
  } = article;
  console.log(article);
  const playVideo = (event: any) => {
    setVideoLoading(true);
    setVideoSourceUrl(
      `https://www.youtube.com/embed/${getYouTubeId(
        event.currentTarget.dataset.url
      )}?autoplay=1`
    );
    setShowVideo(true);
  };

  const onFrameLoad = () => {
    setVideoLoading(false);
  };

  const renderVideoThumbnail = (image, alt) => {
    return (
      <figure>
        <picture
          className="bp-image__placeholder"
          style={{
            paddingTop: `calc(100% / ${image.asset.metadata.dimensions.aspectRatio})`,
            background: `url(${image.asset.metadata.lqip})`,
            backgroundSize: 'cover',
          }}
        >
          <source
            media="screen and (min-width: 1025px)"
            srcSet={`${urlFor(image)
              .width(712)
              .height(399)
              .fit('max')
              .auto('format')
              .url()
              .toString()}`}
          />
          <source
            media="screen and (min-width: 560px)"
            srcSet={`${urlFor(image)
              .width(528)
              .height(296)
              .fit('max')
              .auto('format')
              .url()
              .toString()}`}
          />
          <source
            media="screen and (min-width: 320px)"
            srcSet={`${urlFor(image)
              .width(414)
              .height(230)
              .fit('max')
              .auto('format')
              .url()
              .toString()}`}
          />
          <img
            src={urlFor(image)
              .width(712)
              .height(399)
              .fit('max')
              .auto('format')
              .url()}
            alt={alt}
          />
        </picture>
      </figure>
    );
  };

  return (
    <div className={classes.header}>
      <h1
        className={classNames(
          classes.headingPrimary,
          type === 'gallery' ? classes.textCenter : null
        )}
      >
        {headline}
      </h1>
      <p
        className={classNames(
          classes.textSecondary,
          type === 'gallery' ? classes.textCenter : null
        )}
      >
        {subheading}
      </p>
      <div className={classes.articleInfoWrapper}>
        <div className={classes.articleInfo}>
          {author && author.name && (
            <div className={classes.authorInfo}>
              <Link
                className={classes.link}
                to={author.slug ? `/${author.slug.current}` : `/${author.name}`}
              >
                <span>{author.name}</span>
              </Link>

              <span className={classes.divider}>|</span>
            </div>
          )}
          {(article.publishedAt || article._updatedAt) && (
            <span>{article.publishedAt || article._updatedAt}</span>
          )}
        </div>
        <SocialMenu links={socialLinks} />
      </div>
      {/* TODO: Use generic `Video` component for hero video to avoid duplicate code  */}
      {/* {renderHeroImage(_rawHeroImage, heroImage.alt)} */}
      {!(_type === 'galleryArticle') && (
        <div className={classes.heroImage}>
          {!showVideo &&
            !heroVideo &&
            renderVideoThumbnail(_rawHeroImage, heroImage.alt)}
          {!showVideo && heroVideo && !videoLoading && (
            <>
              {heroVideo.heroImage
                ? renderVideoThumbnail(
                    _rawHeroVideo.heroImage,
                    heroVideo.heroImage.alt
                  )
                : renderVideoThumbnail(_rawHeroImage, heroImage.alt)}
              <button
                type="button"
                className={classes.iconVideo}
                onClick={playVideo}
                data-url={heroVideo.url}
              >
                <Youtube />
                <span className="srOnly">{playLabel}</span>
              </button>
            </>
          )}
          {videoLoading && (
            <Preloader
              use={Oval}
              size={60}
              strokeWidth={11}
              strokeColor="#000"
              duration={500}
            />
          )}
          {showVideo && (
            <iframe
              width="560"
              height="399"
              src={videoSourceUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={onFrameLoad}
            ></iframe>
          )}
        </div>
      )}
      {(skillLevel || time) && (
        <div className={classes.tutorialInfo}>
          {time && (
            <div className={classes.tutorialInfoBlock}>
              <div>
                <strong>Time</strong>
                <span>{time} mins</span>
              </div>
              <div className={classes.icon}>
                <IconTime className={'active'} />
              </div>
            </div>
          )}
          {skillLevel && (
            <div className={classes.tutorialInfoBlock}>
              <div>
                <strong>Skill</strong>
                <span>{skillLevel}</span>
              </div>
              <div className={classNames('b-skill', classes.icon)}>
                <Skill
                  className={classNames(skillLevel === 'easy' && 'active')}
                />
                <Skill
                  className={classNames(skillLevel === 'medium' && 'active')}
                />
                <Skill
                  className={classNames(skillLevel === 'difficult' && 'active')}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface ArticleHeaderInterface {
  article: any;
  type: any;
  socialLinks: any;
  playLabel?: string;
}

export default ArticleHeader;
