import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaWIB51m3m8Sv0u_jtvXEd41c064FhYak",
  authDomain: "ai-interview-5863c.firebaseapp.com",
  projectId: "ai-interview-5863c",
  storageBucket: "ai-interview-5863c.firebasestorage.app",
  messagingSenderId: "1077521349218",
  appId: "1:1077521349218:web:535a301576444405adaf3b",
  measurementId: "G-WEKJFC9Z58",
}

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig)

// Khởi tạo các service
export const auth = getAuth(app)
export const analytics = getAnalytics(app)
