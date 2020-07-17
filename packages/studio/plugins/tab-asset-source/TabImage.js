// eslint-disable-next-line no-unused-vars
import React, { useCallback, useRef } from 'react';
import { getBase64ImageFromUrl } from './get-base-64-from-url';

import styles from './TabAssetSource.css';

export const TabImage = ({ asset, onSelect, onIntersection }) => {
  const buttonRef = useRef();
  const observer = useRef();
  const onClick = useCallback(async () => {
    const base64Image = await getBase64ImageFromUrl(asset.OriginalURL);

    // if the selected image is in format application/octet-stream it will convert it to tiff
    const uploadBase64 = base64Image.replace('application/octet-stream', 'image/tiff');

    const selectedItem = {
      kind: 'base64',
      value: uploadBase64,
      assetDocumentProps: {
        originalFilename: `${asset.title[0]}.tif`,
        source: {
          name: 'tab-api',
          id: asset.assetID,
        },
      },
    };

    onSelect([selectedItem]);
  });
  const setObserver = useCallback(() => {
    if (onIntersection) {
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          onIntersection();
          observer.current.disconnect();
        }
      });

      observer.current.observe(buttonRef.current);
    }
  }, [onIntersection, observer]);
  return (
    <button ref={buttonRef} className={styles['c-tab-image']} onClick={onClick}>
      {asset.ThumbNailURL !== 'null' ? (
        <img
          className={styles['c-tab-image__image']}
          src={asset.ThumbNailURL}
          loading="lazy"
          onLoad={setObserver}
          alt={asset.title[0]}
        />
      ) : (
        <div className={styles['c-tab-image__no-image']}>
          <p className={styles['c-tab-image__no-image__label']}>
            This is image is missing a thumbnail but you can still select to upload it
          </p>
        </div>
      )}
      <div className={styles['c-tab-image__body']}>
        {asset.description[0] !== 'NULL' && <p>{asset.description[0]}</p>}
      </div>
    </button>
  );
};
