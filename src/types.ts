export type remoteApp = {
  name: string;
  url: string;
  icon?: string;
}

export type remoteAppsConfig = {
  apps?: remoteApp[];
}

export type siteConfig = {
  title: string;
}
