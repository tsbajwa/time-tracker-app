import React from 'react';
import TimerForm from './TimerForm';
import toggleIcon from '../assets/toggle.png';

class ToggleableTimerForm extends React.Component {
  state = {
    toggle: false,
  }
  render() {
    if (this.state.toggle) {
      return (
        <TimerForm 
        btnText='Create'
        />
      );
    } else {
      return (
        <div>
          <img src={toggleIcon} alt="Add timer" />
        </div>
      )
    }
  }
}

export default ToggleableTimerForm;