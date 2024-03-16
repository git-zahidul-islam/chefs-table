import PropTypes from 'prop-types';
import IngItem from '../IngItem/IngItem';
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
    console.log("recipe code", recipe)
    const { recipe_name, recipe_image, short_description, recipe_ingredients, preparing_time, calories } = recipe;

    return (
        <div className='p-6 border-2 rounded-2xl'>
            <div className='space-y-5'>
                <img className='rounded-2xl h-52 w-full' src={recipe_image} alt="image" />
                <h1>{recipe_name}</h1>
                <p>{short_description}</p>
                <hr />
                <div>
                    <h1>Ingredients: {recipe_ingredients.length}</h1>
                    <div className='px-8'>
                        {
                            recipe_ingredients.map((item, index) => <IngItem key={index} item={item}></IngItem>)
                        }
                    </div>
                </div>
                <hr />
                <div className='flex gap-4'>
                    <div className='flex gap-1 items-center'>
                        <IoMdTime></IoMdTime>
                        <p>{preparing_time}</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaFire></FaFire>
                        <p>{calories}</p>
                    </div>
                </div>
                <button className='bg-green-400 border-none rounded-full p-3'>Want To Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Recipe;