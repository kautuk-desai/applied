console.log("job site visited...");
    chrome.runtime.sendMessage({
        message: "jobsite",
        data: "user_name",
    });