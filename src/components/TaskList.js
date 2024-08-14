// ## TaskList.js ##
//
// The TaskList component renders a view for a list of tasks.

const React = require('react');

const Task = (props) => {
  const element = (
  <li>
    <input type="checkbox" checked={props.completed} readOnly />
    {props.description}
  </li>);
  return element;
}

class TaskList extends React.Component {
  static get defaultProps(){
    return {heading: 'Untitled List'};
  }  
  
  constructor(props){
    super(props);
    // Define state variables
    this.state = {name: ''};
  }

  render() {

    const onNameChange = (event) => {
      this.setState({name:event.target.value})
    }

    const onButtonClick = (event) => {
      this.props.showMessage('Hello, ' + this.state.name + '!');
    };

    const props = this.props;

    const element = (
      <div>
        <h1>{props.heading}</h1>
        <input type="text" value={this.state.name} onChange={onNameChange} />
        <button onClick={onButtonClick}>Test</button>
        <ul>
          {props.myTasks.map(task => <Task key={task.id} {...task} />)}
        </ul>
      </div>
    );
    return element;
  }
};

// Export the TaskList component
module.exports = TaskList;
