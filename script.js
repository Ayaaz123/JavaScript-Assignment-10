document.getElementById('getUser').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('userEmail').textContent = user.email;
            document.getElementById('userImage').src = user.picture.large;
        })
        .catch(error => console.log(error));
}

// Fetch an initial user on page load
fetchUser();
