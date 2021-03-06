import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

export default class EditableTimer extends React.Component {
  state = {
    edit: false,
  }

  handleFormClose = () => {
    this.closeForm();
  }
  handleFormOpen = () => {
    this.openForm();
  }
  handleFormSubmit = (title, proj, id) => {
    this.handleFormClose();
    this.props.onFormSubmit(title, proj, id);
  }
  handleIconOneClick = () => {
    this.openForm();
  }
  openForm = () => {
    this.setState({ edit: true });
  }
  closeForm = () => {
    this.setState({ edit: false });
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
        runningSince={this.props.runningSince}
        id={this.props.id}
        iconOneClick={this.handleIconOneClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
        iconTwoClick={this.props.onDeleteClick}
        />
      );
    }
  }
}
