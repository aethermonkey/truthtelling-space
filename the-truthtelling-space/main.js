// main.js
// You can add your JavaScript here

// Import Firebase modules from CDN as ES modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuBrotwyEgnCz73_E7zE2qoIcMoqUFr8g",
  authDomain: "the-truth-telling-space.firebaseapp.com",
  projectId: "the-truth-telling-space",
  storageBucket: "the-truth-telling-space.firebasestorage.app",
  messagingSenderId: "597271695679",
  appId: "1:597271695679:web:a613e18d704595494b838a",
  measurementId: "G-TFW3R4XDPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Your custom JavaScript code can go here
console.log('Welcome to The Truth Telling Space!');

// UI Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const authForms = document.getElementById('auth-forms');
const userInfo = document.getElementById('user-info');
const userEmail = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-btn');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');

// Tab switching
if (tabLogin && tabRegister && loginForm && registerForm) {
  tabLogin.addEventListener('click', (e) => {
    e.preventDefault();
    tabLogin.classList.add('is-active');
    tabRegister.classList.remove('is-active');
    loginForm.style.display = '';
    registerForm.style.display = 'none';
  });
  tabRegister.addEventListener('click', (e) => {
    e.preventDefault();
    tabRegister.classList.add('is-active');
    tabLogin.classList.remove('is-active');
    loginForm.style.display = 'none';
    registerForm.style.display = '';
  });
  // Set initial state
  loginForm.style.display = '';
  registerForm.style.display = 'none';
}

// Login
if (loginForm) {
  loginForm.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      loginError.textContent = err.message;
    }
  });
}

// Google login
const googleLoginBtn = document.getElementById('google-login-btn');
if (googleLoginBtn) {
  googleLoginBtn.addEventListener('click', async () => {
    loginError.textContent = '';
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      loginError.textContent = err.message;
    }
  });
}

// Anonymous login
const anonLoginBtn = document.getElementById('anon-login-btn');
if (anonLoginBtn) {
  anonLoginBtn.addEventListener('click', async () => {
    loginError.textContent = '';
    try {
      await signInAnonymously(auth);
    } catch (err) {
      loginError.textContent = err.message;
    }
  });
}

// Register
if (registerForm) {
  registerForm.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    registerError.textContent = '';
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      registerError.textContent = err.message;
    }
  });
}

// Logout
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    await signOut(auth);
  });
}

// Auth state observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    authForms.style.display = 'none';
    userInfo.style.display = '';
    userEmail.textContent = user.email || '(Anonymous)';
  } else {
    // User is signed out
    authForms.style.display = '';
    userInfo.style.display = 'none';
    userEmail.textContent = '';
  }
});
