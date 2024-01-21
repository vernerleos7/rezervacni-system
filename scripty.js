function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'test' && password === '1234') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

function logout() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('app').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

function addEvent() {
    var date = document.getElementById('eventDate').value;
    var time = document.getElementById('eventTime').value;
    var description = document.getElementById('eventDescription').value;

    console.log("Event added:", date, time, description);
}