import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

export default function Home() {
  const [showFriends, setShowFriends] = useState(false);

  return (
    <>
      <Topbar onProfileClick={() => setShowFriends(!showFriends)} />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar
          isOpen={showFriends}
          onClose={() => setShowFriends(false)}
        />
      </div>

      {/* Dark backdrop behind the drawer — tapping it closes the drawer */}
      {showFriends && (
        <div
          className="mobileBackdrop"
          onClick={() => setShowFriends(false)}
        />
      )}
    </>
  );
}