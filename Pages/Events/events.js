// Array of event objects
const events = [
    {
        title: 'Golden Eye Fest',
        date: 'August 28th 2024',
        imgSrc: '../../Assets/EventPanel (2).jpg',
        altText: 'Golden Eye Fest'
    },
    {
        title: 'SAGAMAM 24\'',
        date: 'May 8th 2024',
        imgSrc: '../../Assets/EventPanel.jpg',
        altText: 'SAGAMAM 24\''
    },
    {
        title: 'AVAYZA 24\'',
        date: 'January 16th 2024',
        imgSrc: '../../Assets/EventPanel (1).jpg',
        altText: 'AVAYZA 24\''
    }
];

// Current event index
let currentIndex = 0;

// DOM Elements
const eventImage = document.getElementById('event-image');
const eventTitle = document.getElementById('event-title');
const eventDate = document.getElementById('event-date');

// Update event card content
function updateEvent(index) {
    eventImage.src = events[index].imgSrc;
    eventImage.alt = events[index].altText;
    eventTitle.textContent = events[index].title;
    eventDate.textContent = events[index].date;
}

// Handle next button click
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % events.length; // Loop back to first event
    updateEvent(currentIndex);
});

// Handle prev button click
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + events.length) % events.length; // Loop back to last event
    updateEvent(currentIndex);
});
