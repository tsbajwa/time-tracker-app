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
    e.preventDefault()
    this.props.handleUpdate(this.state.title, this.state.project, this.props.id);
    // TODO:Will i need to toggle state(toggle and edit) or rerender will occur and take care of that
  }
  // TODO: Check - Don't need to change state, as it should rerender with defaults?
  handleCancelClick = (e) => {
    e.preventDefault()
    //this.setState({title: this.props.title || '', project: this.props.project || ''} )
    this.props.toggleState()
  }

  render() {
    const btnValue = this.props.title ? 'Update' : 'Create'
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
          onClick={this.handleUpdateClick}
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