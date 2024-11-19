import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "./utils/constants";
import { togglegptSerchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";
import { MdLogout } from "react-icons/md";
import { TbFlower } from "react-icons/tb";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(togglegptSerchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute flex items-center justify-between w-screen z-10 md:px-8 py-2 bg-gradient-to-b from-black  ">
      <img alt="logo" className="w-32 md:w-44  md:mx-0" src={LOGO} />
      {user && (
        <div className="flex items-center">
          <div className="flex">
            {showGptSearch ? (
              <select
                className="p-1 m-2 bg-gray-800 text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            ) : null}
            <button
              className="px-2  m-3 text-white rounded-lg text-3xl"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? <FaHome /> : <TbFlower />}
            </button>
            <div className="hidden   md:flex items-center">
              <img
                className="w-10 h-10 rounded-full m-2"
                alt="profile"
                src={user?.photoURL}
              />
              <button className=" text-white text-xl" onClick={handleSignout}>
              <MdLogout className="text-white text-3xl" onClick={handleSignout} />
              </button>
            </div>
          </div>
          <div className="md:hidden block mr-4">
            <MdLogout className="text-white text-3xl" onClick={handleSignout} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
