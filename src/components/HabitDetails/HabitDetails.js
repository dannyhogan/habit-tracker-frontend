import React from 'react';
import PropTypes from 'prop-types';

export default function HabitDetails({ habit }) {
  console.log(habit);
  return (
    <li>
    </li>
  );
}

HabitDetails.propTypes = {
  habit: PropTypes.object
};
