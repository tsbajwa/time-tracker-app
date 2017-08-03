import React from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimerDashBoard extends React.Component {
  render() {
    return (
    <div>
      <EditableTimerList />
      <ToggleableTimerForm />
    </div>
    );
  }
}

export default TimerDashBoard;