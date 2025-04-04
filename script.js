import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFOYhJda2FOCUdQVBlqp2gvnRjZYHeMQE",
    authDomain: "sign-up-3b725.firebaseapp.com",
    projectId: "sign-up-3b725",
    storageBucket: "sign-up-3b725.appspot.com",
    messagingSenderId: "278667485871",
    appId: "1:278667485871:web:afd1ff12960181fb11ea5a",
    measurementId: "G-L0EFG54WSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign Up
document.getElementById("signup-btn")?.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Sign-Up successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login
document.getElementById("login-btn")?.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Google Sign Up
document.getElementById("google-signup-btn")?.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Login successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Google Login
document.getElementById("google-login-btn")?.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then(() => {
            alert("Login successfully!!");
            window.location.href = "form.html";
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Reset Password
document.getElementById("reset-password-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    let email = prompt("Enter your email!");

    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent, check your inbox');
            })
            .catch((error) => {
                alert(error.message);
            });
    } else {
        alert('Please enter a valid email');
    }
});

// Auth State Change
onAuthStateChanged(auth, (user) => {
    if (user && window.location.pathname.includes("welcome.html")) {
        document.getElementById("user-email").textContent = user.email;
    } else if (!user && window.location.pathname.includes("welcome.html")) {
        window.location.href = "form.html";
    }
});

// Logout 
document.getElementById("logout-btn")?.addEventListener("click", () => {   
    signOut(auth)     
    .then(() => {       
        alert("Logged Out Successfully!");       
        window.location.href = "index.html"; // Redirect to the login page or home page     
    })     
    .catch((error) => {       
        alert(error.message); // Show error message if sign out fails
    }); 
}); 