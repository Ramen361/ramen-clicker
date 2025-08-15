
const clickButton = document.getElementById('click-btn');
const clickDisplay = document.getElementById('click-count');

let clicks = parseInt(localStorage.getItem('clicks')) || 0;


function updateClickDisplay() {
    clickDisplay.textContent = clicks;
}


clickButton.addEventListener('click', function() {
    clicks++;
    localStorage.setItem('clicks', clicks);
    updateClickDisplay();
});
