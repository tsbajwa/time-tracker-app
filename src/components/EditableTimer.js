import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends React.Component {
  state = {
    edit: false,
  }

  handleToggle = () => {
    this.setState((prevState) => ({edit: !prevState.edit}))
  }

  handleFormClose = () => {
    this.setState( { edit: false })
  }

  handleFormOpen = () => {
    this.setState({ edit: true })
  }

  handleFormSubmit = (title, proj, id) => {
    this.handleFormClose()
    this.props.handleUpdate(title, proj, id)

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
        onFormOpen={this.handleFormOpen}
        delete={this.props.delete}
        toggleTimer={this.props.toggleTimer}
        timerStartTime={this.props.timerStartTime}
        recordPaused={this.props.recordPaused}
        />
      );
    }
  }
}

export default EditableTimer;