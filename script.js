// This data will be used to populate the list dynamically
const mechanicsList = [
    {
        rank: 1,
        name: 'No-Bounce Psycho',
        points: 500,
        description: 'Maintaining a perfect air dribble from your own side of the field without the ball touching the ground, then hitting a psycho shot into the goal.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Example video, replace with real one
    },
    {
        rank: 2,
        name: 'Quad Flip Reset Musty',
        points: 480,
        description: 'Executing four consecutive flip resets followed by a musty flick to score a goal.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId2'
    },
    {
        rank: 3,
        name: 'Aero Dribble Double Tap',
        points: 450,
        description: 'Maintaining an air dribble with no boost to the backboard, then double tapping it into the goal.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId3'
    },
    {
        rank: 4,
        name: 'Triple Flip Reset Pogo',
        points: 430,
        description: 'A difficult combination of three flip resets leading directly into a pogo shot.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId4'
    },
    {
        rank: 5,
        name: 'Ceiling Pinch Double Tap',
        points: 400,
        description: 'Pinching the ball off the ceiling to generate extreme speed, then double tapping it with precise timing.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId5'
    },
    {
        rank: 6,
        name: 'Maktuf-Stall Flip Reset',
        points: 380,
        description: 'A flip reset followed by a stall to adjust momentum for the follow-up shot.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId6'
    },
    {
        rank: 7,
        name: 'Wall Pinch to Musty',
        points: 350,
        description: 'Pinches the ball off the side wall and quickly gets under it to perform a musty flick.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId7'
    },
    {
        rank: 8,
        name: 'Pre-Flip Double Touch',
        points: 330,
        description: 'A pre-flipped aerial touch on the backboard, followed by an air roll to get a double-tap.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId8'
    },
    {
        rank: 9,
        name: 'Breezi Flick',
        points: 310,
        description: 'A difficult backward flick that generates significant power and is used for quick shots.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId9'
    },
    {
        rank: 10,
        name: 'Musty Flick',
        points: 290,
        description: 'A backward-facing flip that generates a powerful shot, a classic and fundamental trickshot.',
        videoUrl: 'https://www.youtube.com/embed/exampleVideoId10'
    },
    // ... add more mechanics up to 50
];

// Function to create a mechanic card HTML element
function createMechanicCard(mechanic) {
    const card = document.createElement('div');
    card.className = 'mechanic-card';

    card.innerHTML = `
        <h3>#${mechanic.rank}. ${mechanic.name}</h3>
        <p class="points">Points: ${mechanic.points}</p>
        <p>${mechanic.description}</p>
        ${mechanic.videoUrl ? `
            <div class="video-embed">
                <iframe src="${mechanic.videoUrl}" frameborder="0" allowfullscreen></iframe>
            </div>
        ` : ''}
    `;

    return card;
}

// Function to render the entire list
function renderMechanicsList() {
    const listContainer = document.querySelector('.list-container');
    mechanicsList.forEach(mechanic => {
        const card = createMechanicCard(mechanic);
        listContainer.appendChild(card);
    });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', renderMechanicsList);

// Simple form submission handlers (client-side only)
document.getElementById('submit-record').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Record submitted! Since this is a static site, this data will not be saved. You will need to manually add it to the leaderboard HTML.');
});

document.getElementById('submit-mechanic').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mechanic suggestion submitted! Since this is a static site, this data will not be saved. You will need to manually review and add it to the list HTML.');
});
