import { Component } from 'react';
import Modal from 'react-modal';
import { ImageGalleryItemImg } from './ImageGalleryItem.styled';

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
  },
};

Modal.setAppElement('#root');

export class GalleryImage extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.item;
    const { isModalOpen } = this.state;
    return (
      <div>
        <ImageGalleryItemImg
          src={webformatURL}
          alt={tags}
          load="lazy"
          onClick={this.openModal}
        />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </div>
    );
  }
}
