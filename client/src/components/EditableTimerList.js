import React from 'react';
import EditableTimer from './EditableTimer';

export default class EditableTimerList extends React.Component {
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
        onFormSubmit={this.props.onFormSubmit}
        onDeleteClick={this.props.onClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
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