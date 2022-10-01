import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const refs = {
    gallery : document.querySelector(".gallery"),
    simpleLightbox : window.SimpleLightbox,
  };

  
const renderMarkup = galleryItems.reduce((acc, galleryItem) =>
    acc + `<a class="gallery__item" href="${galleryItem.original}">
          <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
       </a>`, "");
       
refs.gallery.insertAdjacentHTML("beforeend", renderMarkup);
const lightbox = new refs.simpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
  
//console.log(lightbox);
     