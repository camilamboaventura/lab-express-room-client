import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Link
      className="text-decoration-none "
      key={props.room._id}
      to={`/room/${props.room._id}`}
    >
      <div
        className="card card-fixed-height text-dark shadow rounded border-0 m-2"
        style={{ width: "100%" }}
      >
        <div className="card-img-container d-flex justify-content-center align-items-center">
          <img
            className="card-img product-img"
            src={props.room.imageUrl}
            alt="room"
          />
        </div>

        <div className="card-body">
          <h4 className="card-title">
            <small>{props.room.name}</small>
          </h4>

          <p>{props.room.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
