import React, { FunctionComponent } from 'react';

import { VideoBlockInterface } from './models';
import VideoFeaturedBlock from '../VideoFeaturedBlock';
import VideoHeroBanner from '../VideoHeroBanner';

const componentMap = {
  hero: VideoHeroBanner,
  featured: VideoFeaturedBlock,
  type1: VideoFeaturedBlock,
  default: VideoFeaturedBlock,
};

const VideoBlock: FunctionComponent<VideoBlockInterface> = ({
  videoBlock,
  name,
  _rawTextBlockBody,
  videoBlockType,
}) => {
  const getComponentName = (videoBlockName: string) => {
    videoBlockName = videoBlockType.name.toLowerCase();
    if (videoBlockName.indexOf('hero video banner') >= 0) return 'hero';
    if (videoBlockName.indexOf('featured video') >= 0) return 'featured';
    if (videoBlockName.indexOf('video block - type 1') >= 0) return 'type1';

    return 'default';
  };
  const componentKey = getComponentName(videoBlockType);
  const Component = componentMap[componentKey];

  return Component ? (
    <section>
      <Component {...{ name, videoBlock, videoBlockType, _rawTextBlockBody }} />
    </section>
  ) : null;
};

export default VideoBlock;
