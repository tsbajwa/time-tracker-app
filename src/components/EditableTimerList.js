import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render() {
    const timerList = this.props.timers.map((timer) => {
      return (
        <EditableTimer 
        title={timer.title}
        project={timer.project}
        id={timer.id}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        handleUpdate={this.props.handleUpdate}
        key={timer.id}
        delete={this.props.delete}
        />
      );
    })

    return (
      <div>
        {timerList}
      </div>
    );
  }
}

export default EditableTimerList;