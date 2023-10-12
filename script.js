let total = 0;

let pennyCount = 0;
let nickelCount = 0;
let dimeCount = 0;
let quarterCount = 0;

function updateTotal() {
    document.getElementById("totalCount").textContent = total.toFixed(2);
}

function updateCoinCount(coinType, count) {
    document.getElementById(coinType + "Count").textContent = count;
}

function addPenny() {
    total += 0.01;
    pennyCount++;
    updateTotal();
    updateCoinCount("penny", pennyCount);
}

function addNickel() {
    total += 0.05;
    nickelCount++;
    updateTotal();
    updateCoinCount("nickel", nickelCount);
}

function addDime() {
    total += 0.10;
    dimeCount++;
    updateTotal();
    updateCoinCount("dime", dimeCount);
}

function addQuarter() {
    total += 0.25;
    quarterCount++;
    updateTotal();
    updateCoinCount("quarter", quarterCount);
}

function subtractPenny() {
    if (pennyCount > 0) {
        total -= 0.01;
        pennyCount--;
        updateTotal();
        updateCoinCount("penny", pennyCount);
    }
}

function subtractNickel() {
    if (nickelCount > 0) {
        total -= 0.05;
        nickelCount--;
        updateTotal();
        updateCoinCount("nickel", nickelCount);
    }
}

function subtractDime() {
    if (dimeCount > 0) {
        total -= 0.10;
        dimeCount--;
        updateTotal();
        updateCoinCount("dime", dimeCount);
    }
}

function subtractQuarter() {
    if (quarterCount > 0) {
        total -= 0.25;
        quarterCount--;
        updateTotal();
        updateCoinCount("quarter", quarterCount);
    }
}
