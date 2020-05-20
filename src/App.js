import React from "react";
import "./styles.css";

import PureFunction from "../components/pureFunction";
import PureFunctionWithProps from "../components/pureFunctionWithProps";
import ClassComponent from "../components/classComponent";
import PureComponent from "../components/pureComponent";
import CreateClassComponent from "../components/createClassComponent";
import ComponentNoJSX from "../components/ComponentNoJSX";
export default function App() {
  return (
    <div className="App">
      <h1>Many ways to render React component</h1>
      <PureFunction />
      <PureFunctionWithProps name="pure component" />
      <ClassComponent name="hello world" />
      <PureComponent />
      <CreateClassComponent />
      <ComponentNoJSX />
    </div>
  );
}
