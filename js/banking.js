function inputValue(inputItem) {

    const inputFeildText = document.getElementById(inputItem);

    const inputFeildValue = inputFeildText.value;
    const inputFeild = parseFloat(inputFeildValue);
    inputFeildText.value = '';
    return inputFeild;
}

function updateMainFeild(amount, totalFeildId, balaceSection) {

    const mainFeildText = document.getElementById(totalFeildId);
    const mainFeildValue = mainFeildText.innerText;
    const mainFeild = parseFloat(mainFeildValue);

    mainFeildText.innerText = amount + mainFeild;

}

function updateBalace(amount, isAdd) {
    const balaceSectionText = document.getElementById('oldBalance');

    const balanceArea = widthdrawBalaceCheak();
    if (isAdd == true) {

        balaceSectionText.innerText = amount + balanceArea;
    }

    else {

        balaceSectionText.innerText = balanceArea - amount;
    }
}

function widthdrawBalaceCheak() {
    const balaceSectionText = document.getElementById('oldBalance');
    const balaceSectionValue = balaceSectionText.innerText;
    const balanceArea = parseFloat(balaceSectionValue);

    return balanceArea;
}

document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmount = inputValue('deposite-amount');

    if (depositeAmount > 0) {
        updateMainFeild(depositeAmount, 'deposite-Dashboard');

        updateBalace(depositeAmount, true);
    }



});

document.getElementById('widthdrawal-btn').addEventListener('click', function () {
    const balanceArea = widthdrawBalaceCheak();
    const widthdrawalAmount = inputValue('widthdrawal-amount');

    if (widthdrawalAmount >= 0 && balanceArea > widthdrawalAmount) {
        updateMainFeild(widthdrawalAmount, 'widthdrawal-Dashboard');
        updateBalace(widthdrawalAmount, false);
    }
});
