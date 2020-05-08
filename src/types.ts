export type remoteApp = {
  name: string;
  url: string;
  icon?: string;
}

export type remoteAppsConfig = {
  apps?: remoteApp[];
}
