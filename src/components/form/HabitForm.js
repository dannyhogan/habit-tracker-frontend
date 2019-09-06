import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function HabitForm({ handleSubmit }) {
  const [habit, updateHabit] = useState('');
  const [description, updateDescription] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit(habit, description);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Habit..."
        value={habit}
        onChange={({ target }) => updateHabit(target.value)} />
      <input
        placeholder="Description..."
        value={description}
        onChange={({ target }) => updateDescription(target.value)} />
      <button>Submit</button>
    </form>
  );
}

HabitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
