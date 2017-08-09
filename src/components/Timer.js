import React from 'react';
import DualButton from './DualButton';
import edit from '../assets/edit.png';
import del from '../assets/del.png';
import { msToTime } from '../util/helpers';

export default class Timer extends React.Component {
  state = {
    timerRunning: true,
  }

  handleStartClick = (e) => {
    this.timerOff()
    this.props.timerStartTime(this.props.id);
    this.refreshTimerDOM = setInterval(this.props.updateTime,1000,this.props.id);
  }

  handleStopClick = () => {
    this.timerOn()
    clearInterval(this.refreshTimerDOM);
    this.props.recordPaused(this.props.id);
  }

  timerOn = () => {
    this.setState({ timerRunning: true, })
  }

  timerOff = () => {
    this.setState({ timerRunning: false, })
  }
  render() {
    return (
      <div className='timer'>
        <div className='timer__headings'>
          <h1>{this.props.title}</h1>
          <p>{this.props.project}</p>
        </div>
        <div className='timer__time'>
         {msToTime(this.props.elapsed)}
        </div>
        <div className='timer__editOptions'>
         <img src={edit} onClick={this.props.iconOneClick} alt='Edit timer' />
         <img src={del} onClick={() => this.props.iconTwoClick(this.props.id)} alt='Delete Timer' />
        </div>
        <DualButton
          start={this.state.timerRunning}
          startOnClick={this.handleStartClick}
          startBtnText='Start'
          stopOnClick={this.handleStopClick}
          stopBtnText='Stop'
          />
      </div>
    );
  }
}
