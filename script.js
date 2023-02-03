const btn = document.querySelector('.btn');
const ratingItems = document.querySelectorAll('.rating-item');
const container = document.querySelector('.container');
const resultContainer = document.querySelector('.result-container');
const ratingValue = document.querySelector('#rating-value');


ratingItems.forEach(item => {
    item.addEventListener('click', () => {
        ratingItems.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
        ratingValue.textContent = item.getAttribute('data-value');
    })
})


btn.addEventListener('click', () => {
    container.style.display = 'none';
    resultContainer.style.display = 'flex';
    ratingValue.textContent = rating;

})