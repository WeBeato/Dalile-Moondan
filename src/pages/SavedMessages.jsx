import "./SavedMessages.css";
import deleteIcon from "../../public/images/delete-icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function SavedMessages({ savedMessages, setSavedMessages }) {
  const [confirmId, setConfirmId] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("savedMessages");
    if (stored) {
      setSavedMessages(JSON.parse(stored));
    }
  }, []);

  const askDelete = (id) => {
    setConfirmId(id);
  };

  const handleDelete = (id) => {
    setSavedMessages((prev) => {
      const updated = prev.filter((msg) => msg.id !== id);
      localStorage.setItem("savedMessages", JSON.stringify(updated));
      return updated;
    });
    setConfirmId(null);
  };

  return (
    <div className="saved-messages">
      <Link to="/" className="saved-messages__btn">
        صفحه اصلی
      </Link>

      <div className="saved-messages__wrap">
        {savedMessages.length < 1 ? (
          <p>هنوز پیامی رو ذخیره نکردی</p>
        ) : (
          savedMessages.map((message) => (
            <div className="message__card">
              <p className="message__text">
                {message.textMessage.substring(0, 100) + "..."}
              </p>
              <p className="message__author">{message.author}</p>
              <img
                src={deleteIcon}
                className="delete"
                onClick={() => askDelete(message.id)}
              />
            </div>
          ))
        )}
      </div>

      {confirmId && (
        <div className="confirm-backdrop">
          <div className="confirm-modal">
            <p>این پیام حذف شود؟</p>
            <button
              className="confirm-delete-btn"
              onClick={() => handleDelete(confirmId)}
            >
              حذف
            </button>
            <button
              className="confirm-cancel-btn"
              onClick={() => setConfirmId(null)}
            >
              انصراف
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
