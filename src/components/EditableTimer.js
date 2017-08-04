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

  render() {
    if (this.state.edit) {
      return (
        <TimerForm 
        title={this.props.title}
        project={this.props.project}
        id={this.props.id}
        toggleState={this.handleToggle}
        handleUpdate={this.props.handleUpdate}
        />
      );
    } else {
      return (
        <Timer 
        title={this.props.title}
        project={this.props.project}
        elapsed={this.props.elapsed}
        id={this.props.id}
        toggleState={this.handleToggle}
        delete={this.props.delete}
        />
      );
    }
  }
}

export default EditableTimer;