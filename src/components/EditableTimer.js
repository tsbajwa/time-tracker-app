import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {
  render() {
    if (this.props.edit) {
      return (
        <TimerForm 
        title={this.props.title}
        project={this.props.project}
        />
      );
    } else {
      return (
        <Timer 
        title={this.props.title}
        project={this.props.project}
        />
      );
    }
  }
}

export default EditableTimer;