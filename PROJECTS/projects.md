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


## Js Project3

```javascript
const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
    
}, 1000)
```


## Js Project4 

```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
    <div class='color'>
    <table border="1">
       <thead>
           <tr>
               <th>Key</th>
               <th>Keycode</th>
               <th>Code</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>${e.key}</td>
               <td>${e.keyCode}</td>
               <td>${e.code}</td>
           </tr>
           
       </tbody>
   </table>
    </div>
    `
})
```


## Js Project5

```javascript
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i =0; i<6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}



let intervalId;
const startChangingColor = function(){
    if(!intervalId){ // improving the memory
        intervalId = setInterval(chnageBgColor, 1000)
    }
    
    function chnageBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; // improving the memory
}

document.querySelector('#start').addEventListener('click',
startChangingColor);


document.querySelector('#stop').addEventListener('click',
stopChangingColor);



```