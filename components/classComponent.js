import React from "react";

class ClassComponent extends React.Component {
  render() {
    return (
      <div className="component">
        <h1>Class component with name : {this.props.name}</h1>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: "class component"
};

export default ClassComponent;
