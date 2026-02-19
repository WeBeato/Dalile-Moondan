import "./Footer.css";

export default function Footer({ setIsOpen }) {
  return (
    <div className="footer">
      <p className="footer__text">
        اگر دوست داری، تو هم میتونی برای یکی پیام بذاری:
      </p>
      <button className="footer__btn" onClick={() => setIsOpen(true)}>
        نوشتن پیام
      </button>
    </div>
  );
}
