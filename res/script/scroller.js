

function scrollL(){
    const container = document.getElementById('scroll-container');
    const scrollAmount = container.clientWidth;
    container.scrollLeft -= scrollAmount;
}

function scrollR() {
    const container = document.getElementById('scroll-container');
    const scrollAmount = container.clientWidth;
    container.scrollLeft += scrollAmount;
}
