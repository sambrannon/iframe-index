export type remoteApp = {
  name: string;
  url: string;
  iconName: string;
}

export type remoteAppsConfig = {
  apps?: remoteApp[];
}
