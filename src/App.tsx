import React, { Component } from 'react';
import { remoteApp } from './types';
import { remoteApps } from './config/config';

interface AppState {
  allApps: remoteApp[];
  currentApp: remoteApp;
}

class App extends Component<{}, AppState> {
  componentWillMount() {
    const apps = remoteApps.apps || [];

    this.setState({
      allApps: apps,
      currentApp: apps[1],
    });
  }

  render() {
    const { name, url, iconName } = this.state.currentApp;

    return (
      <div className="app">
        <div className="app__links">
          {this.state.allApps.map(app => (
            <div>
              {app.name}
            </div>
          ))}
        </div>
        <div className="app__frame">
          <iframe
            title={name}
            src={url}
          />
        </div>
      </div>
    );
  }
}

export default App;
