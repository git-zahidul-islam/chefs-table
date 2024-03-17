import PropTypes from 'prop-types';

const Cooking = ({ cookPrepare , index }) => {
    const { calories, preparing_time, recipe_name } = cookPrepare
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
    cookPrepare: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default Cooking;