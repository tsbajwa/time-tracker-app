import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {
  state = {
    edit: false,
  }
  render() {
    if (this.state.edit) {
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
        elapsed={this.props.elapsed}
        />
      );
    }
  }
}

export default EditableTimer;