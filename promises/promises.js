"use strict"

alert("promises");

let url = "https://reqres.in/api/unknown";

let getApiData = () => {
    fetch(url)
    .then((response) => {
    //    console.log(response);
       response.json()
       .then((data)=>{

            for (let item in data.data){
                console.log(data.data[item]['color']);
            }
       })
    })
    .catch((error) =>{
        console.log(`Error: ${error}`);
    })
}

getApiData();