function parseFilterQuery(filterQuery) {
  let filterQueryText = '';
  let filterQueryNumber = '';
  if (filterQuery) {
    if (filterQuery.match(/\d+/)) {
      console.log('filterQuery -- ', filterQuery);
      filterQueryNumber = filterQuery.match(/\d+/).toString();
      const queries = filterQuery.split(filterQueryNumber);
      const query = queries[0] || queries[1];
      filterQueryText = query ? query : '';
    } else {
      filterQueryText = filterQuery;
    }
  }
  return { filterQueryText, filterQueryNumber };
}
export default parseFilterQuery;
