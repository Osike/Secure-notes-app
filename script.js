let notes = [];
let currentNoteIndex = null;

document.getElementById('showRegister').addEventListener('click', function () {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function () {
    document.getElementById('register').style.display = 'none';
    document.getElementById('auth').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Handle login logic here
    alert('Login functionality not implemented yet.');
    showNotes(); // Simulate login success
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Handle registration logic here
    alert('Registration functionality not implemented yet.');
});

document.getElementById('noteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;

    if (currentNoteIndex !== null) {
        // Update existing note
        notes[currentNoteIndex] = { title, content };
        currentNoteIndex = null;
    } else {
        // Create new note
        notes.push({ title, content });
    }

    document.getElementById('noteForm').reset();
    displayNotes();
});

function displayNotes() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <strong>${note.title}</strong>
            <p>${note.content}</p>
            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(noteDiv);
    });
}

function editNote(index) {
    currentNoteIndex = index;
    document.getElementById('noteTitle').value = notes[index].title;
    document.getElementById('noteContent').value = notes[index].content;
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

function searchNotes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm) || 
        note.content.toLowerCase().includes(searchTerm)
    );

    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    filteredNotes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <strong>${note.title}</strong>
            <p>${note.content}</p>
            <button onclick="editNote(${index})">Edit</button>
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(noteDiv);
    });
}

document.getElementById('logoutButton').addEventListener('click', function () {
    logout();
});

function logout() {
    // Clear notes and reset the interface
    notes = [];
    currentNoteIndex = null;
    document.getElementById('notesList').innerHTML = '';
    document.getElementById('noteForm').reset();
    document.getElementById('notes').style.display = 'none';
    document.getElementById('auth').style.display = 'block';
}

// Simulate showing notes after login
function showNotes() {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('register').style.display = 'none';
    document.getElementById('notes').style.display = 'block';
}

// Uncomment to simulate a successful login when testing
// showNotes();