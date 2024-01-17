function getResult() {
    var semester1 = document.getElementById('semester_1').value;
    var semester2 = document.getElementById('semester_2').value;
    var year = parseInt(document.getElementById('Year').value);
    var summeriseInput = document.getElementById('summerise');
    var resultDisplay = document.getElementById('result');

    if (semester1 !== '' && semester2 !== '') {
        semester1 = Number(semester1);
        semester2 = Number(semester2);
        if (semester1 >= 0 && semester1 <= 10 && semester2 >= 0 && semester2 <= 10) {
            var result;
            if (year === 1) {
                result = (semester1 + (semester2 * 2)) / 3;
            } else if (year === 2) {
                result = (semester1 + (semester2 * 3)) / 4;
            } else if (year === 3) {
                result = (semester1 + (semester2 * 4)) / 5;
            } else {
                result = 0;
            }
            summeriseInput.value = result.toFixed(2);
            var strResult;
            if (result > 9) {
                strResult = 'Hoc sinh gioi';
            } else if (result > 7) {
                strResult = 'Hoc sinh kha';
            } else if (result >= 4) {
                strResult = 'Hoc sinh trung binh';
            } else {
                strResult = 'Hoc sinh yeu';
            }
            resultDisplay.innerHTML = strResult;
            resultDisplay.style.color = 'red';
        } else {
            alert('Điểm của bạn chỉ từ 0 -> 10');
        }
    } else {
        alert('Nhập điểm');
    }
}
function cancel() {
    var semester1Input = document.getElementById('semester_1');
    var semester2Input = document.getElementById('semester_2');
    var yearInput = document.getElementById('Year');
    var summeriseInput = document.getElementById('summerise');
    var resultDisplay = document.getElementById('result');

    semester1Input.value = '';
    semester2Input.value = '';
    yearInput.value = '1';
    summeriseInput.value = '';
    resultDisplay.innerHTML = '';
    resultDisplay.style.color = '';
}
