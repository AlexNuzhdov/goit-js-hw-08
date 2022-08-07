// Add imports above this line

// Change code below this line
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css"; 
import { galleryItems } from './gallery-items.js';



const imagesGallary = document.querySelector(".gallery");
const  imagesMarkup = creatGallary(galleryItems);
imagesGallary.insertAdjacentHTML('beforeend', imagesMarkup);

function creatGallary(galleryItems) {
    return  galleryItems.map(({preview, original, description}) => {
        return ` 
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
           
            alt="${description}"
            title="${description}"
          />
        </a>
      </div> 
      `;
    })
    .join('');

};

   let gallery = new SimpleLightbox('.gallery a', {
   captionData: 'alt',
   captionType: 'attr',
	 captionDelay: 250,
});
    gallery.on('show.simplelightbox');