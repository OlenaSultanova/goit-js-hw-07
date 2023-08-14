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
const pictures = document.querySelectorAll(".gallery__image");

console.log(galleryItems);

pictures.forEach((picture) => {
  picture.addEventListener("click", (event) => {
    event.preventDefault();

    const src = picture.dataset.source;
    const alt = picture.alt;

    const instance = basicLightbox.create(`
      <img src="${src}" alt="${alt}">
    `);

    instance.show();
  });
});
