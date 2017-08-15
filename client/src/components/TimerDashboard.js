import React from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { uuid } from '../util/helpers';
import { clientGetTimers, clientCreateTimer, clientStartTimer, clientStopTimer, clientDeleteTimer, clientUpdateTimer } from '../util/client';

export default class TimerDashBoard extends React.Component {
  state = {
    timers: [],
  }
  
  componentDidMount() {
    this.loadTimersfromServer();
    setInterval(this.loadTimersfromServer, 6000) //Hard refresh every 6 seconds. Look into long polling later.
  }

  loadTimersfromServer = () => {
   clientGetTimers((serverTimers) => {
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
    clientUpdateTimer({ id, title, project });
  }

  deleteTimer = (id) => {
    console.log('clicked')
    this.setState({ timers: this.state.timers.filter((timer) => timer.id !== id) });
    clientDeleteTimer({ id: id });
  }
  
  createTimer = (title, project) => {
    const id = uuid();
    const newTimer = {title, project, id, elapsed: null, runningSince: null, pausedTime: null};
    const updatedTimers = [...this.state.timers, newTimer]
    this.setState({ timers: updatedTimers });
    clientCreateTimer({ id, title, project });
  }
  
  startTimer = (id) => {
    let timeNow = Date.now();
    const updatedTimers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        return Object.assign({}, timer,{ runningSince: timeNow })
      } else {
        return timer
      }
    })
    this.setState({ timers: updatedTimers });
    clientStartTimer({id, start: timeNow })
  }

  stopTimer = (id) => {
    let timeNow = Date.now();
      const updatedTimers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        const lastElapsed = timeNow - timer.runningSince;
        return Object.assign({}, timer,{ elapsed: timer.elapsed + lastElapsed, runningSince: null })
      } else {
        return timer
      }
    })
    this.setState({ timers: updatedTimers });
    clientStopTimer({ id, stop: timeNow })
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




