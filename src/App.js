import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Counter from "./components/counter/Counter";
import CounterPageHook from "./components/counter/CounterPageHook";

class App extends Component {
  state = { isShow: false };

  clickToggle = () =>
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));

  render() {
    const { isShow } = this.state;

    return (
      <BrowserRouter>
        <header>
          <nav>
            <ul
              style={{
                listStyle: "none",
                fontSize: "20px",
                paddingLeft: "15px",
              }}
            >
              <li style={{ marginBottom: "5px" }}>
                <Link to="/">CounterPage</Link>
              </li>
              <li>
                <Link to="/CounterPageHook">CounterPageHook</Link>
              </li>
            </ul>
          </nav>
        </header>

        <button
          type="button"
          onClick={this.clickToggle}
          style={{
            margin: "10px",
            border: "none",
            height: "30px",
            width: "190px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Toggle
        </button>

        <Switch>
          <Route exact path="/" component={isShow && Counter} />
          <Route
            path="/CounterPageHook"
            component={isShow && CounterPageHook}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
