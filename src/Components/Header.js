import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex justify-between w-screen z-10 px-8 py-2 bg-gradient-to-b from-black ">
      <img
        alt="logo"
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex">
        <img
          className="w-12 h-12 rounded-md m-2"
          alt="profile"
          src={user?.photoURL}
        />
        <button className="text-white text-xl" onClick={handleSignout}>
          Sign out
        </button>
      </div>
      )}
      
    </div>
  );
};
export default Header;
