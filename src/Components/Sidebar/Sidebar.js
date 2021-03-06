import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SearchBar from './SearchBar/SearchBar';
import FiltersBar from './FiltersBar/FiltersBar';
import ModalCategories from '../Modals/ModalCategories/ModalCategories';
import ModalFilters from '../Modals/ModalFilters/ModalFilters';
import { useWindowResize } from 'CustomHooks/useWindowResize';

const Sidebar = () => {
  const [openedModal, setOpenedModal] = useState('none');
  const { windowWidth } = useWindowResize();

  const closeModal = () => {
    setOpenedModal('none');
  };

  const openCategoriesModal = () => {
    setOpenedModal('recipe-categories-modal');
  };

  const openFiltersModal = () => {
    setOpenedModal('filters-modal');
  };

  useEffect(() => {
    if (openedModal !== 'none') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openedModal]);

  useEffect(() => {
    if (windowWidth >= 800 && openedModal !== 'none') {
      setOpenedModal('none');
    }
  }, [windowWidth]);

  return (
    <section className='sidebar recipe-finder-app__sidebar'>
      <SearchBar />
      <FiltersBar
        openCategoriesModal={openCategoriesModal}
        openFiltersModal={openFiltersModal}
      />
      <ModalCategories
        isOpen={openedModal === 'recipe-categories-modal'}
        closeModal={closeModal}
      />
      <ModalFilters
        isOpen={openedModal === 'filters-modal'}
        closeModal={closeModal}
      />
    </section>
  );
};

export default Sidebar;
