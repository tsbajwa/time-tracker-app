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
        onFormSubmit={this.props.onFormSubmit}
        key={timer.id}
        delete={this.props.delete}
        toggleTimer={this.props.toggleTimer}
        timerStartTime={this.props.timerStartTime}
        recordPaused={this.props.recordPaused}
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