function findLargest() {
    // Get input values
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    // Check for valid numbers
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers!";
        return;
    }

    // Find the largest number
    let largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }

    // Display the result
    document.getElementById('result').innerHTML = `The largest number is: ${largest}`;
}
