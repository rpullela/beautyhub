import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { SanityTextBlockInterface } from './models';
import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import quote from '../../images/icons/quote-left.svg';

import useStyles from './styles';

const SanityTextBlock: FunctionComponent<SanityTextBlockInterface> = ({
  _rawTextBlockBody,
  textBlockType,
}) => {
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
        <div className={classes.sectionDescription}>
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        </div>
        <div className={classes.alignLink}>
          <Link to="" className={classes.jumpIn}>
            Jump In together
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SanityTextBlock;
