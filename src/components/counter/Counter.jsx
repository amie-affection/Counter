import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("keydown", this.keyShow);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    // console.log(this.state.value);
    // console.log(prevState.value);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("keydown", this.keyShow);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  keyShow = (e) => {
    console.log(e.key);
  };

  inc = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
    // console.log(this.state.value);
  };

  dec = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    console.log("RENDER");
    const { value } = this.state;
    return (
      <div>
        <button className={styles.btn} type="button" onClick={this.inc}>
          Plus
        </button>
        <span>{value}</span>
        <button className={styles.btn} type="button" onClick={this.dec}>
          Minus
        </button>
      </div>
    );
  }
}

export default Counter;
