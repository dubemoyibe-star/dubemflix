const logoContainer = document.getElementById('logo-container');
const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
const button = document.getElementById('watchlist-btn');

if (watchlist.length === 0) {
    logoContainer.innerHTML = `<p class="logo">Your watchlist is looking a little empty...<br>➕Let's add some movies</p>`;
} else {
    button.innerText = "✔ Added";
    logoContainer.innerHTML = watchlist.join('');
}