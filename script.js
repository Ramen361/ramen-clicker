
const countButton = document.getElementById('count');

countButton.addEventListener('click', function() {
    let current = parseInt(countButton.textContent, 10);
    countButton.textContent = current + 1;
});
