const navOpen = document.querySelector('.mobile-open-btn');
const navClose = document.querySelector('.mobile-close-btn');
const primaryNavigation = document.getElementById('primary-navigation');

navOpen.addEventListener('click', () => {

    const visibility = primaryNavigation.getAttribute('data-visible');
    
    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', true);
        navClose.setAttribute('data-visible', true);
    } else {
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
});

navClose.addEventListener('click', () => {

    const visibility = primaryNavigation.getAttribute('data-visible');
    if (visibility === 'true') {
        primaryNavigation.setAttribute('data-visible', false);
        navClose.setAttribute('data-visible', false);
    }
});


// ======================Cart Menu================

const shoppingBag = document.getElementById('cart-box');
const cartItem = document.getElementById('cart-icon');
const crossBtn = document.getElementById('cross-btn');

shoppingBag.addEventListener('click', () => {

    const showCart = cartItem.getAttribute('data-visible');

    if (showCart === 'false') {
        cartItem.setAttribute('data-visible', true);
    } else {
        cartItem.setAttribute('data-visible', false);
    }
});

crossBtn.addEventListener('click', () => {

    const showCart = cartItem.getAttribute('data-visible');

    if (showCart === 'true') {
        cartItem.setAttribute('data-visible', false);
    } 
});


// =========================LOGIN MODAL=============================
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const forgotPasswordLink = document.querySelector(".pass-link a");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal-btn");
const resetPasswordBtn = document.querySelector("#reset-password-btn");
const resetPasswordForm = document.querySelector("#reset-password-form");
const loginModal = document.querySelector(".login-modal");
const loginModalOpenBtn = document.querySelector("#login-modal-open");
const closeLoginModalBtn = document.querySelector(".close-login-modal-btn");

loginModalOpenBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

signupBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

loginBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

signupLink.addEventListener("click", (event) => {
  event.preventDefault();
  signupBtn.click();
});

forgotPasswordLink.addEventListener("click", () => {
  modal.style.display = "block";
});

resetPasswordBtn.addEventListener("click", () => {
    let emailInput = document.querySelector("input[type='email']");
    let errorMessage = document.querySelector(".error-message");
    let confirmationMessage = document.querySelector(".confirmation-modal");
  
    if (!emailInput.value) {
      errorMessage.innerHTML = "Please enter a valid email address.";
      confirmationMessage.innerHTML = "";
      return;
    }
  
    confirmationMessage.innerHTML = "Password is reset, check your email address and follow instructions.";
    emailInput.value = "";
    errorMessage.innerHTML = "";
  });


forgotPasswordLink.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

closeLoginModalBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});


// Login validation
// Login form validation
const loginEmail = document.querySelector('#login-form input[type="text"]');
const loginPassword = document.querySelector('#login-form input[type="password"]');
const loginErrorMessage = document.querySelector('.login-error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if email and password are valid
  if (loginEmail.value === '' || !loginEmail.value.includes('@')) {
    loginErrorMessage.innerHTML = 'Please enter a valid email address.';
    return;
  }

  if (loginPassword.value === '') {
    loginErrorMessage.innerHTML = 'Please enter a password.';
    return;
  }

  // If validation succeeds, log in the user
  // ... (add your code to log in the user here)
});

// Signup form validation
const signupEmail = document.querySelector('.signup input[type="text"]');
const signupPassword = document.querySelector('.signup input[type="password"]');
const signupConfirmPassword = document.querySelector('.signup input[type="password"][placeholder="Confirm Password"]');
const signupErrorMessage = document.querySelector('.signup-error-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if email, password, and confirm password are valid
  if (signupEmail.value === '' || !signupEmail.value.includes('@')) {
    signupErrorMessage.innerHTML = 'Please enter a valid email address.';
    return;
  }

  if (signupPassword.value === '') {
    signupErrorMessage.innerHTML = 'Please enter a password.';
    return;
  }

  if (signupPassword.value !== signupConfirmPassword.value) {
    signupErrorMessage.innerHTML = 'Passwords do not match.';
    return;
  }

  // If validation succeeds, sign up the user
  // ... (add your code to sign up the user here)
});



// Check if user is logged in

// Function to check if user is logged in
function isLoggedIn() {
  // Check if user is logged in and return true or false
  // For example, you can check if a user is logged in by looking for a cookie
  // Return true if the user is logged in, false otherwise
  const loggedInUser = document.cookie.split(';').find(cookie => cookie.trim().startsWith('loggedInUser='));
  return (loggedInUser !== undefined && loggedInUser !== null);
}

// Hire us button click event handler
function hireUs() {
  if (isLoggedIn()) {
    // User is logged in, redirect to hire us page
    window.location.href = "hire-us.html";
  } else {
    // User is not logged in, open login modal
    document.getElementById("login-modal").style.display = "block";
  }
}

// Signup button click event handler
function signUp() {
  if (isLoggedIn()) {
    // User is logged in, redirect to signup page
    window.location.href = "/shop.html";
  } else {
    // User is not logged in, open login modal
    document.getElementById("login-modal").style.display = "block";
  }
}

// Check if user is logged in for hire us button
if (document.getElementById("hire-us-btn")) {
  document.getElementById("hire-us-btn").addEventListener("click", hireUs);
}

// Check if user is logged in for signup button
if (document.getElementById("signup-btn")) {
  document.getElementById("signup-btn").addEventListener("click", signUp);
}

