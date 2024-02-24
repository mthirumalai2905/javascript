

const url = 'https://randomuser.me/api/';

fetch(url).then(data => {
    console.log(data.statusText);
  })
  