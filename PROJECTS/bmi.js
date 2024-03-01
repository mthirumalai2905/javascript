const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(isNaN(height) || height < 0){
        results.innerHTML = `Please give a valid height: ${height}`;
    } 
    else if(isNaN(weight) || weight < 0){
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        // Convert height from centimeters to meters before calculating BMI
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
