

function scrollL(){
    const container = document.getElementById('scroll-container');
    const scrollAmount = container.clientWidth; // Прокручиваем на ширину контейнера
    container.scrollLeft -= scrollAmount;
}

function scrollR() {
    const container = document.getElementById('scroll-container');
    const scrollAmount = container.clientWidth; // Прокручиваем на ширину контейнера
    container.scrollLeft += scrollAmount;
}
