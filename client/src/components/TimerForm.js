import React from 'react';
import Button from './Button';

export default class TimerForm extends React.Component {
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

  handleSubmit = () => {
    this.props.onFormSubmit(this.state.title, this.state.project, this.props.id)
  }


  render() {
    const btnValue = this.props.id ? 'Update' : 'Create';
    return (
      <div className="timerForm">
        <div className="timerForm__headingContainer">
          <p>Title</p>
          <input className="timerForm__input" type='text'  value={this.state.title} onChange={this.handleTitleChange}/>
          <p>Project</p>
          <input className="timerForm__input" type='text' value={this.state.project} onChange={this.handleProjectChange}/>
        </div>
        <div className="timerForm__btnContainer">
          <Button 
          btnText= {btnValue}
          onClick={this.handleSubmit}
          className='timerForm__btn timerForm__btn--blue'
          />
          <Button 
          btnText='Cancel'
          onClick={this.props.onFormClose}
          className='timerForm__btn timerForm__btn--red'
          />
        </div>
      </div>
    );
  }
}
