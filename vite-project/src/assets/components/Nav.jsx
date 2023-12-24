import { Link } from "react-router-dom";

function Nav(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          Happy Cake
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home <span>🏠</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link text-white">
                Contacto <span>📒</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white d-flex align-items-center">
          <p className="m-1 mb-0">Happy Cake</p>
          <span role="img" aria-label="cake" className="align-middle">🍰</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
