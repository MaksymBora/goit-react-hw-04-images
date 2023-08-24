import Modal from 'react-modal';
import { ImageGalleryItemImg } from './ImageGalleryItem.styled';
import { useToggle } from '../useToggle';

const customStyles = {
  content: {
    top: '52%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '999999',
  },
};

Modal.setAppElement('#root');

export const GalleryImage = ({ item }) => {
  const { isOpen, open, close } = useToggle();

  const { webformatURL, tags, largeImageURL } = item;
  return (
    <div>
      <ImageGalleryItemImg
        src={webformatURL}
        alt={tags}
        load="lazy"
        onClick={open}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={largeImageURL} alt={tags} />
      </Modal>
    </div>
  );
};
