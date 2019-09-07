import { CREATE_HABIT, FETCH_HABITS } from '../actions/habitsActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  console.log(action.payload, 'in reducer');
  switch(action.type) {
    case CREATE_HABIT:
      return { ...state, list: [...state.list, action.payload] };
    case FETCH_HABITS:
      return { ...state, list: [...state.list, ...action.payload] };
    default:
      return state;
  }
}
