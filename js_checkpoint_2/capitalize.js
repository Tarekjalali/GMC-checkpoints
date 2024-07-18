var str = "bonjour la vie"
var nstr = ""

nstr = str[0].toUpperCase()

for (i = 0; i < str.length - 1; i++) {
  if (str[i] === " ") {
    nstr = nstr + str[i + 1].toUpperCase()

  }
  else {
    nstr = nstr + str[i + 1]
  }
}
console.log(nstr)