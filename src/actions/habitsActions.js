import { postHabit, getHabits } from '../services/habitsApi';

export const FETCH_HABITS = 'FETCH_HABITS';
export const FETCH_HABITS_LOADING = 'FETCH_HABITS_LOADING';
export const fetchHabits = () => ({
  type: FETCH_HABITS,
  payload: getHabits(),
  pendingType: FETCH_HABITS_LOADING
});

export const CREATE_HABIT = 'CREATE_HABIT';
export const createHabit = (habit, description) => ({
  type: CREATE_HABIT,
  payload: postHabit(habit, description)
});
