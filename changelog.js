export const CHANGELOG_DATA = [
    {
        version: "v1.3.0",
        date: "2025-12-05",
        changes: [
            "Added automatic GPS location detection for higher accuracy.",
            "Visual improvements to the results page.",
            "Separate API keys for better development security.",
            "Added this shiny new Changelog popup!"
        ]
    },
    {
        version: "v1.2.0",
        date: "2025-12-04",
        changes: [
            "Introduced Manual Location Override.",
            "Added settings to switch Gemini Models.",
            "Improved error handling for camera permissions."
        ]
    }
];

export function checkAndShowChangelog(currentVersion) {
    const storedVersion = localStorage.getItem('last_seen_version');

    // Simple semver check: if stored is different from current, show it.
    // In a robust app, we might parse semver, but string inequality works for simple "new version" alerts.
    if (storedVersion !== currentVersion) {
        showChangelogModal(currentVersion);
        localStorage.setItem('last_seen_version', currentVersion);
    }
}

function showChangelogModal(version) {
    // Find or create modal container
    let modal = document.getElementById('changelog-modal');
    if (!modal) return; // Should be in HTML, or we could create it here

    const listContainer = document.getElementById('changelog-list');
    if (listContainer) {
        const latest = CHANGELOG_DATA.find(d => d.version === version);
        if (latest) {
            const html = `
                <h3>What's New in ${latest.version}</h3>
                <small>${latest.date}</small>
                <ul>
                    ${latest.changes.map(c => `<li>${c}</li>`).join('')}
                </ul>
            `;
            listContainer.innerHTML = html;
        } else {
            // Fallback if version not found in list (e.g. minor patch)
            listContainer.innerHTML = `<p>Welcome to version ${version}! Check out the new features.</p>`;
        }
    }

    modal.classList.add('active');

    const closeBtn = document.getElementById('close-changelog-btn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('active');
        };
    }
}
