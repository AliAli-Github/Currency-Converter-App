const currencyCodes = [
    "AFN", "EUR", "ALL", "DZD", "USD", "AOA", "XCD", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD", "BDT", "BBD",
    "BYN", "BZD", "XOF", "BMD", "BTN", "NOK", "BAM", "BWP", "BRL", "BND", "BGN", "BIF", "CVE", "KHR", "XAF", "CAD",
    "KYD", "KMF", "CDF", "NZD", "CRC", "HRK", "CUP", "ANG", "CZK", "DKK", "DJF", "DOP", "EGP", "SVC", "ERN", "ETB",
    "FKP", "FJD", "GMD", "GEL", "GHS", "GIP", "GTQ", "GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "INR", "IDR",
    "IRR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "AUD", "KPW", "KRW", "KWD", "KGS", "LAK", "LBP", "LSL",
    "ZAR", "LRD", "LYD", "CHF", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRU", "MUR", "XUA", "MXN", "MDL", "MNT",
    "MAD", "MZN", "MMK", "NAD", "NPR", "XPF", "NIO", "NGN", "OMR", "PKR", "PGK", "PYG", "PEN", "PHP", "PLN", "QAR",
    "RON", "RUB", "RWF", "SHP", "WST", "STD", "SAR", "RSD", "SCR", "SLL", "SGD", "XSU", "SBD", "SOS", "SSP", "LKR",
    "SDG", "SRD", "SZL", "SEK", "SYP", "TWD", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH",
    "AED", "UYU", "UZS", "VUV", "VEF", "VND", "MAD", "YER", "ZMW", "ZWL"
];
currencyCodes.sort();

// make country list with flags
const selectElem = document.querySelectorAll("select");
const toFlagImg = document.querySelector("#to-flag-img");
const fromFlagImg = document.querySelector("#from-flag-img");
function makeCountryList() {
    selectElem.forEach(function (element, index) {
        if (index == 0) {
            element.innerHTML = `<option value="PKR">PKR</option>`;
            element.addEventListener("change", function () {
                let selectedOption = element.options[element.selectedIndex].value.slice(0, 2);
                toFlagImg.src = `https://flagsapi.com/${selectedOption}/flat/64.png`;
            })
        }
        else if (index == 1) {
            element.innerHTML = `<option value="USD">USD</option>`;
            element.addEventListener("change", function () {
                let selectedOption = element.options[element.selectedIndex].value.slice(0, 2);
                fromFlagImg.src = `https://flagsapi.com/${selectedOption}/flat/64.png`;
            })
        }
        for (let count = 0; count < currencyCodes.length; count++) {
            if (index == 0 && currencyCodes[count] !== "PKR" || index == 1 && currencyCodes[count] !== "USD") {
                element.innerHTML += `<option value="${currencyCodes[count]}">${currencyCodes[count]}</option>`;
            }
        }
    });
};
makeCountryList();

// taking amount from input 
const amountInput = document.querySelector("#amount-value");
let amountError = document.querySelector("#amount-error");
const regex = /^(?!0$)\d+(\.\d+)?$/;
function checkingAmount() {
    amountInput.addEventListener("input", function () {
        if (amountInput.value === "") {
            amountError.innerHTML = "Please enter amount";
        }
        else if (regex.test(amountInput.value) == false) {
            amountError.innerHTML = "Please enter valid amount";
        }
        else {
            amountError.innerHTML = "";
        }
    });
}
checkingAmount();