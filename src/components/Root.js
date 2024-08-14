// ## Root.js ##
//
// This is our top-level React component which contains all of our other
// components in a tree-like hierarchy. This component is mounted into the
// DOM in "client.js".

const React = require('react');

// Require our TaskList React component from "TaskList.js"
const TaskList = require('./TaskList');

//An array of tasks
const tasks = [
  {id: 1, description: 'Clean by bed', completed: false},
  {id: 2, description: 'Finish my homework', completed: true},
  {id: 3, description: 'Brush my teeth', complete:false}
];

// Here is where we actually define the Root component. At the moment it just
// contains a single component, TaskList.
const Root = () => {
  const element = <TaskList myTasks={tasks} showMessage = {(message) => alert(message)}/>;
  return element;
};

// Export the Root component
module.exports = Root;
