import React from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

//TODO:  Use uuid library to generate ids

class TimerDashBoard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: 12,
        elapsed: 5456099,
        runningSince: Date.now(),
      }, 
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: 15,
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  }

  render() {
    return (
    <div>
      <EditableTimerList 
        timers={this.state.timers}
      />
      <ToggleableTimerForm 
        toggle={false}
      />
    </div>
    );
  }
}

export default TimerDashBoard;




