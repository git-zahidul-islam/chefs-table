import PropTypes from 'prop-types';

const Cooking = ({cook , index}) => {
    const { recipe_name, preparing_time, calories } = cook
    
    return (
        <div>
            <table className="w-full">
                <tbody>
                    <tr className="text-center bg-slate-200">
                        <td>{index + 1}</td>
                        <td className="py-6">{recipe_name}</td>
                        <td className="py-6">{preparing_time}</td>
                        <td className="py-6">{calories}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Cooking.propTypes = {
    cook: PropTypes.object.isRequired,
    index: PropTypes.number
};

export default Cooking;