<script>
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.innerText = 'Switch to Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            toggleButton.innerText = 'Switch to Dark Mode';
        }
    });

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        toggleButton.innerText = 'Switch to Light Mode';
    } else {
        toggleButton.innerText = 'Switch to Dark Mode';
    }
</script>
