import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO } from "./utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName ,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName , photoURL: photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute flex justify-between w-screen z-10 px-8 py-2 bg-gradient-to-b from-black ">
      <img
        alt="logo"
        className="w-44 "
        src= {LOGO}
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
