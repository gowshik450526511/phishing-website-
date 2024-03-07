document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('txtPassword');
    const showCheckbox = document.getElementById('show');
  
    showCheckbox.addEventListener('click', function() {
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
    });
  });