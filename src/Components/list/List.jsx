
import PropTypes from 'prop-types';

const List = ({getCards, totalCost, remaining}) => {
    // console.log(getCards);
    return (
        <div className="bg-slate-200 p-4 font-bold text-2xl">
            <h1>Remaining: {remaining}</h1>
            <h1>Total Cost: {totalCost}</h1>
            <h1 className="text-center">Selected: {getCards?.length} </h1>
            {
             getCards?.map((item, i) => <li key={i}>{item.title}</li>)
            }
        </div>
    );
};

List.propTypes = {
    getCards: PropTypes.array,
    totalCost: PropTypes.number,
    remaining: PropTypes.number
};

export default List;