export const basename = '/cakelabs';

const baseEvents = 'events';
const routes = [
  {
    filter: `${baseEvents}`,
    name: 'Все события'
  },
  {
    filter: `movie`,
    name: 'Кино'
  },
  {
    filter: `theatre`,
    name: 'Театр'
  },
  {
    filter: `concert`,
    name: 'Концерты'
  },
  {
    filter: `exhibition`,
    name: 'Выставки'
  },
  {
    filter: `festival`,
    name: 'Фестивали'
  },
  {
    filter: `favourites`,
    name: 'Избранное'
  },
];

export default routes;
