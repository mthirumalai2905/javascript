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