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
    this.setState({timers: updatedTimers})
  }

  handleDelete = () => {
    console.log('delete function')
  }

  handleCreate = (title, project) => {
    if (title === '' && project === '') {
      return;
    }
    const newTimer = [{title, project, id: title, elapsed: 0, runningSince: null}];
    const updatedTimers = this.state.timers.concat(newTimer);
    this.setState({ timers:updatedTimers });
  }

  render() {
    return (
    <div>
      <EditableTimerList 
        timers={this.state.timers}
        handleUpdate={this.handleUpdate}
        delete={this.handleDelete}
      />
      <ToggleableTimerForm 
        toggle={false}
        create={this.handleCreate}
      />
    </div>
    );
  }
}

export default TimerDashBoard;




