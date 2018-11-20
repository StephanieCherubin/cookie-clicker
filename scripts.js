/********************************

        COOKIE clicker

********************************/

//declare default variables
let cookieCount = 0;
let clickPower = 1;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

cookieCounter.innerHTML = cookieCount;

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})

/********************************

        Click Power

********************************/
// refresh cookie count
let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

//default variables
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Buy click power
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    //subtract cookies from the price of the item
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount()

    //Upgrade power level
    clickPowerLevelNumber += 1;

    //Update click price
    clickPowerPrice = Math.floor(clickPowerPrice * 1.33);

    //update Click Power
    clickPower += 1;

    //refresh shop item
    refreshPowerClick();
  }
});

let refreshPowerClick = function() {
  clickPowerLevel.innterHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}

/********************************

          Grandmas

********************************/
//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');