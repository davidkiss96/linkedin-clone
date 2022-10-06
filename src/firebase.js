import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5jsFd93XBPSJV7_I7mv7yJRfbebGpUjE",
  authDomain: "linkedin-clone-6a8cf.firebaseapp.com",
  projectId: "linkedin-clone-6a8cf",
  storageBucket: "linkedin-clone-6a8cf.appspot.com",
  messagingSenderId: "907004085393",
  appId: "1:907004085393:web:f80982a92acde5caf26b30",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
