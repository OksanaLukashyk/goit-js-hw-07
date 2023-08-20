import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const markup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", markup);

function createGallery(imgArr) {
  return imgArr
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a></li>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// galleryContainer.addEventListener("click", showLarge);
