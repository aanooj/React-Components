import React from 'react';
const Element = React.createElement('h1',{
  className: 'red',
},'Component with no JSX');

class ComponentNoJSX extends React.Component {
  render() {
    return React.createElement('div',{
      className: 'component',
    },Element);
  }
}

export default ComponentNoJSX;