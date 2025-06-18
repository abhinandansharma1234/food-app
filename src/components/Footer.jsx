import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-md-2 justify-content-between align-items-center py-4 my-4 border-top text-center text-md-start">
        <div className="col mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
          <a
            href="/"
            className="me-2 text-body-secondary text-decoration-none lh-1"
            aria-label="Tomato"
          >
            <span style={{ fontSize: "1.5rem" }} role="img" aria-label="Tomato">
              🍅
            </span>
          </a>
          <span className="text-body-secondary">© 2025 Company, Inc</span>
        </div>

        <div className="col d-flex justify-content-center justify-content-md-end">
          <ul className="list-unstyled d-flex mb-0">
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
