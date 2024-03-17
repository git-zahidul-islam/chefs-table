import PropTypes from 'prop-types';

import Cook from "../Cook/Cook";
import { useState } from 'react';
import Cooking from '../Cooking/Cooking';


const CookData = ({ cooks }) => {
    console.log(cooks)
    const [cooking, setCooking] = useState([]);


    const handleCooking = (id,cookItem) => {
        console.log(cooking)
        setCooking([...cooking, cookItem])
        // removing data
        // console.log('remove data',id)
        // const remainingCook = cooking.filter(cook => cook.id !== id)
        // console.log(remainingCook)
        // setCooking(remainingCook)

        
    }



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
                        cooks.map((cook, idx) => <Cook
                            key={idx} cook={cook} index={idx} handleCooking={handleCooking}
                        ></Cook>)
                    }
                </div>
            </div>

            <div className="space-y-5">
                <h1 className="text-2xl font-semibold text-center mt-4">Currently cooking: {cooking.length}</h1>
                <div className="flex justify-center"><hr className="w-3/5" /></div>
                <table className="w-full">
                    <tbody>
                        <tr className="">
                            <th></th>
                            <th className="py-5">Name</th>
                            <th className="py-5">Times</th>
                            <th className="py-5">Calories</th>
                        </tr>
                    </tbody>
                </table>
                <div>
                    {
                        cooking.map((cookPrepare, index) => <Cooking
                            key={index}
                            cookPrepare={cookPrepare}
                            index={index}
                        ></Cooking>)
                    }
                </div>
            </div>
        </div>
    );
};

CookData.propTypes = {
    cooks: PropTypes.array.isRequired
};

export default CookData;