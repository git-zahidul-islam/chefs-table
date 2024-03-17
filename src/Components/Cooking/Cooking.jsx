import PropTypes from 'prop-types';

const Cooking = ({ cookPrepare }) => {
    console.log(cookPrepare)
    const { id ,calories, preparing_time, recipe_name } = cookPrepare
    return (
        <div>
            <table className="w-full">
                <tbody>
                    <tr className="text-center bg-slate-200">
                        <td>{id}</td>
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
    cookPrepare: PropTypes.object.isRequired
};

export default Cooking;