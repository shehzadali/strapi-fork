const containsMimeTypeFilter = query => {
  const filters = query?.filters?.$and;

  if (!filters) {
    return false;
  }

  const result = filters.find(filter => {
    return Object.keys(filter).includes('mime');
  });

  return !!result;
};

const isAssetOnlyFilter = query => {
  return containsMimeTypeFilter(query);
};

export default isAssetOnlyFilter;
