import React, { FunctionComponent } from 'react';

import { VideoBlockInterface } from './models';
import VideoFeaturedBlock from '../VideoFeaturedBlock';
import VideoHeroBanner from '../VideoHeroBanner';

const componentMap = {
  hero: VideoHeroBanner,
  featured: VideoFeaturedBlock,
  default: VideoHeroBanner,
};

const VideoBlock: FunctionComponent<VideoBlockInterface> = ({
  videoBlock,
  name,
  _rawTextBlockBody,
  videoBlockType,
}) => {
  const getComponentKey = (componentTypeName: string) => {
    if (componentTypeName.indexOf('hero') >= 0) return 'hero';
    if (componentTypeName.indexOf('featured') >= 0) return 'featured';

    return 'default';
  };
  const componentTypeName = videoBlockType
    ? videoBlockType.name.toLowerCase()
    : '';
  const componentKey = getComponentKey(componentTypeName);
  const Component = componentMap[componentKey];

  return Component ? (
    <section>
      <Component {...{ name, videoBlock, videoBlockType, _rawTextBlockBody }} />
    </section>
  ) : null;
};

export default VideoBlock;
