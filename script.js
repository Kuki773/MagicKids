document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar/ocultar horarios
document.getElementById('toggle-horarios').addEventListener('click', function() {
    var horariosImagen = document.getElementById('horarios-imagen');
    if (horariosImagen.style.display === 'none') {
        horariosImagen.style.display = 'block';
        this.textContent = 'Ocultar Horarios';
    } else {
        horariosImagen.style.display = 'none';
        this.textContent = 'Ver Horarios';
    }
});