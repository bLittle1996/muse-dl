const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
  sendMessageId.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log({ tabs });
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          url: chrome.extension.getURL("icons/muse-dl-128.png"),
          imageDivId: `${guidGenerator()}`,
          tabId: tabs[0].id,
        },
        function (response) {
          console.log("Close me daddy");
        }
      );
      function guidGenerator() {
        const S4 = function () {
          return (((1 + Math.random()) * 0x10000) | 0)
            .toString(16)
            .substring(1);
        };
        return (
          S4() +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          S4() +
          S4()
        );
      }
    });
  });
}
