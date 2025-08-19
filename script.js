const clickButton = document.getElementById('click-btn');
const clickDisplay = document.getElementById('click-count');
const upgradeButton = document.getElementById('upgrade-btn');
const upgradeCostDisplay = document.getElementById('upgrade-cost');
const autoUpgradeButton = document.getElementById('auto-upgrade-btn');
const autoUpgradeCostDisplay = document.getElementById('upgrade-btn2-cost');
const clickValueDisplay = document.getElementById('click-value');

let clicks = parseInt(localStorage.getItem('clicks'), 10);
if (isNaN(clicks)) clicks = 0;

let upgradeCost = parseInt(localStorage.getItem('upgradeCost'), 10);
if (isNaN(upgradeCost)) upgradeCost = 100;

let clickValue = parseFloat(localStorage.getItem('clickValue'));
if (isNaN(clickValue)) clickValue = 1;


let autoUpgradeCost = parseInt(localStorage.getItem('autoUpgradeCost'), 10);
if (isNaN(autoUpgradeCost)) autoUpgradeCost = 1000;

let autoClickers = parseInt(localStorage.getItem('autoClickers'), 10);
if (isNaN(autoClickers)) autoClickers = 0;

function updateClickDisplay() {
    clickDisplay.textContent = Math.floor(clicks);
    updateClickValueDisplay();
}

function updateUpgradeCostDisplay() {
    upgradeCostDisplay.textContent = upgradeCost;
}

function updateAutoUpgradeCostDisplay() {
    autoUpgradeCostDisplay.textContent = autoUpgradeCost;
}

function updateClickValueDisplay() {
    if (clickValueDisplay) {
        clickValueDisplay.textContent = `Click Power: ${clickValue} | Auto: ${autoClickers}/sec`;
    }
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
        clickValue *= 2;
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('upgradeCost', upgradeCost);
        localStorage.setItem('clickValue', clickValue);
        updateClickDisplay();
        updateUpgradeCostDisplay();
    }
});


autoUpgradeButton.addEventListener('click', function() {
    if (clicks >= autoUpgradeCost) {
        clicks -= autoUpgradeCost;
        autoClickers += 1;
        autoUpgradeCost = Math.ceil(autoUpgradeCost * 1.5);
        localStorage.setItem('clicks', clicks);
        localStorage.setItem('autoUpgradeCost', autoUpgradeCost);
        localStorage.setItem('autoClickers', autoClickers);
        updateClickDisplay();
        updateAutoUpgradeCostDisplay();
    }
});


setInterval(function() {
    if (autoClickers > 0) {
        clicks += autoClickers;
        localStorage.setItem('clicks', clicks);
        updateClickDisplay();
    }
}, 1000);


updateClickDisplay();
updateUpgradeCostDisplay();
updateAutoUpgradeCostDisplay();
