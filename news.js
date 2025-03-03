document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.querySelector('.read-more');

    readMoreButton.addEventListener('click', () => {
        const details = readMoreButton.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            readMoreButton.textContent = 'Read Less';
        } else {
            details.style.display = 'none';
            readMoreButton.textContent = 'Read More';
        }
    });
});
