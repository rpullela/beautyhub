import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { VideoHeroBannerInterface } from './models';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { getYouTubeId } from '../../helpers/youtube';
import './styles.scss';

const VideoHeroBanner: FunctionComponent<VideoHeroBannerInterface> = ({
  videoBlock,
  _rawTextBlockBody,
}) => {
  return (
    <section>
      <div
        className="video"
        style={{
          paddingBottom: '16.45%' /* 16:9 */,
          paddingTop: 25,
          height: 0,
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '60%',
            border: 'none',
          }}
          src={`https://www.youtube.com/embed/${getYouTubeId(
            videoBlock.url
          )}?playlist=${getYouTubeId(
            videoBlock.url
          )}&controls=0&loop=1&showinfo=0&mute=1`}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="bp-container">
        <div className="bp-textBlock_desc">
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        </div>
        <div className="alignLink">
          <Link to="" className="cta">
            Shop Rexona
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroBanner;
