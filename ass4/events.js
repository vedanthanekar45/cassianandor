document.addEventListener('DOMContentLoaded', () => {
    const allEvents = [
        {
            title: 'Mystery Novel Book Club',
            date: 'November 20, 2025',
            time: '6:00 PM - 8:00 PM',
            description: 'Join us for a discussion on "The Silent Patient" by Alex Michaelides. Come prepared with your thoughts and theories!'
        },
        {
            title: 'Author Talk & Signing with Sarah Mitchell',
            date: 'November 27, 2025',
            time: '5:30 PM - 7:30 PM',
            description: 'Meet local bestselling author Sarah Mitchell as she discusses her latest novel and signs copies for attendees.'
        },
        {
            title: 'Creative Writing Workshop: Character Development',
            date: 'December 5, 2025',
            time: '3:00 PM - 6:00 PM',
            description: 'Learn the art of creating compelling characters with experienced author and writing coach, James Cooper.'
        },
        {
            title: 'Classic Literature Reading Group',
            date: 'December 12, 2025',
            time: '7:00 PM - 9:00 PM',
            description: 'This month we\'re exploring "Pride and Prejudice" by Jane Austen. All are welcome!'
        },
        {
            title: 'Children\'s Story Time',
            date: 'Every Saturday',
            time: '11:00 AM - 12:00 PM',
            description: 'Bring your little ones for engaging stories, songs, and activities. Perfect for ages 3-8.'
        }
    ];

    const searchBar = document.getElementById('event-search-bar')
    const eventContainer = document.getElementById('event-list-container')

    function displayEvents (eventsToDisplay) {
        eventContainer.innerHTML = '';
        if (eventsToDisplay.length == 0) {
            eventContainer.innerHTML = '<p>Oops! Should there be something here?</p>';
            return;
        }

        eventsToDisplay.forEach(event => {
            const eventCardHTML = `
            <div class="event-card">
                <h2>${event.title}</h2>
                <p><strong>Date:</strong>${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Description:</strong>${event.description}</p>
            </div>
            `;
            eventContainer.innerHTML += eventCardHTML
        })
    }

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase()
        const filteredEvents = allEvents.filter(event => {
            return event.title.toLowerCase().includes(searchTerm)
        })
        displayEvents(filteredEvents);
    })

    displayEvents(allEvents);
})