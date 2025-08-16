const clickButton = document.getElementById('click-btn');
const clickDisplay = document.getElementById('click-count');
const upgradeButton = document.getElementById('upgrade-btn');
const upgradeCostDisplay = document.getElementById('upgrade-cost');

let clicks = parseInt(localStorage.getItem('clicks'), 10);
if (isNaN(clicks)) clicks = 0;

let upgradeCost = parseInt(localStorage.getItem('upgradeCost'), 10);
if (isNaN(upgradeCost)) upgradeCost = 100;

function updateClickDisplay() {
    clickDisplay.textContent = clicks;
}

function updateUpgradeCostDisplay() {
    upgradeCostDisplay.textContent = upgradeCost;
}

clickButton.addEventListener('click', function() {
    clicks++;
    localStorage.setItem('clicks', clicks);
    updateClickDisplay();
});

upgradeButton.addEventListener('click', function() {
    if (clicks >= upgradeCost) {
        clicks -= upgradeCost;
        upgradeCost = Math.ceil(upgradeCost * 1.15);
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('upgradeCost', upgradeCost);
        updateClickDisplay();
        updateUpgradeCostDisplay();
    }
});

updateClickDisplay();
updateUpgradeCostDisplay();