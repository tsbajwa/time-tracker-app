import React from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { uuid } from '../util/helpers';
import { getTimers, createTimer, startTimer, stopTimer, deleteTimer, updatedTimer } from '../util/client';

export default class TimerDashBoard extends React.Component {
  state = {
    timers: [],
  }
  
  componentDidMount() {
    this.loadTimersfromServer();
  }

  loadTimersfromServer = () => {
   getTimers((serverTimers) => {
    this.setState({ timers: serverTimers })
   })
  }
  handleCreateFormSubmit = (title, proj) => {
    this.createTimer(title, proj)
  }

  handleEditFormSubmit = (title, proj, id) => {
    this.editTimer(title, proj, id);
  }

  handleDeleteClick = (id) => {
    this.deleteTimer(id);
  }

  handleStartClick = (id) => {
    this.startTimer(id);
  }

  handleStopClick = (id) => {
    this.stopTimer(id);
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

  deleteTimer = (id) => {
    console.log('clicked')
    this.setState({ timers: this.state.timers.filter((timer) => timer.id !== id) });
  }
  
  createTimer = (title, project) => {
    const newTimer = {title, project, id: uuid(), elapsed: null, runningSince: null, pausedTime: null};
    const updatedTimers = [...this.state.timers, newTimer]
    this.setState({ timers: updatedTimers });
  }
  
  startTimer = (id) => {
    const updatedTimers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        return Object.assign({}, timer,{runningSince: Date.now()})
      } else {
        return timer
      }
    })
    this.setState({ timers: updatedTimers });
  }

  stopTimer = (id) => {
      const updatedTimers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        const lastElapsed = Date.now() - timer.runningSince;
        return Object.assign({}, timer,{elapsed: timer.elapsed + lastElapsed, runningSince: null})
      } else {
        return timer
      }
    })
    this.setState({ timers: updatedTimers });
  }


  render() {
    return (
    <div>
      <EditableTimerList 
        timers={this.state.timers}
        onFormSubmit={this.handleEditFormSubmit}
        onDeleteClick={this.handleDeleteClick}
        onStartClick ={this.handleStartClick}
        onStopClick={this.handleStopClick}
      />
      <ToggleableTimerForm 
        onFormSubmit={this.handleCreateFormSubmit}
      />
    </div>
    );
  }
}




