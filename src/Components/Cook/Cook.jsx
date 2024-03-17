import PropTypes from 'prop-types';

const Cook = ({ index,cook, handleCooking }) => {

    const { id, recipe_name, calories, preparing_time } = cook;

    return (
        <div>
            <table className="w-full">
                <tbody>
                    <tr className="text-center bg-slate-200">
                        <td>{index + 1}</td>
                        <td className="py-5">{recipe_name}</td>
                        <td className="py-5">{preparing_time}</td>
                        <td className="py-5">{calories}</td>
                        <td onClick={() => handleCooking(id, cook)} className="py-5"><button className="bg-green-500 rounded-full py-2 px-3">Preparing</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleCooking: PropTypes.func.isRequired
};

export default Cook;