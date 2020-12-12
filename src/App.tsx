import React, { Component } from 'react';
import { remoteApp } from './types';
import { remoteApps } from './config/config';

import './styles/App.scss';

interface AppState {
  allApps: remoteApp[];
  currentApp: remoteApp;
  loadedApps: remoteApp[];
}

class App extends Component<{}, AppState> {
  componentWillMount() {
    const apps = remoteApps.apps || [];

    this.setState({
      allApps: apps,
      loadedApps: [],
      currentApp: apps[0],
    });
  }

  updateFrame(app: remoteApp) {
    this.setState({
      currentApp: app,
    });
  }

  isCurrentApp(app: remoteApp) {
    if (app === this.state.currentApp) {
      return true;
    }
  }

  render() {
    const { name, url } = this.state.currentApp;

    return (
      <div className="app">
        <div className="app__links">
          {this.state.allApps.map(app => (
            <button
              key={app.name}
              type="button"
              onClick={() => this.updateFrame(app)}
              className={this.isCurrentApp(app) ? 'app__link app__link--current' : 'app__link'}
            >
              <img
                src={app.icon}
                alt={app.name}
                className="app__image"
              />
              <span className="app__label">
                {app.name}
              </span>
            </button>
          ))}
        </div>
        <div className="app__content">
          <div className="app__frames">
            <iframe
              title={name}
              src={url}
              className="app__frame"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
