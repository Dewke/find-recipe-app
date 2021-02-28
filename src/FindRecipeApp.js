import React, { useState } from 'react';
import './FindRecipeApp.css';
import recipes from './recipes';
import Sidebar from './Sidebar/Sidebar';

const FindRecipeApp = () => {
  return (
    <div className='recipe-finder-app'>
      <Sidebar />
      <section className='recipes-container'>
        {recipes.map((recipe) => {
          const {
            id,
            name,
            macro: { calories, protein, carbs, fats },
            imageMobile,
            imageDesktop,
          } = recipe;
          return (
            <div className='recipe-card' key={id}>
              <img
                srcSet={`${imageMobile} 105w, ${imageDesktop} 640w`}
                sizes='(max-width: 800px) 105px, 150px'
                src={imageMobile}
                alt={name}
              />
              <div className='recipe-info-container'>
                <h3>{name}</h3>
                <div className='recipe-macro-container'>
                  <p className='recipe-macro-per-serving'>Macro per serving:</p>
                  <div className='recipe-macro'>
                    <div className='recipe-macro-detail'>
                      <h4>{calories}</h4>
                      <p>kcal</p>
                    </div>
                    <div className='recipe-macro-detail'>
                      <h4>{protein}</h4>
                      <p>protein</p>
                    </div>
                    <div className='recipe-macro-detail'>
                      <h4>{carbs}</h4>
                      <p>carbs</p>
                    </div>
                    <div className='recipe-macro-detail'>
                      <h4>{fats}</h4>
                      <p>fats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FindRecipeApp;
