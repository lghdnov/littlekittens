document.getElementById('transition-btn').addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('page1').classList.add('fade-out');

    setTimeout(() => {
        window.location.href = this.href;
    }, 500);
});