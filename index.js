const searchBtn = document.getElementById('search-btn')
let containerEl = document.getElementById('container')
const watchlistBtn = document.getElementById("watchlist-btn")


searchBtn.addEventListener("click", function(){
  containerEl.innerHTML = "";
  const searchValue = document.getElementById('search-input').value.toLowerCase();
  fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=70e18d7b`)
  .then(response => response.json())
  .then(data => {
    if(data.Response === "True"){
      data.Search.map(item => {
   fetch(`https://www.omdbapi.com/?i=${encodeURIComponent(item.imdbID)}&plot=short&apikey=70e18d7b`)
  .then(res => res.json())
  .then(detail => { 
     containerEl.innerHTML += `<div class="movie" id="movie" data-id="${detail.imdbID}">
      <img class="movie-img" src="${detail.Poster}" alt="Movie Poster">
      <div>
      <div class="movie-header">
        <h2>${detail.Title}</h2>
          <p>⭐${detail.imdbRating}</p>
          </div>
        <div class="movie-info">
      <p>${detail.Runtime}</p>
      <p>${detail.Genre}</p>
      <button class="watchlist-btn" id="watchlist-btn">➕Watchlist</button>
      </div>
      <p class="plot">${detail.Plot}</p>
      </div>
      </div>`
    
   })

      })
    } else if (data.Response === "False") {
      containerEl.innerHTML = `<p id="error-msg">Unable to find what you are looking for. Please try another search.</p>`;
    }
  })
  .catch(error => console.error('Error fetching data:', error));
})

document.addEventListener("click", function(e){
  if(e.target.classList.contains('watchlist-btn')){
    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
     const movieEl = e.target.closest('.movie')
    watchlist.push(movieEl.outerHTML);
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    e.target.innerText = "✔ Added";
    e.target.disabled = true;
  }
})

 

