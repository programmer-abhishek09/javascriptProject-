const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const height = parseInt(document.querySelector('#height').value); // Get height value
    const weight = parseInt(document.querySelector('#weight').value); // Get weight value
    const result = document.querySelector('#results'); // Select the results div

    // Validate height input
    if (height < 0 || isNaN(height)) {
        result.innerHTML = 'Please give a valid height';
    }
    // Validate weight input
    else if (weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please give a valid weight';
    }
    // Calculate BMI
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); // Calculate BMI
        result.innerHTML=`<span>${bmi}</span>`
        // Display BMI result with category
        if (bmi < 18.5) {
            result.innerHTML = `Your BMI is ${bmi} - Underweight`;
            result.style.color='red'
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = `Your BMI is ${bmi} - Normal weight`;
            result.style.color='green'
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = `Your BMI is ${bmi} - Overweight`;
            // document.style.backgroundColor='red
            result.style.color='orange'
        } else {
            result.innerHTML = `Your BMI is ${bmi} - Obese`;
            result.style.color='red'
        }
    }
});