document.addEventListener("DOMContentLoaded", function(){
  const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
 button.innerText = "➖remove"
 button.style.fontSize = "0.8em"
 button.style.fontWeight = "700"
})
})

function rendermovie(){
  const logoContainer = document.getElementById('logo-container');
   let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    logoContainer.innerHTML = ""
    logoContainer.innerHTML = watchlist.join("")
    
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
    button.innerText = "➖remove"
    button.style.fontSize = "0.8em"
    button.style.fontWeight = "700"
})
  }

rendermovie()




document.addEventListener("click", function(e){
  if(e.target.classList.contains('watchlist-btn')){
    let watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    const movieEl = e.target.closest('.movie');
    const movieHTML = movieEl.outerHTML; 
    const index = watchlist.indexOf(movieHTML);
    if(index !== -1){
      watchlist.splice(index, 1)
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    movieEl.remove();
  }
})
