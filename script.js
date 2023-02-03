const tipOptions = document.querySelectorAll('.tip-option, .custom-tip');
const tipCustom = document.querySelector('#custom-tip');
const bill = document.querySelector('.bill');
const peopleNumber = document.querySelector('.people-number');
const errorText = document.querySelector('.error-text');

bill.addEventListener('keyup', () => {
    calculateTip()
});
peopleNumber.addEventListener('keyup', () => {
    calculateTip()
});

const btn = document.querySelector('.btn');

tipOptions.forEach((tip, index) => {
    tip.addEventListener('click', () => {
        removeActive();
        tip.classList.add('active');
        if (index <= 4) {
            tipAmount = tip.getAttribute('data-value');
            tipOptions[5].value = '';
        }
        else {
            tipAmount = tip.value / 100;
        }
        calculateTip();
    })
})

tipOptions[5].addEventListener('keyup', () => {
    removeActive();
    tipAmount = tipOptions[5].value / 100;
    calculateTip();
})

function removeActive() {
    tipOptions.forEach(tip => {
        tip.classList.remove('active');
    })
}

btn.addEventListener('click', reset);

function reset() {
    tipFinalAmount = 0;
    totalAmount = 0;
    bill.value = '';
    tipOptions[5].value = '';
    peopleNumber.value = '';
    totalValue.textContent = '$' + totalAmount.toFixed(2);
    tipValue.textContent = '$' + tipFinalAmount.toFixed(2);
    removeError();
    removeActive();
}

function calculateTip() {
    if (peopleNumber.value <= 0) {
        errorText.style.display = 'block';
        peopleNumber.classList.add('error');
    }
    else {
        numberOfPeople = peopleNumber.value;
        billAmount = bill.value;
        tipFinalAmount = billAmount * tipAmount / numberOfPeople;
        totalAmount = billAmount / numberOfPeople + tipFinalAmount;
        tipValue.textContent = '$' + tipFinalAmount.toFixed(2);
        totalValue.textContent = '$' + totalAmount.toFixed(2);
        removeError();
    }

}

function removeError() {
    errorText.style.display = 'none';
    peopleNumber.classList.remove('error');
}

let billAmount = 0;
let tipFinalAmount = 0;
let tipAmount = 0;
let totalAmount = 0;
let numberOfPeople;

const totalValue = document.querySelector('#total-value')
const tipValue = document.querySelector('#tip-value')
