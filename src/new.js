import React, { Component } from "react";
import NewClassB from "./LifeCycleB";

export default class NewClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "keerthana",
      bool: this.props.bool,
    };
    console.log("life cycleA constructor", this.state.fname);
    this.stateChange = this.stateChange.bind(this);
  }
  stateChange() {
    this.setState((state) => ({
      bool: !state.bool,
    }));
  }

  static getDerivedStateFromProps(props, state) {
    console.log("life cycleA get derived state from props");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA Component did mount");
  }

  shouldComponentUpdate() {
    console.log("lifecycleA should Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycle A snapshot before update");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycle A componentDidUpdate");
  }

  render() {
    console.log("lifecycleA render");
    return (
      <div>
        {this.state.bool ? (
          <div>{this.state.fname}</div>
        ) : (
          <div>peddabbigari</div>
        )}
        <button onClick={this.stateChange} style={{ color: "red" }}>
          Click Here
        </button>
        <NewClassB />
      </div>
    );
  }
}
