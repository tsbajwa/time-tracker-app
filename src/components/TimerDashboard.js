import React from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { uuid, findArrayPosition } from '../util/helpers';

export default class TimerDashBoard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid(),
        elapsed: null,
        runningSince: null,
        pausedTime: null,
      }, 
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid(),
        elapsed: null,
        runningSince: null,
        pausedTime: null,
      },
    ],
  }
  
  handleCreateFormSubmit = (title, proj) => {
    this.createTimer(title, proj)
  }

  handleEditFormSubmit = (title, proj, id) => {
    this.editTimer(title, proj, id);
  }

  handleDeleteClick = (id) => {
    this.deleteTimer(id)
  }

  editTimer = (title, project, id) => {
    const updatedTimers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        return Object.assign({}, timer,{title, project})
      } else {
        return timer
      }
    })
    this.setState({ timers: updatedTimers });
  }
  recordPausedTime = (id) => {
    let position = findArrayPosition(id, this.state.timers);
    let updatedTimers = [...this.state.timers]
    updatedTimers[position].pausedTime = updatedTimers[position].elapsed;
    this.setState({ timers: updatedTimers })
  }

  handleTimerStartTime = (id) => {
    let position = findArrayPosition(id, this.state.timers);
    let updatedTimers = [...this.state.timers]
      updatedTimers[position].runningSince = Date.now();
      this.setState({ timers: updatedTimers }) 
  }

  handleToggleTimer = (id) => {
      let position = findArrayPosition(id, this.state.timers)
      let updatedTimers = [...this.state.timers]
      updatedTimers[position].elapsed = updatedTimers[position].pausedTime + Date.now() - updatedTimers[position].runningSince;
      this.setState({ timers: updatedTimers })
  }


  

  deleteTimer = (id) => {
    const updatedTimers = this.state.timers.filter((timer) => timer.id !== id);
    this.setState({ timers: updatedTimers });
  }
  
  createTimer = (title, project) => {
    const newTimer = {title, project, id: uuid(), elapsed: null, runningSince: null, pausedTime: null};
    const updatedTimers = [...this.state.timers, newTimer]
    this.setState({ timers: updatedTimers });
  }

  render() {
    return (
    <div>
      <EditableTimerList 
        timers={this.state.timers}
        onFormSubmit={this.handleEditFormSubmit}
        onClick={this.handleDeleteClick}
        toggleTimer={this.handleToggleTimer}
        timerStartTime ={this.handleTimerStartTime}
        recordPaused={this.recordPausedTime}
      />
      <ToggleableTimerForm 
        onFormSubmit={this.handleCreateFormSubmit}
      />
    </div>
    );
  }
}




