import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render() {
    return(
      <div>
        <EditableTimer 
        edit={true}
        title='Example Title'
        project='Example project'
        />
        <EditableTimer 
        edit={false}
        title='Example2'
        project='Examples'
        />
      </div>
    );
  }
}

export default EditableTimerList;