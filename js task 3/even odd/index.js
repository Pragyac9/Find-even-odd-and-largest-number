function checkOddOrEven() {
    // Get the input value
    const number = document.getElementById('numberInput').value;

    // Check if the input is a valid number
    if (!isNaN(number)) {
        // Convert the input value to an integer for the check
        const num = parseInt(number);

        // Check if the number is odd or even
        if (num % 2 === 0) {
            document.getElementById('result').innerHTML = `${num} is an even number.`;
            document.getElementById('result').style.fontSize = "30px";

        } else {
            document.getElementById('result').innerHTML = `${num} is an odd number.`;
            document.getElementById('result').style.fontSize = "30px";

        }
    } else {
        // If the input is not a valid number
        document.getElementById('result').innerHTML = 'Please enter a valid number.';
        document.getElementById('result').style.fontSize = "30px";

    }
}