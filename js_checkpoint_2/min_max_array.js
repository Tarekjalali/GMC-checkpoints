
var t = [1, 4, 10, -1595847, 100, -15,11524, -350]
var min = t[0] 
var max = t[0]
for (var i = 0; i < t.length; i++) {

  if (min > t[i]) {
    min = t[i]
  }

  if (max < t[i]) {
    max = t[i]

  }
}

console.log(min)