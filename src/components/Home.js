import React from 'react'
import PropTypes from 'prop-types'
import RecipeItem from './RecipeItem'

const Home = ({
  recipes = [],
  searchString = '',
  match,
}) => {
  const data = recipes
      .filter(r => match.params.searchString ? (
          r.title.toLowerCase().includes(match.params.searchString) ||
          r.ingredients.toLowerCase().includes(match.params.searchString)
          ) : true);


    
  const palavrabuscada = match.params.searchString !== undefined ? 
                                      match.params.searchString.toLowerCase() : "";

  return (
  <div className="row">
      {data.map(r => <RecipeItem key={r.title} {...r} highlight={palavrabuscada}/>)}
      {data.length === 0 && <h1 className="naoEncontrado">Results not found</h1>}
  </div>
  );
}

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
}

export default Home
