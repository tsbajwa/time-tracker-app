import React from 'react'
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { uuid, findArrayPosition } from '../util/helpers';
class TimerDashBoard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuid(),
        elapsed: 5456099,
        runningSince: null,
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
  
  handleToggleTimer = (id) => {
      let position = findArrayPosition(id, this.state.timers)
      let updatedTimers = [...this.state.timers]
      updatedTimers[position].runningSince = Date.now();
      this.setState({ timers: updatedTimers })

      let runningTimer = setInterval(() => {
        let currentTimer = [...this.state.timers]
        currentTimer[position].elapsed = Date.now() - currentTimer[position].runningSince;
        this.setState({timers: currentTimer }) 
      }, 1000)
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
    this.setState({ timers: updatedTimers });
  }

  handleDelete = (id) => {
    const updatedTimers = this.state.timers.filter((timer) => timer.id !== id);
    this.setState({ timers: updatedTimers });
  }
  
  handleCreate = (title, project) => {
    if (title === '' && project === '') {
      return;
    }
    const newTimer = {title, project, id: uuid(), elapsed: 0, runningSince: null};
    const updatedTimers = [...this.state.timers, newTimer]
    this.setState({ timers: updatedTimers });
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




