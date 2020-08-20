import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { VideoHeroBannerInterface } from './models';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { getYouTubeId } from '../../helpers/youtube';
import './styles.scss';

const VideoHeroBanner: FunctionComponent<VideoHeroBannerInterface> = ({
  videoBlock,
  _rawTextBlockBody,
}) => {
  const [showImage, setShowImage] = useState(true);
  const imageUrl = videoBlock.heroImage.asset.url;
  const imageSrc = "url('" + imageUrl + "')";

  const iframeSrc = `https://www.youtube.com/embed/${getYouTubeId(
    videoBlock.url
  )}?playlist=${getYouTubeId(
    videoBlock.url
  )}&autoplay=1&controls=0&loop=1&showinfo=0&rel=0&mute=1`;

  console.log(imageUrl);
  console.log(imageSrc);

  const handleChange = () => {
    setShowImage(false);
  };

  const hideImage = showImage === false ? { display: 'none' } : {};

  return (
    <section
      className={`video-section-style ${classNames('container', 'pad0')}`}
    >
      <div style={hideImage}>
        <div
          onClick={handleChange}
          className="hero-background-img"
          style={{
            backgroundImage: imageSrc,
          }}
        ></div>
      </div>
      <iframe
        className="iframe-style"
        src={iframeSrc}
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div style={hideImage} onClick={handleChange}>
        <div className={`text-container ${classNames('container', 'pad0')}`}>
          <div className="hero-text">
            <BlockContent
              serializers={blockTypeDefaultSerializers}
              blocks={_rawTextBlockBody}
            />
          </div>
          <div className="alignLink">
            <Link to="/body-care" className="cta">
              Shop Rexona
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroBanner;
