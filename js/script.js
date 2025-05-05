document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-message').textContent = 'Thank you for signing up!';
  });
});
