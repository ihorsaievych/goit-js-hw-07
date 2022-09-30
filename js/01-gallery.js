import { galleryItems } from "./gallery-items.js";
// Change code below this line

//import * as basicLightbox from "basiclightbox";

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
  basicLightbox:  window.basicLightbox,
  instance: {},
};

const markup = galleryItems.reduce(
  (acc, galleryItem) =>
    acc +
    `<div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
        />
      </a>
    </div>`, "");

function onItem(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }

  if (event.target.classList.contains("gallery__image")) {
    const src = event.target.dataset.source;
    showModal(src);
  }
}

function showModal(src){
    refs.instance = refs.basicLightbox.create(`<img src="${src}" width="800" height="600">`);   
    refs.instance.show();
    
    window.addEventListener("keydown", onKeyDown);
}
    
const onKeyDown = (event) => {
    if (event.key !== "Escape") return;
    refs.instance.close();
    window.removeEventListener("keydown", onKeyDown);
}   

refs.gallery.insertAdjacentHTML("beforeend", markup);

refs.gallery.addEventListener("click", onItem);
