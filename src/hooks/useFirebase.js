import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../components/firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [data, setdata] = useState([]);
  const [user, setuser] = useState({});
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    fetch("fakebd.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  const siginwithUsingGoogle = () => {
    setisLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const createNewUserByEmailPass = (email, password, name) => {
    setisLoading(true);
    // console.log(email, password, name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // console.log(result.user);
        setuser(result.user);
        sendConfirmetionOnEmail();
        setOtheruserInfo(name);
      })
      .catch((error) => {
        seterror(error.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  const sendConfirmetionOnEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("send email and confirm email validation");
    });
  };
  const setOtheruserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // console.log("update name");
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  const loginusingEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setuser(user);
      } else {
        setuser({});
      }
      setisLoading(false);
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setuser({});
      })
      .catch((error) => {
        seterror(error.message);
      });
  };

  return {
    data,
    user,
    setuser,
    error,
    seterror,
    isLoading,
    setisLoading,
    siginwithUsingGoogle,
    createNewUserByEmailPass,
    loginusingEmailPass,
    logout,
  };
};
export default useFirebase;
