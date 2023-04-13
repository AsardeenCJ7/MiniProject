const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateName()) {
    nameInput.classList.add('error');
    nameError.textContent = 'Please enter a valid name';
  } else {
    nameInput.classList.remove('error');
    nameError.textContent = '';
  }
  if (!validateEmail()) {
    emailInput.classList.add('error');
    emailError.textContent = 'Please enter a valid email address';
  } else {
    emailInput.classList.remove('error');
    emailError.textContent = '';
  }
  if (phoneInput.value && !validatePhone()) {
    phoneInput.classList.add('error');
    phoneError.textContent = 'Please enter a valid phone number';
  } else {
    phoneInput.classList.remove('error');
    phoneError.textContent = '';
  }
  if (!validateMessage()) {
    messageInput.classList.add('error');
    messageError.textContent = 'Please enter a message';
  } else {
    messageInput.classList.remove('error');
    messageError.textContent = '';
  }
  if (validateName() && validateEmail() && (phoneInput.value === '' || validatePhone()) && validateMessage()) {
    form.submit();
  }
});

function validateName() {
  const nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(nameInput.value);
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailInput.value);
}

function validatePhone() {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneInput.value);
}

function validateMessage() {
  return messageInput.value.trim() !== '';
}
