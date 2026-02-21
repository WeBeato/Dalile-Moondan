import "./Header.css";
import headerLogo from "../../public/imageslogo.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={headerLogo} alt="لوگو" className="header__logo" />
      </Link>
      <Link to="/saved-messages" className="header__btn">
        پیام‌های ذخیره شده
      </Link>
    </div>
  );
}
