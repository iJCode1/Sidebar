const $sidebar_hamburger = document.querySelector("#sidebar-hamburger");
const $sidebar_itemArray = document.querySelectorAll("#sidebar-item p");
const $sidebar_item = document.querySelector("#sidebar-logoItem");
const $sidebar_subtitle = document.querySelector("#sidebar-subtitle");
const $sidebar = document.querySelector("#sidebar");

$sidebar_hamburger.addEventListener("click", ()=>{
  console.log("He dado un click");
  $sidebar_itemArray.forEach((item)=>{
    item.classList.toggle('is-hidden');
  })
  $sidebar_item.classList.toggle("is-hidden");
  $sidebar_subtitle.classList.toggle("is-hidden");
  $sidebar.classList.toggle("is-hidden");
})