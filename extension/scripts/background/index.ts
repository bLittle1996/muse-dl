chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color: "green" }, () => {
    console.log("Color set to greeeeen");
  });
});
