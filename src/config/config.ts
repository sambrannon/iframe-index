import { remoteAppsConfig, siteConfig } from '../types';

export const site: siteConfig = {
  title: 'My App title',
}

export const remoteApps: remoteAppsConfig = {
  apps: [
    {
      name: 'Placeholder',
      url: 'https://google.com',
      icon: require('../config/icons/placeholder.svg'),
    },
  ]
};
