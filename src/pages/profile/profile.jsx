import { useTelegram } from "../../components/hook/useTelegram";
import "./profile.css";

export default function Profile() {
  const { firstName, lastName, userId, photoUrl, user, email, phoneNumber, authDate } = useTelegram();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-icon">
            {photoUrl ? (
              <img src={photoUrl} alt="Profile" className="profile-photo" />
            ) : (
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
            )}
          </div>
          <h2 className="profile-username text-gray-600 font-semibold">
            Admin: {user.username || "Unknown"}!
          </h2>
        </div>
        <div className="profile-details text-gray-600">
          <p className="text-gray-600">First Name: {firstName || "Unknown"}</p>
          <p className="text-gray-600">Last Name: {lastName || "Unknown"}</p>
          <p className="text-gray-600">ID: {userId || "Unknown"}</p>
          <p className="text-gray-600">Email: {email}</p>
          <p className="text-gray-600">Phone Number: {phoneNumber}</p>
          <p className="text-gray-600">Auth Date: {authDate}</p>
        </div>
      </div>
    </div>
  );
}
