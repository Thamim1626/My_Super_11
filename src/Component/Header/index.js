import { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Popup from "reactjs-popup";
import "./style.css";

class Header extends Component {
  menuPopup = () => {
    return (
      <Popup trigger={<FaAlignJustify className="header-icons" />} modal nested>
        {(close) => (
          <div className="header-popup">
            <button className="close menu-close" onClick={close}>
              <RxCross1 className="close-icon" />
            </button>
            <ul className="menu-list">
              <li className="menu-item">
                <Link to="/" className="nav-link" onClick={close}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/subscription" className="nav-link" onClick={close}>
                  Subscription
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact" className="nav-link" onClick={close}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    );
  };

  render() {
    return (
      <div className="main-header">
        <h1 className="header-logo">
          <img
            src="https://ik.imagekit.io/9pisu4akvm/Untitled-drswd-01.png?updatedAt=1709801641584"
            alt="website log "
            className="website-logo-image"
          />
        </h1>

        {this.menuPopup()}
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/subscription" className="nav-link">
              Subscription
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="header-empty">
          {" "}
          <Link to="/login">
            {" "}
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
