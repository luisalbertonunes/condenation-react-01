import React from 'react'

const RecipeItem = ({
    thumbnail,
    title,
    ingredients,
    highlight
}, 
) => {
    if(highlight !== ''){
        console.log(highlight)
        const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
        const parts2 = ingredients.split(new RegExp(`(${highlight})`, 'gi'));
    
         console.log(parts);
         console.log(parts2);
        let titleHl =
        (<span> { parts.map((part, i) =>
            {if(part.toLowerCase() !== highlight.toLowerCase()){
                return(
                <span  key={i}>
                    { part }
                </span>
                )
            }else{
            return(
                <mark  key={i}>
                    { part }
                </mark>
                )
            }
     
            })
        } </span>)
     
        let ingredientsHl =
        (<span> { parts2.map((part, i) =>
            {if(part.toLowerCase() !== highlight.toLowerCase()){
                return(
                <span  key={i}>
                    { part }
                </span>
                )
            }else{
            return(
                <mark  key={i}>
                    { part }
                </mark>
                )
            }
     
            })
        } </span>)
    
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">
                    <img className="card-img-top img-fluid" src={thumbnail} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{titleHl}</h5>
                        <p className="card-text">
                            <strong>Ingredients: </strong>{ingredientsHl}
                        </p>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="col-sm-3 mt-4">
                <div className="card">
                    <img className="card-img-top img-fluid" src={thumbnail} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            <strong>Ingredients: </strong>{ingredients}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
  
} 

export default RecipeItem;