function getElement(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldStr = inputField.value;
    const inputNo = parseInt(inputFieldStr);

    return inputNo;
}

function setPlusInput(inputCount, inputId) {
    const newInput = inputCount + 1;
    document.getElementById(inputId).value = newInput;
    return newInput;
}

function setMinusInput(inputCount, inputId) {
    const newInput = inputCount - 1;
    if (newInput < 0) {
        return 0;
    }
    document.getElementById(inputId).value = newInput;
    return newInput;
}

function calculatePriceAndSet(elementPriceId, elementUnitId, actualPrice) {
    const elementPrice = document.getElementById(elementPriceId);
    const elementPriceStr = elementPrice.innerText;

    const unit = document.getElementById(elementUnitId);
    const unitStr = unit.value;
    const actualUnit = parseInt(unitStr);

    const priceTotal = actualPrice * actualUnit;
    elementPrice.innerText = priceTotal;
}

function calculateTotal() {
    const phonePrice = document.getElementById('phone-price');
    const phonePriceStr = phonePrice.innerText;
    const actualPhonePrice = parseFloat(phonePriceStr);

    const casePrice = document.getElementById('case-price');
    const casePriceStr = casePrice.innerText;
    const actualCasePrice = parseFloat(casePriceStr);

    const subTotal = actualPhonePrice + actualCasePrice;
    document.getElementById('sub-total').innerText = subTotal;

    const tax = (subTotal * 5) / 100;
    document.getElementById('tax').innerText = tax;

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}