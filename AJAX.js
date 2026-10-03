//  INTRODUCTION TO AJAX->

//  ->Asynchronous JavaScript & XML.
//  ->Not a technology.
//  ->Sends and Receives data from client and server Asynchronously.
//  ->different than regular HTTP Requests.
//  ->uses XMLHTTPRequest Object.
//  ->carries data in xml, plain text and JSON format.
//  ->Does not refresh the browser to Receive data from server.

//  ------------------------------------------------------------------------------------------

//  WAYS OF AJAX ->

//  -> regular AJAX Requests.
//  -> fetch API.
//  -> Axios Library.
//  -> Jquery Library.
//  -> Node JS HTTP Module.


//GET -> to fetch data from a server.  (READ)
//POST -> to send some data to a server. (CREATE)
//PUT -> to update at server. (UPDATE)
//DELETE -> to delete data at server. (DELETE)






//  ------------------------------------------------------------------------------------------




// //text file data


// onload
// → request complete
// → check status
// → if 200 → display data
// → if not 200 → no error handling 

let textButton = document.getElementById('text-btn');
textButton.addEventListener('click',function(){
    //create and AJAX Request
    let xhr = new XMLHttpRequest();

    //prepare the request
    xhr.open('GET','./data/message.txt',true); //true means asynchronous and we also have two other parameters which are -> username and password.

    //send the request
    xhr.send();


    //process the request
    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
            console.log(data);
            displayTextData(data);
        } 
    };
}); 

//display text data
let displayTextData = (data) => {
    // Implementation for displaying text data
    let htmlTemplate = `<h3>${data}</h3>`;
    document.getElementById('text-card').innerHTML = htmlTemplate;
};



// onreadystatechange
// → state changes
// → check readyState 4
// → check status
// → if 200 → display data
// → if not 200 → display error using status + statusText

// document.getElementById('btn').addEventListener('click',() => {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () =>{
//         if( xhr.readyState === 4){
//             if( xhr.status === 200){
//                 document.getElementById('result').innerHTML = xhr.responseText;
//             }else{
//                 document.getElementById('result').innerHTML = "Error :" + xhr.status + " " + xhr.statusText;
//             }
//         }
//     }

//     xhr.open('GET','./data/message.txt',true);
//     xhr.send();
// });


//-------------------------------------------------------------------------------------------------------------

//JSON file data

let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click',() => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./data/RCB.json',true);
    xhr.send();

    xhr.onload = () => {
        if( xhr.status === 200){
            let data = xhr.responseText;
            // console.log(typeof data); //type of data is string
            
            let RCB = JSON.parse(data); //convert string to object
            console.log( RCB);
            displayJsonData(RCB);
        }
    }
})

//display the JSON data

let displayJsonData = (RCB) => {
    let htmlTemplate = '';
    htmlTemplate = `<ul>
                    <li>Born : ${RCB.Born}</li>
                    <li>Captain : ${RCB.Captain}</li>
                    <li>Coach : ${RCB.Coach}</li>
                    <li>Home Ground : ${RCB.HomeGround}</li>
                    <li>Runner-up : ${RCB.Runnersup}</li>
                    <li>Titles: ${RCB.Titles}</li>
                    <li>Most Runs : ${RCB.MostRuns}</li>
                    <li>Most Wickets : ${RCB.MostWickets}</li>
                    <li>Owner : ${RCB.Owner}</li>
                    <li>Name : ${RCB.Name}</li>
                    <li>Website : ${RCB.Website}</li>
                    </ul>`;
document.querySelector('#json-card').innerHTML = htmlTemplate;
}

//-------------------------------------------------------------------------------------------------------------

//API data

let apiButton = document.querySelector('#api-btn').addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users' , true);
    xhr.send();

    xhr.onload = () => {
        if( xhr.status === 200){
            let data = xhr.responseText; // data in the form of string in console
           let users = JSON.parse(data);
           console.log(users);//data in the form of object/array in console
           displayApiData(users);
        }
    }
})

// Display the data from API
let displayApiData = (users) => {

    let htmlTemplate = '';

    for (let user of users) {

        htmlTemplate += `<ul>
                            <li>Name : ${user.name}</li>
                            <li>Username : ${user.username}</li>
                            <li>Email : ${user.email}</li>
                            <li>Phone : ${user.phone}</li>
                            <li>Website : ${user.website}</li>
                         </ul>`;
    }

    document.querySelector('#api-card').innerHTML = htmlTemplate;
};








