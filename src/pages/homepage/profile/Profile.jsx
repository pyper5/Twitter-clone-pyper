import "./profile.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import feed from "../../component/feed/Feed";
import Rightback from "../../component/rightbar/Rightbar";

export default function profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
        <sidebar />
        <div className="profileRight">
        <div className="profileRightTop">
        <div className="profileCover">
        <img
        className="profileCoverImg"
        src="assets/post/3.jpeg"
        alt=""
        />
        <img
        className="profileuserImg"   
        src="assets/person/7.jpeg"
        alt=""
        />
        </div>
        <div className="profileInfo">
        <h4 className="profileInfoName">Jane Doe</h4>
        <span className="profileInfoDesc">
        Hello my friends!
        </span>
        </div>
        </div>
        <div className="ptofileRightBottom">
        <Feed />
        <Rightbar profile />
        </div>
        </div>
        </div>
        </>
    );
}