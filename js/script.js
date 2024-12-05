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