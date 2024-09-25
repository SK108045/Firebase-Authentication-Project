# Firebase-Authentication-Project

This project demonstrates a comprehensive Firebase authentication system using HTML, CSS, and JavaScript. It includes email/password sign-up with email verification, as well as social media authentication options.

## Features

- Email/Password sign-up with email verification
- Google Sign-In
- Facebook Sign-In
- GitHub Sign-In
- Twitter Sign-In
- Responsive and modern UI design


## Files

- `signup.html`: The main sign-up page with all authentication options
- `verify-email.html`: Email verification page
- `index.html`: The main application page after successful authentication
- `firebase-config.js`: Firebase configuration and initialization
- `signup.js`: JavaScript for handling sign-up and authentication
- `verify-email.js`: JavaScript for email verification process
- `styles/styles2.css`: CSS styles for the project
  
## Setup

1. Clone this repository
2. Replace the Firebase configuration in `firebase-config.js` with your own Firebase project credentials
3. Set up the authentication methods in your Firebase console:
   - Enable Email and Google authentication
   - Configure the OAuth redirect domains for social media authentication (Github, Facebook and Twitter)
4. Deploy the project to a web server or use a local development server eg this project is currently deployed on an Nginx server running on port 
   **8000** inside the **Firebase** folder
   
## Usage

1. Open `signup.html` in a web browser
2. Choose a sign-up method:
   - Enter email and password for email authentication **or** click on a social media button for third-party authentication
3. For email sign-up, check your email for the verification link
4. Click the verification link to verify your email address
5. After successful authentication, you'll be redirected to `index.html`

## How It Works

1. User Authentication:
   - Firebase handles user authentication, generating JSON Web Tokens (JWTs) upon successful sign-in.
   - JWTs are securely stored in the browser's local storage.
   - These tokens are used to maintain user sessions and authorize requests to Firebase services.

2. Social Media Authentication:
   - OAuth 2.0 is used for social media sign-ins.
   - Firebase handles the OAuth flow, exchanging authorization codes for access tokens.

3. Session Management:
   - Firebase SDK manages user sessions using the stored JWT.
   - The `onAuthStateChanged` listener in our code detects changes in authentication state.


