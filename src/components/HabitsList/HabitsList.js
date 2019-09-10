import React from 'react';
import { PropTypes } from 'prop-types';
// import HabitDetails from '../HabitDetails/HabitDetails.js';

export default function HabitList({ habits }) {
  const habitsArray = habits.map((habit, i) => {
    console.log(habit);
    return <li key={i}>
      <p>{i}</p>
      <p>{habit.habit}</p>
      <p>{habit.description}</p>
    </li>;
  });

  return (
    <ul>
      {habitsArray}
    </ul>
  );

}

HabitList.propTypes = {
  habits: PropTypes.array.isRequired
};
