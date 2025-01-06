document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check for saved mode preference
  const savedMode = localStorage.getItem('dark-mode');
  if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    }
  });
});
