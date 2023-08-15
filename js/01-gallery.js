import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}" 
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const src = event.target.dataset.source;
    const alt = event.target.alt;
    const instance = basicLightbox.create(`<img src="${src}" alt="${alt}">`);
    instance.show();
    document.addEventListener("keyup", closeModalOnEscape);
  }
});

function closeModalOnEscape(event) {
  if (event.key === "Escape") {
    const instance = basicLightbox.getInstance();
    instance.close();

    document.removeEventListener("keyup", closeModalOnEscape);
  }
}
