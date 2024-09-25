function updateStatus(message) {
    document.getElementById('status').textContent = message;
}

function verifyEmail() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const oobCode = urlParams.get('oobCode');

    if (mode === 'verifyEmail' && oobCode) {
        updateStatus('Verifying your email...');
        firebase.auth().applyActionCode(oobCode).then(() => {
            updateStatus('Email verified successfully! Redirecting...');
            setTimeout(() => {
                window.location.href = 'http://localhost:8000/Firebase/index.html';
            }, 2000); // Redirect after 2 seconds
        }).catch((error) => {
            updateStatus('Error verifying email: ' + error.message);
        });
    } else {
        updateStatus('Invalid verification link.');
    }
}

// Check if the user is already signed in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if (user.emailVerified) {
            updateStatus('Your email is already verified. Redirecting...');
            setTimeout(() => {
                window.location.href = 'http://localhost:8000/Firebase/index.html';
            }, 2000); // Redirect after 2 seconds
        } else {
            verifyEmail();
        }
    } else {
        verifyEmail();
    }
});
