// ## TaskList.js ##
//
// The TaskList component renders a view for a list of tasks.

const React = require('react');

class TaskList extends React.Component{
  render()
  {
    const element = (
      <div>
        <h1>{this.props.heading} React Component</h1>
        <ul>
          <li>Clean my bed</li>
          <li>Finish my homework</li>
          <li>Brush my teeth</li>
        </ul>
      </div>
    );
  }
};

// Export the TaskList component
module.exports = TaskList;
