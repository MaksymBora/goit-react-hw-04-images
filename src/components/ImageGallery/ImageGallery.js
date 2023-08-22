import { GalleryImage } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery, ImageGalleryItem } from './ImageGallery.styled';

export const Gallery = ({ imgItems }) => {
  return (
    <div>
      <ImageGallery>
        {imgItems.map(item => (
          <ImageGalleryItem key={item.id}>
            <GalleryImage item={item} />
          </ImageGalleryItem>
        ))}
      </ImageGallery>
    </div>
  );
};
