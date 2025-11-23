document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.enviarContacto');
    if (btn) {
        btn.addEventListener('click', function() {
            location.reload();
        });
    }
});
