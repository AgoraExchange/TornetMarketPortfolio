// Smooth scroll navigation
document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const id = btn.dataset.scroll;
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  });
});
