let isEnabled = true;

document.getElementById("toggleButton").addEventListener("click", function() {
    isEnabled = !isEnabled; // Toggle the state

    if (isEnabled) {
        // Enable the ad-blocking
        chrome.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: ["ruleset_1"] });
        this.textContent = "Disable Blocker";
    } else {
        // Disable the ad-blocking
        chrome.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: ["ruleset_1"] });
        this.textContent = "Enable Blocker";
    }
});
