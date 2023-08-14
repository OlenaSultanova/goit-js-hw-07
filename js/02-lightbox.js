import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item" style="border-radius: 4px; background: transparent; box-shadow: none;">
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}" 
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const markup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 27) {
    lightbox.close();
  }
});

lightbox.on("beforeOpen", function () {
  document.addEventListener("keyup", closeModalOnEscape);
});

lightbox.on("beforeClose", function () {
  document.removeEventListener("keyup", closeModalOnEscape);
});

function closeModalOnEscape(event) {
  if (event.keyCode === 27) {
    lightbox.close();
  }
}

// console.log(galleryItems);
