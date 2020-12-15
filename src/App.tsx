import React, { Component } from 'react';
import { remoteApp } from './types';
import { remoteApps, site } from './config/config';

import './styles/App.scss';

interface AppState {
  allApps: remoteApp[];
  currentApp: remoteApp;
  loadedApps: remoteApp[];
}

class App extends Component<{}, AppState> {
  componentWillMount() {
    const apps = remoteApps.apps || [];

    document.title = site.title;

    this.setState({
      allApps: apps,
      loadedApps: [apps[0]],
      currentApp: apps[0],
    });
  }

  loadFrame(app: remoteApp) {
    this.setState({
      loadedApps: [...this.state.loadedApps, app],
    });
  }

  updateFrame(app: remoteApp) {
    if (!this.state.loadedApps.includes(app)) {
      this.loadFrame(app);
    }

    this.setState({ currentApp: app });
  }

  isCurrentApp(app: remoteApp) {
    if (app === this.state.currentApp) {
      return true;
    }
  }

  render() {
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
            {this.state.loadedApps.map(app => (
              <iframe
                key={app.name}
                title={app.name}
                src={app.url}
                className={this.isCurrentApp(app) ? 'app__frame app__frame--current' : 'app__frame'}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
