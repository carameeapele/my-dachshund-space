function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let bottom = document.getElementById("bottom");

function goBottom() {
    bottom.scrollIntoView();
}

let text = document.getElementsByTagName("P");

let i;
let intialOk = 1;

function smallerSize() {
    if (intialOk == 1) {
        for (i = 0; i < text.length; i++) {
            text[i].style.fontSize = "smaller";
        }

        intialOk = 0;
    } else {
        for (i = 0; i < text.length; i++) {
            text[i].style.fontSize = "initial";
        }

        intialOk = 1;
    }
}

function biggerSize() {
    if (intialOk == 1) {
        for (i = 0; i < text.length; i++) {
            text[i].style.fontSize = "larger";
        }

        intialOk = 0;
    } else {
        for (i = 0; i < text.length; i++) {
            text[i].style.fontSize = "initial";
        }

        intialOk = 1;
    }
}

let titlu = document.getElementById('titlu');
let subtitluri = document.querySelectorAll('H2');
let tabel = document.querySelectorAll('TABLE');

function darkMode() {
    document.body.style.backgroundColor = "#111317";

    for (i = 0; i < text.length; i++) {
        text[i].style.color = "white";
    }

    titlu.style.color = 'white';
    titlu.style.borderColor = 'white';

    subtitluri.forEach(subtitlu => {
        subtitlu.style.color = 'white';
    })

    tabel.forEach(td => {
        td.style.color = 'white';
    })
}

function lightMode() {
    document.body.style.backgroundColor = "initial";

    for (i = 0; i < text.length; i++) {
        text[i].style.color = "initial";
    }

    titlu.style.color = 'initial';
    titlu.style.borderColor = 'initial';

    subtitluri.forEach(subtitlu => {
        subtitlu.style.color = 'initial';
    })

    tabel.forEach(td => {
        td.style.color = 'initial';
    })
}