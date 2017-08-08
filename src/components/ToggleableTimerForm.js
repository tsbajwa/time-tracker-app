import React from 'react';
import TimerForm from './TimerForm';
import toggleIcon from '../assets/toggle.png';

export default class ToggleableTimerForm extends React.Component {
  state = {
    isFormOpen: false,
  }

  handleFormOpen = () => {
    this.setState({ isFormOpen: true, })
  }

  handleFormClose = () => {
    this.setState({ isFormOpen: false, })
  }

  handleFormSubmit = (title, proj) => {
    this.handleFormClose();
    this.props.onFormSubmit(title, proj);
  }

  render() {
    if (this.state.isFormOpen) {
      return (
        <TimerForm
        btnText='Create'
        onFormClose={this.handleFormClose}
        onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      return (
        <div>
          <img src={toggleIcon} onClick={this.handleFormOpen} alt="Add timer" />
        </div>
      )
    }
  }
}



