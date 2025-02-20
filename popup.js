document.addEventListener('DOMContentLoaded', function() {
    const ruleList = document.getElementById('rule-list');
    const statusText = document.getElementById('status');
    const toggleButton = document.getElementById('toggle');

    const rules = [
        { id: 1, url: "doubleclick.net" },
        { id: 2, url: "googleadservices.com" },
        { id: 3, url: "ad.doubleclick.net" },
        { id: 4, url: "adclick.net" }
    ];

    // Insert rules into the list
    rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = `Blocking: ${rule.url}`;
        ruleList.appendChild(li);
    });

    // Toggle the ad blocker on/off
    toggleButton.addEventListener('click', function() {
        if (statusText.textContent === 'Active') {
            statusText.textContent = 'Inactive';
            statusText.style.color = 'red';
            toggleButton.textContent = 'Enable Ad Blocker';
        } else {
            statusText.textContent = 'Active';
            statusText.style.color = 'green';
            toggleButton.textContent = 'Disable Ad Blocker';
        }
    });
});
