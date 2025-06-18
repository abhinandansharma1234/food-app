import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { foodActions } from "../store/foodSlice";
import { useState } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    dispatch(foodActions.setSearchTerm(e.target.value));
  };

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-3 py-2 shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand brand-animated fw-bold">
          🍅 Tomato
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
        >
          {location.pathname !== "/cart" && (
            <form
              className="d-flex me-3 mt-2 mt-lg-0"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search food..."
                aria-label="Search"
                onChange={handleSearch}
              />
            </form>
          )}

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link position-relative">
                🛒 Cart
                {cartCount > 0 && (
                  <span className="cart-badge badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
