import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { toast } from "react-toastify";

const FoodCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.food.items);
  const searchTerm = useSelector((state) => state.food.searchTerm);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (item) => {
    dispatch(cartActions.addToCart(item));
    toast.success(`${item.name} added to cart!`);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        {filteredItems.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
            <div className="card food-card h-100 border-0 shadow-sm">
              <img
                src={item.image}
                className="card-img-top food-img"
                alt={item.name}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
              />

              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h6 className="card-title fw-bold mb-2 text-truncate">
                    {item.name}
                  </h6>
                  <p className="card-text mb-1">
                    <strong>Rating:</strong> ⭐ {item.rating}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Prep Time:</strong> {item.prepTimeMinutes} mins
                  </p>
                  <div className="ingredients-list">
                    <strong>Ingredients:</strong>
                    <ul className="mb-0 ps-3">
                      {item.ingredients.slice(0, 4).map((ing, index) => (
                        <li key={index} style={{ fontSize: "0.9rem" }}>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-primary mt-3 w-100"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCart;
