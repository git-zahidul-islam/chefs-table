import PropTypes from 'prop-types';

const IngItem = ({ item }) => {
    return (
        <div>
            <ul className="list-disc">
                <li>{item}</li>
            </ul>
        </div>
    );
};

IngItem.propTypes = {
    item: PropTypes.string.isRequired
};

export default IngItem;