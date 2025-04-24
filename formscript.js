function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById('myForm');
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const password = form.elements['password'].value.trim();

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Reset previous error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  let isValid = true;

  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  }

  if (password === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  }

  if (isValid) {
    form.submit(); // Submit the form if valid
  }
}

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}