import React, { FunctionComponent } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { VideoFeaturedBlockInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { getYouTubeId } from '../../helpers/youtube';
import useStyles from './styles';

const VideoFeaturedBlock: FunctionComponent<VideoFeaturedBlockInterface> = ({
  name,
  videoBlock,
  _rawTextBlockBody,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.content}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getYouTubeId(
              videoBlock.url
            )}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={classes.copyText}>
            <h2 className={classes.sectionTitle}>{videoBlock}</h2>
            {_rawTextBlockBody && (
              <BlockContent
                serializers={blockTypeDefaultSerializers}
                blocks={_rawTextBlockBody}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoFeaturedBlock;
