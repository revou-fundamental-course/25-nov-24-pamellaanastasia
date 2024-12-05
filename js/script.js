// Form Validation & BMI Calculation Variables
const weight = document.getElementById('inputweight').value;
const height = document.getElementById('inputheight').value;
const age = document.getElementById('inputage').value;

console.log('Weight' + weight);
console.log('Height' + height);
console.log('Age' + age);

// Form Validation
function validate() {   
    if (weight != '' && height != '' && age != '') {
        calculate();
    } else {
        alert('Please fill in all field first!');
    }
}

// BMI Calculation
function calculate() {
    var bmi = weight / (height * height);
    document.getElementById('resultcal').innerHTML = bmi.toFixed(2).toString(2);
    if (bmi < 18.5) {
        document.getElementById('resultcategory').innerHTML = "Underweight";
        document.getElementById('resultstatement').innerHTML = "Your BMI Result (< 18.5) falls within the Underweight range.";
        document.getElementById('resultsuggestion').innerHTML =
        "The best way to gain weight is to increase your calorie, protein, and fat intake. Also, it is best to exercise to build muscle mass. <br /> If your BMI is in this category, then you are advised to gain weight to the Normal range or contact your Nutritionist for more information about proper diet and nutrition to improve health.";
    } else if ((bmi > 18.5) && (bmi < 24.9)){
        document.getElementById('resultcategory').innerHTML = "Normal";
        document.getElementById('resultstatement').innerHTML = "Your BMI Result (18.5 - 24.9) falls within the Normal Weight range.";
        document.getElementById('resultsuggestion').innerHTML =
        "The best way to maintain your weight is to manage a balanced diet, keep your body well hydrated, exercise regularly and regulate your sleep patterns to be of good quality. <br /> If your BMI is in this category, then you are advised to maintain your diet and activity.";
    } else if ((bmi > 25) && (bmi < 29.9)){
        document.getElementById('resultcategory').innerHTML = "Overweight";
        document.getElementById('resultstatement').innerHTML = "Your BMI Result (25.0 - 29.9) falls within the Overweight range.";
        document.getElementById('resultsuggestion').innerHTML =
        "The best way to reducing weight is to manage your calorie, protein, and fat intake. <br /> If your BMI is in this category, it is recommended to reduce weight to the Normal range or contact your Nutritionist for more information about proper diet and nutrition to reduce weight and improve health.";
    } else {
        document.getElementById('resultcategory').innerHTML = "Obese";
        document.getElementById('resultstatement').innerHTML = "Your BMI Result (> 29.9) falls within the Obese range.";
        document.getElementById('resultsuggestion').innerHTML =
        "The best way to reduce weight is to adopt a healthy diet, exercise regularly, and manage stress. <br /> If your BMI is in this category, then you are advised to contact your Nutritionist for more information about proper diet and nutrition to improve health.";
    }
}

// Clear BMI Form & Calculation
// function clear() {
//     const clearForm = document.getElementById('bmi-form').clear.reset();
// }