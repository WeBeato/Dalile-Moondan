import "./Header.css";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="../../public/images/logo.png" alt="لوگو" className="logo" />
      </Link>
      <Link to="/saved-messages">پیام های ذخیره شده</Link>
    </div>
  );
}
