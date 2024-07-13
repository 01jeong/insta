// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-3d604.firebaseapp.com",
  projectId: "insta-3d604",
  storageBucket: "insta-3d604.appspot.com",
  messagingSenderId: "910322382775",
  appId: "1:910322382775:web:3d171399cc57a0d6b09a32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read;
//       allow write: if 
//       request.resource.size < 2 * 1024 * 1024 &&
//       request.resource.contentType.matches('image/.*');
//     }
//   }
// }