import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "***************",

  authDomain: "*******",

  projectId: "your-project-id",

  storageBucket: "your-storage-bucket",

  messagingSenderId: "your-message-sender-id",

  appId: "app-id",

  measurementId: "measurement-id"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);