import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render() {
    return(
      <div>
        <EditableTimer 
        edit={true}
        />
        <EditableTimer />
      </div>
    );
  }
}

export default EditableTimerList;