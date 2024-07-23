var btn = document.querySelector('button');

var colordiv = document.querySelector('#colordiv');

// var alphanum = 'ABCDEF0123456789';




// btn.addEventListener('click', function() {
//     var newcolor = randomcolor();
//     console.log(newcolor)
//     colordiv.setAttribute('style', `background-color: ${newcolor}`);
// });

// function getRandomnumber() {
//     return Math.floor(Math.random() * 256);
// }
// console.log(getRandomnumber())

// function randomcolor() {
//     var newcolor = [];
//     for (let i = 0; i < 4; i++) {
//         newcolor[i]=getRandomnumber()
//     }
//     return newcolor;
// }

// console.log(randomcolor());

// 2eme

function getRandomnumber() {
    return Math.floor(Math.random() * 256);
  }
  console.log(getRandomnumber())
  
  
  function randomcolor() {
    var newcolor = [];
    for (let i = 0; i < 3; i++) {
      newcolor.push(getRandomnumber())
    }
    return newcolor;
  }
  
  var color = randomcolor()
  
  
  console.log(`rgb(${color[0]},${color[1]},${color[1]})`)


  
btn.addEventListener('click', function() {
    var color = randomcolor()
 
    colordiv.style.backgroundColor =`rgb(${color[0]},${color[1]},${color[1]})`
});
