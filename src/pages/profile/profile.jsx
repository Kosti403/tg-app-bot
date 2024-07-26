
import { useTelegram } from "../../components/hook/useTelegram";
import "./profile.css";

export default function Profile() {
  const { user, handleClose, queryId, number, email } = useTelegram();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user-circle"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="10" r="3" />
              <path d="M6.5 19a7 7 0 0 1 11 0" />
            </svg>
          </div>
          <h2 className="profile-username">Admin: {user?.username}!</h2>
        </div>
        <div className="profile-details">
          <p>First Name: {user?.first_name}</p>
          <p>Last Name: {user?.last_name}</p>
          <p>Phone Number: {number}</p>
          <p>Email: {email}</p>
          <p>Query ID: {queryId}</p>
        </div>
        <button className="profile-close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}
