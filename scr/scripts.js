document.querySelector('#calculate').addEventListener('click', calculate);



let conversions = parseInt(localStorage.setItem('conversions', '0'));
if (isNaN(conversions)){
    conversions = 0;
    console.log("in if statement");
    localStorage.setItem('conversions', conversions);
}


function updateConversion() {
    conversions = parseInt(conversions) + 1;
    console.log(conversions);
    localStorage.setItem('conversions', conversions);
    document.querySelector('#times').innerHTML = conversions;
}


function calculate() {
    const binary = parseInt(document.querySelector('#originalNum').value);

    updateConversion();

    document.querySelector('#binaryNum').innerHTML = (binary.toString(2));
}
