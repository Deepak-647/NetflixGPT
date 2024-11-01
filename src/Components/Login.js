import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
 
import { addUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = validateData(email.current.value, password.current.value);
    //  console.log(message)
    setErrorMessage(message);

    if (message) return;
    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/82494501?v=4&size=64",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          alt="body-img"
          className="absolute opacity-95"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className=" font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="p-4 my-2 w-full rounded-lg bg-transparent border border-white border-opacity-70  "
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full rounded-lg bg-transparent border border-white border-opacity-70  "
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg bg-transparent border border-white border-opacity-70"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="p-2 my-2 bg-red-700 w-full rounded-lg hover:bg-red-900"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex flex-col items-center justify-center">
          {isSignIn && (
            <>
              <p className="text-xl">OR</p>{" "}
              <button className="cursor-pointer my-2 hover:underline">
                Forgot password?
              </button>
            </>
          )}
        </div>
        {isSignIn ? (
          <p className="text-gray-400">
            New to Netflix?{" "}
            <button
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toggleSignInForm();
              }}
            >
              Sign up now
            </button>
          </p>
        ) : (
          <p className="text-gray-400">
            Already an user?{" "}
            <button
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toggleSignInForm();
              }}
            >
              Sign in
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
