import React from 'react';
import './AddFiltersButton.css';
import MenuIcon from 'Assets/icon-filter.svg';

const AddFiltersButton = ({ onClick }) => {
  return (
    <div className='filters-btn-container filters-bar__item'>
      <button className='filters-btn btn' onClick={onClick}>
        <img src={MenuIcon} className='filters-btn__img' alt='filter icon' />
        <span className='filters-btn__text'>Filters</span>
      </button>
    </div>
  );
};

export default AddFiltersButton;