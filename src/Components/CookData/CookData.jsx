import PropTypes from 'prop-types';

import Cook from "../Cook/Cook";


const CookData = ({ cooks }) => {
    console.log(cooks)

    return (
        <div>
            <div className="space-y-5">
                <h1 className="text-2xl font-semibold text-center mt-4">Want to cook: {cooks.length}</h1>
                <div className="flex justify-center"><hr className="w-3/5" /></div>

                <table className="w-full">
                    <tbody>
                        <tr className="">
                            <th></th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Times</th>
                            <th className="py-5">Calories</th>
                            <th className="py-5"></th>
                        </tr>
                    </tbody>
                </table>

                <div>
                    {
                        cooks.map((cook, idx) => <Cook key={idx} cook={cook}></Cook>)
                    }
                </div>
            </div>

            <div className="space-y-5">
                <h1 className="text-2xl font-semibold text-center mt-4">Currently cooking: 02</h1>
                <div className="flex justify-center"><hr className="w-3/5" /></div>
                <table className="w-full">
                    <tbody>
                        <tr className="">
                            <th className="py-5">Name</th>
                            <th className="py-5">Times</th>
                            <th className="py-5">Calories</th>

                        </tr>
                        <tr className="text-center bg-slate-200">
                            <td className="py-5">banana</td>
                            <td className="py-5">20 min</td>
                            <td className="py-5">120 cal</td>
                        </tr>
                        <tr className="text-center bg-slate-200">
                            <td className="py-5">banana</td>
                            <td className="py-5">20 min</td>
                            <td className="py-5">120 cal</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

CookData.propTypes = {
    cooks: PropTypes.array.isRequired
};

export default CookData;