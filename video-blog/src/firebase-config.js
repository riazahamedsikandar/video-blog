import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOw0IPOToDILTQ9vy4HugzMlTZq5B-_YI",
  authDomain: "video-blog-73c78.firebaseapp.com",
  databaseURL: "https://video-blog-73c78-default-rtdb.firebaseio.com",
  projectId: "video-blog-73c78",
  storageBucket: "video-blog-73c78.appspot.com",
  messagingSenderId: "114856163491",
  appId: "1:114856163491:web:41f5f835aa233380dae716",
};
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
