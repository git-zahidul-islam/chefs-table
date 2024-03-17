// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const res = await fetch('/data.json')
                const data = await res.json()
                console.log(data)
                setRecipes(data)
            } catch (error) {
                console.log('you are not getting data', error)
            }
        }
        dataFetch();
    }, [])

    return (
        <div>
            {/* <h1>Recipe: {recipes.length}</h1> */}
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
                {
                    recipes.map((recipe, index) => <Recipe
                        key={index} recipe={recipe}
                        
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {

};

export default Recipes;