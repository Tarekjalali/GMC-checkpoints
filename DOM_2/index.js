var btn = document.querySelector('button');

var colordiv = document.querySelector('#colordiv');

var alphanum = 'ABCDEF0123456789';




btn.addEventListener('click', function() {
    var newcolor = randomcolor();
    console.log(newcolor)
    colordiv.setAttribute('style', `background-color: ${newcolor}`);
});

function getRandomCharacter(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}


function randomcolor() {
    var newcol = '#';
    for (let i = 0; i < 6; i++) {
        newcol += getRandomCharacter(alphanum);
    }
    return newcol;
}

console.log(randomcolor());