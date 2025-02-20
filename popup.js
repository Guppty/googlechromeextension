document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-btn');

    // Initial state
    chrome.storage.sync.get('adBlockerEnabled', function(data) {
        if (data.adBlockerEnabled === false) {
            toggleButton.textContent = 'Enable Ad Blocker';
        } else {
            toggleButton.textContent = 'Disable Ad Blocker';
        }
    });

    // Toggle action
    toggleButton.addEventListener('click', function() {
        chrome.storage.sync.get('adBlockerEnabled', function(data) {
            const newState = data.adBlockerEnabled !== false;
            chrome.storage.sync.set({ 'adBlockerEnabled': newState }, function() {
                toggleButton.textContent = newState ? 'Disable Ad Blocker' : 'Enable Ad Blocker';
            });
        });
    });
});
