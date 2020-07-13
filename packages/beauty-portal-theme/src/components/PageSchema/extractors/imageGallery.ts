const extractor = (pageHref: string, data: any, brandInfo: any) => {
  const resp = {};

  data &&
    (resp.associatedMedia = data.picture.map(item => ({
      '@type': 'ImageObject',
      contentUrl: item.asset.url,
    })));

  return resp;
};

export default extractor;
