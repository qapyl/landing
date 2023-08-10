window.onload = function() {
    // Cargar el navbar
    fetch('/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        initNavbar();  // Llama a la función después de cargar el navbar
    })
    .catch(error => {
        console.error('Error fetching nav.html:', error);
    });

    // Cargar el footer
    fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer.html:', error);
    });
};
