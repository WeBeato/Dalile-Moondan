import "./Header.css";
import headerLogo from "../../public/images/logo.png";
import { Link } from "react-router";

export default function Header({ isAdmin }) {
  return (
    <div className="header">
      <Link to="/">
        <img src={headerLogo} alt="لوگو" className="header__logo" />
      </Link>
      {isAdmin && (
        <Link to="/webeato-admin/review-pending-messages">ادمین</Link>
      )}
      <Link to="/saved-messages" className="header__btn">
        پیام‌های ذخیره شده
      </Link>
    </div>
  );
}
