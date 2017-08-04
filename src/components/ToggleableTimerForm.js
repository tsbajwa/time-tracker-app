import React from 'react';
import TimerForm from './TimerForm';
import toggleIcon from '../assets/toggle.png';

class ToggleableTimerForm extends React.Component {
  state = {
    toggle: false,
  }

  handleToggle = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }))
  }

  render() {
    if (this.state.toggle) {
      return (
        <TimerForm 
        btnText='Create'
        handleUpdate={this.props.handleUpdate}
        toggleState={this.handleToggle}

        />
      );
    } else {
      return (
        <div>
          <img src={toggleIcon} onClick={this.handleToggle} alt="Add timer" />
        </div>
      )
    }
  }
}

export default ToggleableTimerForm;


