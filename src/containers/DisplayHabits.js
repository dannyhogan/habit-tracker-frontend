import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getHabits } from '../selectors/HabitsSelectors';
import { fetchHabits } from '../actions/habitsActions';
import HabitList from '../components/HabitsList/HabitsList';

export class DisplayHabits extends Component {

  static propTypes = {
    habits: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { habits } = this.props;
    return (
      <>
        <HabitList habits={habits}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  habits: getHabits(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchHabits());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayHabits);
