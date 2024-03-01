# Projects related to DOM

## Js Snippet for Project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})
```


## Js Snippet for Project 2
```javascript
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
```