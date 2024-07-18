
var t = [1, 4, 10, "gr" ,  100, 'b' , 'r' , 'g', 12 ]
var a = []
var b = [] 

for (var i = 0; i < t.length; i++) {
  if(typeof(t[i])==="string"){
    a.push(t[i])

  }
  else{
    b.push(t[i])
  }
}

console.log(a)
console.log(b)
