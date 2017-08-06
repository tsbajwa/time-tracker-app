import React from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { uuid } from '../util/helpers';

class TimerDashBoard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid(),
        elapsed: 5456099,
        runningSince: Date.now(),
      }, 
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuid(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  }
  
  handleToggleTimer = () => {
    console.log('Start button presed')
  }


  handleUpdate = (title, project, id) => {
    // TODO:  If strings empty, reverts to default value. Is there better functionailty/result we want?
    if (title === '' && project === '') {
      return
    }
    const updatedTimers = this.state.timers.map((timer) => {
      if (timer.id === id) {
        return Object.assign({}, timer,{title, project})
      } else {
        return timer
      }
    })
    this.setState({ timers: updatedTimers })
  }

  handleDelete = (id) => {
    let updatedTimers = this.state.timers;
    for (let i = 0; i < this.state.timers.length; i++) {
      if (this.state.timers[i].id === id) {
        updatedTimers.splice(i,1)
      }
    }
    this.setState({ timers: updatedTimers })
  }
  
  handleCreate = (title, project) => {
    if (title === '' && project === '') {
      return;
    }
    const newTimer = {title, project, id: uuid(), elapsed: 0, runningSince: null};
    const updatedTimers = [...this.state.timers, newTimer]
    this.setState({ timers:updatedTimers });
  }

  render() {
    return (
    <div>
      <EditableTimerList 
        timers={this.state.timers}
        handleUpdate={this.handleUpdate}
        delete={this.handleDelete}
        toggleTimer={this.handleToggleTimer}
      />
      <ToggleableTimerForm 
        create={this.handleCreate}
      />
    </div>
    );
  }
}

export default TimerDashBoard;




