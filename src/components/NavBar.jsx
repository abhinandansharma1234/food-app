import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { foodActions } from "../store/foodSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Get the current route

  const handleSearch = (e) => {
    dispatch(foodActions.setSearchTerm(e.target.value));
  };

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand brand-animated fw-bold">
          🍅 Tomato
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {/* ✅ Only show search input if not on cart page */}
          {location.pathname !== "/cart" && (
            <form
              className="d-flex me-3"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control search-input me-2"
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
