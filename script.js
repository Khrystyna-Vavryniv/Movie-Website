const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
    const itemNum = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{        
        const ratio = Math.floor(window.innerWidth/420);
        clickCounter++;
        if(itemNum - clickCounter - ratio >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
                -600}px)`;
               
    }   else{
        movieLists[i].style.transform = "translateX(0)"
        clickCounter = 0;
        }    
    });
});


//Toggle
const toggle = document.querySelector(".toggle");
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle");

toggle.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})