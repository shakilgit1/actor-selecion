import PropTypes from "prop-types";

const Card = ({card, handleSelect}) => {
  const { title, author_img, salary } = card;

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl w-full px-16">
        <figure className="px-10 pt-10">
          <img
            src={author_img}
            alt="Shoes"
            className="rounded-xl w-20"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>Salary: {salary}</p>
          <div className="card-actions">
            <button onClick={() => handleSelect(card)} className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  handleSelect: PropTypes.func
};

export default Card;
