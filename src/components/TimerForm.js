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

  render() {
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
          btnText= {this.props.btnText || 'Update'}
          />
          <Button 
          btnText='Cancel'
          />
        </div>
      </div>
    );
  }
}

export default TimerForm;

// TODO: Change this.props.btnText to be based upon whether there is a title or not