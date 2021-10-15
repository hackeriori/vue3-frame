declare const baseAPI: string;
declare const To: typeof import('./server/awaitTo').default;

interface Window {
  versionInfo?: {
    [key: string]: string,
  }
}