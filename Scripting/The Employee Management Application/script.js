const url = ('data.json')
let x, y;
let list = document.querySelector("select");

let data = [
    { firstname: "Syd", lastname: "Barret", city: "Cambridge", job: "singer-songwriter" },
    { firstname: "Roger", lastname: "Waters", city: "London", job: "musician" },
    { firstname: "Nick", lastname: "Mason", city: "Birmingham", job: "Composer" },
    { firstname: "Richard", lastname: "Wright", city: "Cambridge", job: "Musician" },
    { firstname: "David", lastname: "Gilmour", city: "Cambridge", job: "singer-songwriter" },
];

// let panel = document.querySelector("#panel");

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

let fn = document.querySelector("#fname").value;
let ln = document.querySelector("#lname").value;
let c = document.querySelector("#city").value;
let j = document.querySelector("#job").value;
let t = { "firstname": fn, "lastname": ln, "city": c, "job": j };
// Clear();

// readTextFile("data.json", function(text){
//     x = list.selectedIndex;
//     var data = JSON.parse(text);
//     data.splice(x, 1);
//     text=JSON.stringify(data);
//     console.log(data)
// });

function Clear() {
    document.querySelector("#fname").value = "";
    document.querySelector("#lname").value = "";
    document.querySelector("#city").value = "";
    document.querySelector("#job").value = "";
}

function Render() {
    list.textContent = "";
    data.forEach(i => {
        y = document.createElement("option");
        y.innerText = `${i.firstname}, ${i.lastname}, ${i.city}, ${i.job}`;
        list.append(y);
    })
}

function Click() {
    x = list.selectedIndex;
    document.querySelector("#fname").value = data[x].firstname;
    document.querySelector("#lname").value = data[x].lastname;
    document.querySelector("#city").value = data[x].city;
    document.querySelector("#job").value = data[x].job;
    Render();
}

function JSONRender(post) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            json.data.forEach(i => {
                y = document.createElement("option");
                y.innerText = `${i.firstname}, ${i.lastname}, ${i.city}, ${i.job}`;
                list.append(y);
                data.append(y);
            });
        })
}

function JSONClick() {
    x = list.selectedIndex;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            document.querySelector("#fname").value = json.data[x].firstname;
            document.querySelector("#lname").value = json.data[x].lastname;
            document.querySelector("#city").value = json.data[x].city;
            document.querySelector("#job").value = json.data[x].job;
        })
}

function JSONAdd() {
    let fn = document.querySelector("#fname").value;
    let ln = document.querySelector("#lname").value;
    let c = document.querySelector("#city").value;
    let j = document.querySelector("#job").value;
    let t = { "firstname": fn, "lastname": ln, "city": c, "job": j };
    Clear();
    readTextFile("data.json", function (text) {
        var data = JSON.parse(text);
        data.append(t)
    });

    Render();
}

// function Update() {
//     x = list.selectedIndex;
//     fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             json.data[x].firstname = document.querySelector("#fname").value;
//             json.data[x].lastname = document.querySelector("#lname").value;
//             json.data[x].city = document.querySelector("#city").value;
//             json.data[x].job = document.querySelector("#job").value;
//         })
//     Render()
// }

// function Delete() {
//     x = list.selectedIndex;
//     fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             json.splice(x, 1);
//         })
// }


function Add() {
    let fn = document.querySelector("#fname").value;
    let ln = document.querySelector("#lname").value;
    let c = document.querySelector("#city").value;
    let j = document.querySelector("#job").value;
    let t = { firstname: fn, lastname: ln, city: c, job: j };
    data.push(t);
    Clear();
    console.log(data);
    Render();
}

function Update() {
    data[x].firstname = document.querySelector("#fname").value;
    data[x].lastname = document.querySelector("#lname").value;
    data[x].city = document.querySelector("#city").value;
    data[x].job = document.querySelector("#job").value;
    Render();
}

function Delete() {
    data.splice(x, 1);
    Render();
}

Render();