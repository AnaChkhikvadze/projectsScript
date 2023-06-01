const items = document.querySelectorAll(".list-item-header");

items.forEach(i => {
  i.addEventListener("click", event => {
    
    const act = document.querySelector(".list-item-header.active");
    if(act && act!==i) {
      act.classList.toggle("active");
      act.nextElementSibling.style.maxHeight = 0;
    }

    i.classList.toggle("active");
    const b = i.nextElementSibling;
    if(i.classList.contains("active")) {
      b.style.maxHeight = b.scrollHeight + "px";
    }
    else {
      b.style.maxHeight = 0;
    }
    
  });
});