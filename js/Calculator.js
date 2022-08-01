function first() {
    var data = "";
    localStorage.setItem("myData", data);
}

function append(action) {
    var data = localStorage.getItem("myData");
    switch (action) {
        case 'add':
        case 'sub':
        case 'mul':
        case 'div':
            data = data + " " + (document.getElementById('userinput').value);
            data = data + " " + action;
            break;
    }

    document.getElementById('output').innerHTML = data;
    localStorage.setItem("myData", data);
}

function calculate() {
    var data = localStorage.getItem("myData");
    let numarray = data.split(' ');
    alert(numarray);

    localStorage.removeItem("myData")
}