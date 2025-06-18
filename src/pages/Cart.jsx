import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    const removedItem = cartItems.find((item) => item.id === id);
    dispatch(cartActions.removeFromCart(id));
    toast.info(`${removedItem?.name} removed from cart.`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page d-flex justify-content-center align-items-center py-5">
        <div className="empty-cart text-center p-4 shadow-sm bg-light rounded">
          <h4 className="text-muted">🛒 Your cart is empty</h4>
          <p className="mb-0">Start adding some delicious items!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container cart-page py-4">
      <h4 className="mb-4 fw-bold">🧺 Your Cart</h4>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4" key={item.id}>
            <div className="card h-100 cart-card shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text mb-1">⭐ {item.rating}</p>
                  <p className="card-text mb-2">
                    Prep Time: {item.prepTimeMinutes} mins
                  </p>
                  <ul className="mb-0 ps-3">
                    {item.ingredients.slice(0, 4).map((ing, index) => (
                      <li key={index}>{ing}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="btn btn-outline-danger rounded-pill mt-3 transition-btn w-100"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove ❌
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
