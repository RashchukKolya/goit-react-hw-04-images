import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('second');

  useEffect(() => {
    getImages(searchQuery, page);
  }, [searchQuery, page]);

  const getImages = async (searchQuery, page) => {
    if (!searchQuery) {
      return;
    }
    setIsLoading(true);
    try {
      const { hits, totalHits } = await fetchImages(searchQuery, page);
      if (hits.length === 0) alert('Nothing found!!!');
      setImages([...images, ...hits]);
      setLoadMore(page < Math.ceil(totalHits / 12));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const formSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
    setLoadMore(false);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const onShoweModal = largeImage => {
    setShowModal(true);
    setLargeImage(largeImage);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setLargeImage('');
  };

  return (
    <>
      <Searchbar formSubmit={formSubmit} />
      <ImageGallery images={images} showModal={onShoweModal} />
      {isLoading ? <Loader /> : loadMore && <Button onClick={onLoadMore} />}
      {showModal && <Modal largeImage={largeImage} closeModal={onCloseModal} />}
    </>
  );
};

export default App;
