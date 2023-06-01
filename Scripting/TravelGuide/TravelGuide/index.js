const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
   items.classList.add("active");
   menuBtn.classList.add("hide");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
   items.classList.remove("active");
   menuBtn.classList.remove("hide");
   searchBtn.classList.remove("hide");
   cancelBtn.classList.remove("show");
   form.classList.remove("active");
   cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
   form.classList.add("active");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
}

function showDropList() {
   let dropDiv = document.querySelector('.dropdownList');
   if (dropDiv.style.display === "block") {
      dropDiv.style.display = "";
   } else {
      dropDiv.style.display = "block";
   }
}
document.querySelector('.search-input').addEventListener('keyup', filterDropdown);
function filterDropdown() {
   var inputSearch, filterText, ul, li, links, i, div;
   inputSearch = document.querySelector(".search-input");
   filterText = inputSearch.value.toUpperCase();
   div = document.getElementById("myDropdown");
   links = div.getElementsByTagName("a");
   for (i = 0; i < links.length; i++) {
      txtValue = links[i].textContent || links[i].innerText;
      if (txtValue.toUpperCase().indexOf(filterText) > -1) {
         links[i].style.display = "";
      } else {
         links[i].style.display = "none";
      }
   }
}