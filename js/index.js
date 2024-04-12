const base_url = "http://localhost:3000/current";
const location_url = "http://localhost:3000/location";
const forecast_url = "http://localhost:3000/forecast";

fetchCurrent();

async function fetchCurrent(){
    fetch(`${base_url}`, {
        method: 'GET',
        headers: {
            'content-type' : 'applocation/json'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data) 
    })
  }
