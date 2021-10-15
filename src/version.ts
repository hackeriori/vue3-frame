export default function setVersion() {
  const windowProxy = window.top || window;
  if (!windowProxy.versionInfo)
    windowProxy.versionInfo = {};
  windowProxy.versionInfo[process.env.projName!] = process.env.version!;
}