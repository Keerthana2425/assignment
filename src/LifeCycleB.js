import React, { Component } from "react";

export default class NewClassB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "peddabbigari",
    };
    console.log("life cycleB constructor", this.state.name);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("life cycleB get derived state from props");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB Component did mount");
  }

  shouldComponentUpdate() {
    console.log("lifecycleB should Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("life cycleB snapshot before update");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("lifecycleB render");
    return <div>LifecycleB</div>;
  }
}
