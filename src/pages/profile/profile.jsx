import { useTelegram } from "../../components/hook/useTelegram";
import "./profile.css";

export default function Profile() {
  const { userId, firstName, lastName, photoUrl } = useTelegram();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-icon">
            {photoUrl && (
              <img src={photoUrl} alt="Profile" className="profile-photo" />
            )}
          </div>
          <h2 className="profile-username text-gray-600 font-semibold">Admin: {userId}!</h2>
        </div>
        <div className="profile-details text-gray-600">
          <p className="text-gray-600">First Name: {firstName}</p>
          <p className="text-gray-600">Last Name: {lastName}</p>
        </div>
      </div>
    </div>
  );
}
