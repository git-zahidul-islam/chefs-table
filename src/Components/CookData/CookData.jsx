// import PropTypes from 'prop-types';

const CookData = () => {
    return (
        <div>
            {/* top cook part */}
            <div className="space-y-5">
                <h1 className="text-2xl font-semibold text-center mt-4">Want to cook: 01</h1>
                <div className="flex justify-center"><hr className="w-3/5" /></div>
                <table className="w-full">
                    <tr className="">
                        <th></th>
                        <th className="py-5">Name</th>
                        <th className="py-5">Times</th>
                        <th className="py-5">Calories</th>
                        <th className="py-5"></th>
                    </tr>
                    <tr className="text-center bg-slate-200">
                        <td>1</td>
                        <td className="py-5">banana</td>
                        <td className="py-5">20 min</td>
                        <td className="py-5">120 cal</td>
                        <td className="py-5"><button className="bg-green-500 rounded-full py-2 px-3">Preparing</button></td>
                    </tr>
                </table>
            </div>
            {/* bottom cooking part */}
            <div className="space-y-5">
                <h1 className="text-2xl font-semibold text-center mt-4">Currently cooking: 02</h1>
                <div className="flex justify-center"><hr className="w-3/5" /></div>
                <table className="w-full">
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
                </table>
            </div>
        </div>
    );
};

CookData.propTypes = {

};

export default CookData;