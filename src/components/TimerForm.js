import React from 'react';
import Button from './Button';

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value, })
  }

  handleProjectChange = (e) => {
    this.setState({ project: e.target.value })
  }

  handleUpdateClick = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state.title, this.state.project, this.props.id);
    this.props.toggleState();
  }

  handleCreateClick = (e) => {
    e.preventDefault();
    this.props.create(this.state.title, this.state.project);
    this.props.toggleState();
  }

  handleCancelClick = (e) => {
    e.preventDefault();
    this.props.toggleState();
  }

  render() {
    const btnValue = this.props.title ? 'Update' : 'Create';
    const btnOnClick = this.props.title ? this.handleUpdateClick : this.handleCreateClick;
    return (
      <div>
        <div>
          <p>Title</p>
          <input type='text'  value={this.state.title} onChange={this.handleTitleChange}/>
          <p>Project</p>
          <input type='text' value={this.state.project} onChange={this.handleProjectChange}/>
        </div>
        <div>
          <Button 
          btnText= {btnValue}
          onClick={btnOnClick}
          />
          <Button 
          btnText='Cancel'
          onClick={this.handleCancelClick}
          />
        </div>
      </div>
    );
  }
}

export default TimerForm;

// TODO: Change this.props.btnText to be based upon whether there is a title or not