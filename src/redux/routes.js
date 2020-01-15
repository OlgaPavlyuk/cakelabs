export const basename = '/cakelabs';

const baseEvents = 'events';
const routes = [
  {
    filter: `${baseEvents}`,
    name: 'Все события'
  },
  {
    filter: `${baseEvents}/movie`,
    name: 'Кино'
  },
  {
    filter: `${baseEvents}/theatre`,
    name: 'Театр'
  },
  {
    filter: `${baseEvents}/concert`,
    name: 'Концерты'
  },
  {
    filter: `${baseEvents}/exhibition`,
    name: 'Выставки'
  },
  {
    filter: `${baseEvents}/festival`,
    name: 'Фестивали'
  },
  {
    filter: `${baseEvents}/favourite`,
    name: 'Избранное'
  },
];

export default routes;
