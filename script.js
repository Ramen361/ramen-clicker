const clickButton = document.getElementById('click-btn');
const clickDisplay = document.getElementById('click-count');
const upgradeButton = document.getElementById('upgrade-btn');
const upgradeCostDisplay = document.getElementById('upgrade-cost');

let clicks = parseInt(localStorage.getItem('clicks'), 10);
if (isNaN(clicks)) clicks = 0;

let upgradeCost = parseInt(localStorage.getItem('upgradeCost'), 10);
if (isNaN(upgradeCost)) upgradeCost = 100;


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
        clickValue = clickValue * 2; 
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem('clickValue', clickValue);
        updateClickDisplay();
        updateUpgradeCostDisplay();
    }
});

updateClickDisplay();
updateUpgradeCostDisplay();



const clickValueDisplay = document.getElementById('click-value');

function updateClickValueDisplay() {
    if (clickValueDisplay) {
        clickValueDisplay.textContent = `Click Power: ${clickValue}`;
    }
}


function updateClickDisplay() {
    clickDisplay.textContent = Math.floor(clicks);
    updateClickValueDisplay();
}




upgradeButton.addEventListener('click', function() {
    if (clicks >= upgradeCost) {
        clicks -= upgradeCost;
        upgradeCost = Math.ceil(upgradeCost * 1.15);
        clickValue = clickValue * 2; 
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem('clickValue', clickValue);
        updateClickDisplay();
        updateUpgradeCostDisplay();
    }
});



updateClickDisplay();
updateUpgradeCostDisplay();