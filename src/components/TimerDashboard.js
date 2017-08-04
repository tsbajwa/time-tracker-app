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
  // For handleUpdate, if its being created, there is no id (undefined), if being updated there is an id
  //If no Title or project put what do we do? If only one, the other(undefined, make it empty string?)
  //Arrow functions dont have access to array.argument? or wtva it is i think so keep that in mind
  handleUpdate = (title, project, id) => {
    console.log(title)
    console.log(project)
    console.log(id)
  }

  handleDelete = () => {
    console.log('delete function')
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
        handleUpdate={this.handleUpdate}
      />
    </div>
    );
  }
}

export default TimerDashBoard;




