document.getElementById('submit-btn').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-name');
    const emailValue = emailFeild.value;

    const passFeild = document.getElementById('user-pass');
    const passValue = passFeild.value;

    if (emailValue == 'nabidh638@gmail.com' && passValue == 'nabidhasan') {
        window.location.href = 'banking.html';
    }

    else {
        console.log('please input valid document!!!')
    }
});