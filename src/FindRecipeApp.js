import React from 'react';
import './FindRecipeApp.css';
import recipes from './recipes';
import SearchBar from './SearchBar/SearchBar';
import ChooseCategoryButton from './ChooseCategoryButton/ChooseCategoryButton';
import AddFiltersButton from './AddFiltersButton/AddFiltersButton';
import ResetFiltersButton from './ResetFiltersButton/ResetFiltersButton';

const FindRecipeApp = () => {
  return (
    <>
      <SearchBar />
      <section className='filters-bar'>
        <ChooseCategoryButton />
        <AddFiltersButton />
        <ResetFiltersButton />
      </section>
      <section className='recipes-container'>
        {recipes.map((recipe) => {
          const {
            id,
            name,
            macro: { calories, protein, carbs, fats },
            image,
          } = recipe;
          return (
            <div className='recipe-card' key={id}>
              <img src={image} alt={name} />
              <div className='recipe-info-container'>
                <h3>{name}</h3>
                <p>Macro per serving:</p>
                <div className='recipe-macro-container'>
                  <div className='recipe-macro'>
                    <p>{calories}</p>
                    <h4>kcal</h4>
                  </div>
                  <div className='recipe-macro'>
                    <p>{protein}</p>
                    <h4>protein</h4>
                  </div>
                  <div className='recipe-macro'>
                    <p>{carbs}</p>
                    <h4>carbs</h4>
                  </div>
                  <div className='recipe-macro'>
                    <p>{fats}</p>
                    <h4>fats</h4>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default FindRecipeApp;
