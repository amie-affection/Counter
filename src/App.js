import React, { Component } from "react";
import Counter from "./components/counter/Counter";

class App extends Component {
  state = { isShow: true };

  clickToggle = () =>
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }));

  render() {
    const { isShow } = this.state;

    return (
      <>
        {isShow && <Counter />}

        <button type="button" onClick={this.clickToggle}>
          Toggle
        </button>
      </>
    );
  }
}

export default App;
