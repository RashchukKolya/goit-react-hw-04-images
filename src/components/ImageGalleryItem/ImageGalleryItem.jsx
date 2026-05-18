import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt, largeImageURL, showModal }) => {
  return (
    <li
      className={css.imageGalleryItem}
      onClick={() => showModal(largeImageURL)}
    >
      <img src={src} alt={alt} className={css.imageGalleryItem_image} />
    </li>
  );
};
