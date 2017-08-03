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
        key={timer.id}
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