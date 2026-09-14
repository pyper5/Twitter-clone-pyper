import "./rightbar.css";
import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile, isOpen, onClose }) {
  const HomeRightbar = () => {
    return (
      <>
        {/* 👇 New: Profile link */}
        <Link to="/profile" className="rightbarProfileLink" onClick={onClose}>
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarProfileName">My Profile</span>
        </Link>

        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        {/* ...existing profile info code... */}
      </>
    );
  };

  return (
    <div className={`rightbar ${isOpen ? "mobileOpen" : ""}`}>
      <div className="rightbarWrapper">
        <button className="closeDrawerBtn" onClick={onClose}>
          ✕
        </button>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}