import { Toaster } from 'react-hot-toast';
import { fetchImages } from 'API';
import { Searchbar } from '../Searchbar/Searchbar';
import { Gallery } from '../ImageGallery/ImageGallery';
import { Pagination } from '../LoadMore/LoadMore';
import { Wrapper } from './App.styled'
import { Loader } from '../Loader/Loader'
import { notifyInfo, notifyInputQuerry, success } from '../Notify/notify'
const { useState, useEffect } = require("react");


export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  const changeQuery = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === '') return;

    const loadResult = async () => {
      try {
        setLoading(true);
        const img = await fetchImages(query, page);

        if (img.length) {
          setImages(prevState => (page > 1 ? [...prevState, ...img] : img));
          success(query);
          setLoading(false);
        } else {
          notifyInfo();
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        
      } finally {
        setLoading(false);
      }
    };
    
    loadResult();
  }, [page, query]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      notifyInputQuerry();
      return;
    }

    changeQuery(evt.target.elements.query.value);

    evt.target.reset();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

    return (
      <Wrapper>
        <Searchbar onSubmit={ handleSubmit } />
        { loading && <Loader /> }
        { images.length > 0 && <Gallery imgItems={ images } /> } 
        { images.length > 0 && <Pagination onClick={ handleLoadMore }>Load More</Pagination> }
        <Toaster position="top-right" reverseOrder={true}/>
      </Wrapper>
    )

}