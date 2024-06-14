/*
import React from 'react';
import recipesData from '../../recipes.json'; 
import Link from 'next/link';

const RecipesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Lista de Receitas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipesData.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href={`/recipes/${recipe.id}`} passHref>
                <div className="p-4">
                  <p className="text-xl font-semibold mb-2 text-center">{recipe.name}</p>
                </div>
              <div className="cursor-pointer flex justify-center items-center h-48">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-48 h-48 object-cover" 
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;

*/

import React from 'react';
import recipesData from '../../recipes.json'; 
import Link from 'next/link';

const RecipesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Lista de Receitas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipesData.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md" style={{ width: 'fit-content', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}> {/* Definindo a largura do card para se ajustar ao conteúdo */}
            <Link href={`/recipes/${recipe.id}`} passHref>
              <div className="block">
                <div className="p-4">
                  <p className="text-xl font-semibold mb-2 text-center">{recipe.name}</p>
                </div>
                <div className="flex justify-center items-center"> {/* Mantendo a imagem centralizada */}
                  <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    className="w-35 h-35 object-cover" /* Tornando a imagem responsiva */
                    style={{ margin: '10px' }} /* Adicionando uma margem em volta da imagem */
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
