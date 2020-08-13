import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { SanityTextBlockInterface } from './models';
import { Link } from 'gatsby';
import SocialMenu from '../SocialMenu';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import quote from '../../images/icons/quote-left.svg';
import { useStaticQuery, graphql } from 'gatsby';

import useStyles from './styles';

const SanityTextBlock: FunctionComponent<SanityTextBlockInterface> = ({
  _rawTextBlockBody,
  textBlockType,
}) => {
  const data = useStaticQuery(graphql`
    query socialMenu {
      brandInfo: sanityBrandInfo {
        pinteresturl
        twitterurl
        youtubeurl
        facebookurl
        instaurl
      }
    }
  `);
  const classes = useStyles({ icon: quote });
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };
  return (
    <section
      className={classNames(
        classes.section,
        getComponentvariant(textBlockType.name)
      )}
    >
      <div className={classNames('container', 'pad0')}>
        <div>
          <div>
            <SocialMenu links={data.brandInfo} />
          </div>
        </div>
        <div className={classes.sectionDescription}>
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        </div>
        <div className={classes.alignLink}>
          <Link to="" className={classes.jumpIn}>
            Jump In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SanityTextBlock;
