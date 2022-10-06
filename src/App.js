import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Feed from "./components/AppBody/Feed/Feed";
import Sidebar from "./components/AppBody/Sidebar/Sidebar";
import Header from "./components/AppHeader/Header";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./state/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
