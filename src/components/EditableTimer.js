import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {
  render() {
    if (this.props.edit) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <Timer />
      );
    }
  }
}

export default EditableTimer;