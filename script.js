const clickButton = document.getElementById('click-btn');
const clickDisplay = document.getElementById('click-count');
const upgradeButton = document.getElementById('upgrade-btn');
const upgradeCostDisplay = document.getElementById('upgrade-cost');

let clicks = parseInt(localStorage.getItem('clicks'), 10);
if (isNaN(clicks)) clicks = 0;

let upgradeCost = parseInt(localStorage.getItem('upgradeCost'), 10);
if (isNaN(upgradeCost)) upgradeCost = 100;

// New: load clickValue (how many clicks per click)
let clickValue = parseFloat(localStorage.getItem('clickValue'));
if (isNaN(clickValue)) clickValue = 1;

function updateClickDisplay() {
    clickDisplay.textContent = Math.floor(clicks);
}

function updateUpgradeCostDisplay() {
    upgradeCostDisplay.textContent = upgradeCost;
}

clickButton.addEventListener('click', function() {
    clicks += clickValue;
    localStorage.setItem('clicks', clicks);
    updateClickDisplay();
});

upgradeButton.addEventListener('click', function() {
    if (clicks >= upgradeCost) {
        clicks -= upgradeCost;
        upgradeCost = Math.ceil(upgradeCost * 1.15);
        clickValue = parseFloat((clickValue * 1.10).toFixed(2)); // Increase by 10%
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem('clickValue', clickValue);
        updateClickDisplay();
        updateUpgradeCostDisplay();
    }
});

updateClickDisplay();
updateUpgradeCostDisplay();


upgradeButton.addEventListener('click', function() {
    if (clicks >= upgradeCost) {
        clicks -= upgradeCost;
        upgradeCost = Math.ceil(upgradeCost * 1.15);
        clickValue = clickValue * 2; // Double the click value
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem('clickValue', clickValue);
        updateClickDisplay();
        updateUpgradeCostDisplay();
    }
});
