// Email Sign Up
document.getElementById('emailSignUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Send email verification
            userCredential.user.sendEmailVerification({
                url: 'http://localhost:8000/Firebase/verify-email.html'
            }).then(() => {
                alert('Signed up successfully! Please check your email for verification.');
            }).catch((error) => {
                alert('Error sending verification email: ' + error.message);
            });
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Google Sign In
document.getElementById('googleSignInBtn').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Signed in with Google successfully!');
            window.location.href = 'http://localhost:8000/Firebase/index.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Facebook Sign In
document.getElementById('facebookSignInBtn').addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Signed in with Facebook successfully!');
            window.location.href = 'http://localhost:8000/Firebase/index.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// GitHub Sign In
document.getElementById('githubSignInBtn').addEventListener('click', () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Signed in with GitHub successfully!');
            window.location.href = 'http://localhost:8000/Firebase/index.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Twitter Sign In
document.getElementById('twitterSignInBtn').addEventListener('click', () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            alert('Signed in with Twitter successfully!');
            window.location.href = 'http://localhost:8000/Firebase/index.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});

// Listen for auth state changes
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User is signed in:', user);
        if (user.emailVerified) {
            console.log('Email is verified');
            window.location.href = 'http://localhost:8000/Firebase/index.html';
        } else {
            console.log('Email is not verified');
           
        }
    } else {
        console.log('No user is signed in.');
    }
});
