
import { TOOGLE_ORDER } from './orderActions';

/* may be it is too complicated to keep order in store? */
const initialState = {
  order: 'asc'
}

const order = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_ORDER:
      return {
        order: state.order === 'asc' ? 'desc' : 'asc',
      };
    default:
      return state;
  }
};

export default order;
