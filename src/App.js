import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };

  apiKey = process.env.REACT_APP_NEWS_API;

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  // [progress, setProgress] = useState(0);

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            </Route>

            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            </Route>

            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            </Route>

            {/* <Route exact path="/general">
              <News setProgress={this.setProgress} apiKey = {apiKey}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            </Route> */}

            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={6}
                country="in"
                category="health"
              />
            </Route>

            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />
            </Route>

            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />
            </Route>

            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
