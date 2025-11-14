document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (UI only)
    if (username === 'admin' && password === 'admin123') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboardPage').style.display = 'block';
    } else {
        alert('Invalid credentials! Try: admin / admin123');
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('loginForm').reset();
});

function deleteEvent(id) {
    if (confirm('Are you sure you want to delete this event?')) {
        const row = document.querySelector(`tr[data-id="${id}"]`);
        row.remove();
        alert('Event deleted successfully!');
    }
}

function editEvent(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    const cells = row.getElementsByTagName('td');
    
    const currentName = cells[1].textContent;
    const currentDate = cells[2].textContent;
    const currentTime = cells[3].textContent;
    
    const newName = prompt('Enter Event Name:', currentName);
    if (newName === null) return;
    const newDate = prompt('Enter Event Date:', currentDate);
    if (newDate === null) return;
    const newTime = prompt('Enter Event Time:', currentTime);
    if (newTime === null) return;
    
    if (newName) cells[1].textContent = newName;
    if (newDate) cells[2].textContent = newDate;
    if (newTime) cells[3].textContent = newTime;
    if (newParticipants) cells[4].textContent = newParticipants;
    
    alert('Event updated successfully!');
}