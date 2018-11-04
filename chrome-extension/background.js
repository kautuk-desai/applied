chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "jobsite") {
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                window.tab_id = tabs[0].id;

                console.info("tab id: " + window.tab_id);
                chrome.pageAction.show(window.tab_id);
            });
    } else {
        console.log("not a job site");
    }
});