import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const markup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", markup);

function createGallery(imgArr) {
  return imgArr
    .map(
      ({ preview, description, original }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></li>`
    )
    .join("");
}

galleryContainer.addEventListener("click", showFullSize);

function showFullSize(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280" height="auto" />
`);
  instance.show();

  // basicLightbox.create(`<img src="${evt.target.dataset.source}" width="1280" height="auto" />`).show();

  window.addEventListener("keydown", clickEsc);

  function clickEsc(evt) {
    if (evt.code !== "Escape") {
      return;
    }

    instance.close();
  }
}
