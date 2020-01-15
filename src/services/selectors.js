export const sortEvents = (list, order) => {
  const sortOrder = order === 'asc' ? 1 : -1;

  // const compare = (a, b) => {
  //   if (+a.price > +b.price) {
  //     return 1;
  //   }
  //   if (+a.price < +b.price) {
  //     return -1;
  //   }
  //   // a должно быть равным b
  //   return 0;
  // }

  return list.sort((a, b) => {
    if (+a.price > +b.price) return 1 * sortOrder;
    if (+a.price < +b.price) return -1 * sortOrder;
    return 0;
  });
};

export const getEvent = (events, slug) => {
  return events.find((event) => event.slug === slug);
};

export const getFiltredEvents = (list, filter) => {
  return list.filter((event) => event.type.toLowerCase() === filter);
};

export const getFavouritesEvents = (list, favourites) => {
  if (favourites.length < 1) return [];
  return favourites.map((id) => list.find((item) => item.id === id ));
};
