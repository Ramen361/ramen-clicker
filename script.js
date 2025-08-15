const countButton = document.getElementById('count');

countButton.addEventListener('click', function() {
    let current = parseInt(countButton.textContent, 10);
    countButton.textContent = current + 1;
});
let clicks = parseInt(localStorage.getItem('clicks')) || 0;


function updateClickDisplay() {
    document.getElementById('click-count').textContent = clicks;
}


document.getElementById('click-btn').addEventListener('click', function() {
    clicks++;
    localStorage.setItem('clicks', clicks); 
    updateClickDisplay();
});


updateClickDisplay();