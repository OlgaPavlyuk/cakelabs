export const sortEvents = (list, order) => {
  const sortOrder = order === 'asc' ? 1 : -1;

  return list.sort((a, b) => (+a.price >= +b.price) ? 1 * sortOrder : -1 * sortOrder);
};

export const getEvent = (events, slug) => {
  return events.find((event) => event.slug === slug);
};

export const getFiltredEvents = (list, filter) => {
  return list.filter((event) => event.type.toLowerCase() === filter);
};
