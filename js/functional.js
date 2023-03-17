/* Calculation for Phone  */
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const inputCount = getElement('phone-field');
    setMinusInput(inputCount, 'phone-field');

    calculatePriceAndSet('phone-price', 'phone-field', 800);
    calculateTotal();
})

document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const inputCount = getElement('phone-field');
    setPlusInput(inputCount, 'phone-field');
    calculatePriceAndSet('phone-price', 'phone-field', 800);

    calculateTotal();
})


/* Calculation for case: */

document.getElementById('case-btn-minus').addEventListener('click', function () {
    const inputCount = getElement('case-field');
    setMinusInput(inputCount, 'case-field');
    calculatePriceAndSet('case-price', 'case-field', 40);

    calculateTotal();

})

document.getElementById('case-btn-plus').addEventListener('click', function () {
    const inputCount = getElement('case-field');
    setPlusInput(inputCount, 'case-field');
    calculatePriceAndSet('case-price', 'case-field', 40);

    calculateTotal();

})

document.getElementById('check-out-btn').addEventListener('click', function () {
    alert('This part is under-construction!');
})