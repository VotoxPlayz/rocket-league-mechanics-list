// Data for the mechanics list, now with more details
const mechanicsList = [
    {
        rank: 1,
        name: 'No-Bounce Psycho',
        points: 500,
        description: 'Maintaining a perfect air dribble from your own side of the field without the ball touching the ground, then hitting a psycho shot into the goal.',
        tags: ['Air Dribble', 'Psycho', 'Hard'],
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Example video
        records: [
            { username: 'Lethamyr', videoLink: 'https://www.youtube.com/watch?v=your-leth-video', date: '2025-01-15' },
            { username: 'Mister RL', videoLink: 'https://www.youtube.com/watch?v=your-mister-video', date: '2025-02-20' }
        ],
        positionHistory: ['#1 (Initial)', '#2 (Nov 2024)']
    },
    {
        rank: 2,
        name: 'Quad Flip Reset Musty',
        points: 480,
        description: 'Executing four consecutive flip resets followed by a musty flick to score a goal.',
        tags: ['Flip Reset', 'Musty', 'Insane'],
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId2',
        records: [],
        positionHistory: ['#2 (Initial)']
    },
    {
        rank: 3,
        name: 'Aero Dribble Double Tap',
        points: 450,
        description: 'Maintaining an air dribble with no boost to the backboard, then double tapping it into the goal.',
        tags: ['Air Dribble', 'Double Tap', 'High Tier'],
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId3',
        records: [],
        positionHistory: ['#3 (Initial)']
    },
    {
        rank: 4,
        name: 'Breezi Flick',
        points: 400,
        description: 'A difficult backward flick that generates significant power and is used for quick shots.',
        tags: ['Flick', 'Ground Mechanic', 'High Tier'],
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId9',
        records: [],
        positionHistory: ['#4 (Initial)']
    },
    {
        rank: 5,
        name: 'Musty Flick',
        points: 350,
        description: 'A backward-facing flip that generates a powerful shot, a classic and fundamental trickshot.',
        tags: ['Flick', 'Fundamental'],
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId10',
        records: [],
        positionHistory: ['#5 (Initial)']
    },
    // ... add all 50 mechanics here
];

const listContainer = document.getElementById('mechanics-list-container');
const detailsContainer = document.getElementById('mechanic-details-container');
const recordsContainer = document.getElementById('records-container');

// Function to render the list of mechanics on the left panel of the index.html page
function renderMechanicsList() {
    if (!listContainer) return; // Exit if not on the main page

    listContainer.innerHTML = '';
    mechanicsList.forEach(mechanic => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.dataset.rank = mechanic.rank;
        listItem.innerHTML = `<h3>#${mechanic.rank}. ${mechanic.name}</h3>`;
        listItem.addEventListener('click', () => {
            selectMechanic(mechanic.rank);
        });
        listContainer.appendChild(listItem);
    });
}

// Function to render the selected mechanic's details in the center and right panels
function selectMechanic(rank) {
    const selectedMechanic = mechanicsList.find(m => m.rank === rank);

    if (!detailsContainer || !recordsContainer || !selectedMechanic) return; // Exit if on a different page or mechanic not found

    // Clear previous details
    detailsContainer.innerHTML = '';
    recordsContainer.innerHTML = '<h2>Records</h2>';

    // Highlight the selected item in the list
    document.querySelectorAll('.list-item').forEach(item => {
        item.classList.remove('active');
    });
    const activeItem = document.querySelector(`.list-item[data-rank="${rank}"]`);
    if(activeItem) {
        activeItem.classList.add('active');
    }

    // Render details in the center panel
    const detailHtml = `
        <div class="mechanic-detail">
            <h3>#${selectedMechanic.rank}. ${selectedMechanic.name}</h3>
            <p class="mechanic-info">Points: <span>${selectedMechanic.points}</span></p>
            <div class="video-embed">
                <iframe src="${selectedMechanic.videoUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="mechanic-description-box">
                <h4>Description</h4>
                <p>${selectedMechanic.description}</p>
            </div>
            <h4>Tags</h4>
            <ul class="tags-list">
                ${selectedMechanic.tags.map(tag => `<li class="tag-item">${tag}</li>`).join('')}
            </ul>
            <h4>Position History</h4>
            <ul class="history-list">
                ${selectedMechanic.positionHistory.map(history => `<li class="history-item">${history}</li>`).join('')}
            </ul>
        </div>
    `;
    detailsContainer.innerHTML = detailHtml;

    // Render records in the right panel
    if (selectedMechanic.records.length > 0) {
        const recordsHtml = `
            <ul class="records-list">
                ${selectedMechanic.records.map(record => `
                    <li>
                        <a href="${record.videoLink}" target="_blank">${record.username}</a> on ${record.date}
                    </li>
                `).join('')}
            </ul>
        `;
        recordsContainer.innerHTML += recordsHtml;
    } else {
        recordsContainer.innerHTML += '<p class="placeholder-text">No records submitted yet.</p>';
    }
}

// Event listeners for form submissions on the submit.html page
const recordForm = document.getElementById('record-form');
const mechanicForm = document.getElementById('mechanic-form');

if (recordForm) {
    recordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(recordForm);
        let message = 'Record Submission Details:\n';
        for (const [key, value] of formData.entries()) {
            message += `${key}: ${value}\n`;
        }
        alert(message + '\nThis data is not saved. You must manually add it to the leaderboard and list in the script.js file.');
    });
}

if (mechanicForm) {
    mechanicForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(mechanicForm);
        let message = 'Mechanic Suggestion Details:\n';
        for (const [key, value] of formData.entries()) {
            message += `${key}: ${value}\n`;
        }
        alert(message + '\nThis data is not saved. You must manually add this to the list and assign a rank.');
    });
}

// Initial render logic
document.addEventListener('DOMContentLoaded', () => {
    // This check is now more robust, looking for specific container elements
    if (listContainer && detailsContainer && recordsContainer) {
        renderMechanicsList();
        // Automatically select the first mechanic on load
        if (mechanicsList.length > 0) {
            selectMechanic(mechanicsList[0].rank);
        }
    }
});
