function rangeToData() {
    let x = document.getElementById("volume").value;
    document.getElementById("month").value = x;
}

function dataToRange() {
    let x = document.getElementById("month").value;
    document.getElementById("volume").value = x;
}


let amountData = sessionStorage.getItem('amount');

if (amountData != null) {
    amountData = JSON.parse(amountData);
}
else {
    amountData = document.querySelector('#amount').value;
};

document.querySelector('#amount').value = amountData;
sessionStorage.removeItem('amount');

/*
let period = 12;

let getJSON = function (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        let status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

let urlJSON = `https://0b455iwc12.execute-api.eu-central-1.amazonaws.com/remingtonmd/api/calc/amount/${amountData}/period/${period}`;
let dataJSON = getJSON(urlJSON,
    function (err, data) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            alert('Your query count: ' + data.query.count);
        }
    });
*/
dataJSON = {
    "adminFee": 94.5,
    "apr": 50.68,
    "commission": 126,
    "maxDownPayment": 3700,
    "minDownPayment": 0,
    "monthlyPayment": 403.5,
    "totalCost": 5649
};


let numberMonthes = document.getElementById("month").value;
document.getElementById("desired-sum").textContent = amountData;
document.getElementById("number-monthes").textContent = numberMonthes;
document.getElementById("month-payment").textContent = dataJSON["monthlyPayment"];
document.getElementById("total-cost").textContent = dataJSON["totalCost"];

// button ACTUALIZEAZA
function dataUpdate() {
    /*
    let getJSON = function (url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            let status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };
    
    let urlJSON = `https://0b455iwc12.execute-api.eu-central-1.amazonaws.com/remingtonmd/api/calc/amount/${amountData}/period/${period}`;
    
    let dataJSON = getJSON(urlJSON,
        function (err, data) {
            if (err !== null) {
                return err; // Something went wrong
            } else {
                return data;
            }
        });
    */
    dataJSON = {
        "adminFee": 94.5,
        "apr": 50.68,
        "commission": 126,
        "maxDownPayment": 3700,
        "minDownPayment": 0,
        "monthlyPayment": 403.5,
        "totalCost": 5649
    };


    let amountData = document.getElementById("amount").value;
    let numberMonthes = document.getElementById("month").value;

    document.getElementById("desired-sum").textContent = amountData;
    document.getElementById("number-monthes").textContent = numberMonthes;
    document.getElementById("month-payment").textContent = dataJSON["monthlyPayment"];
    document.getElementById("total-cost").textContent = dataJSON["totalCost"];
};
document.querySelector('#btn-update').onclick = dataUpdate;

// button dataSEND - TRANSMITE button
function dataSend() {
    let temp = {
        "amount": "4200",
        "period": "14",
        "firstName": "test",
        "lastName": "test",
        "idnp": "1990489768423",
        "birthDate": "16.02.1988",
        "phoneNr": "060112233",
        "consent": true
    };
    temp.amount = document.getElementById("desired-sum").value;
    temp.period = document.getElementById("number-monthes").value;
    temp.firstName = document.getElementById("nume").value;
    temp.lastName = document.getElementById("prenume").value;
    temp.idnp = document.getElementById("idnp").value;
    temp.birthDate = document.getElementById("birthdate").value;
    temp.phoneNr = document.getElementById("phone").value;
    temp.consent = document.getElementById("agreement").checked;

    console.log(temp);
    localStorage.setItem('amount', JSON.stringify(temp));
}