
// https://developer.chrome.com/blog/extension-side-panel-launch
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));