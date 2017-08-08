import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component {
  state = {
    edit: false,
  }

  handleFormClose = () => {
    this.setState( { edit: false })
  }

  handleFormOpen = () => {
    this.setState({ edit: true })
  }

  handleFormSubmit = (title, proj, id) => {
    this.handleFormClose()
    this.props.onFormSubmit(title, proj, id)

  }
  render() {
    if (this.state.edit) {
      return (
        <TimerForm 
        title={this.props.title}
        project={this.props.project}
        id={this.props.id}
        onFormClose={this.handleFormClose}
        onFormSubmit={this.handleFormSubmit}
        />
      );
    } else {
      return (
        <Timer 
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        id={this.props.id}
        iconOneClick={this.handleFormOpen}
        toggleTimer={this.props.toggleTimer}
        timerStartTime={this.props.timerStartTime}
        recordPaused={this.props.recordPaused}
        iconTwoClick={this.props.onClick}
        />
      );
    }
  }
}
