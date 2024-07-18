function fib(a, b, l) {
    var t = [a, b]
    for (i = 2; i < l; i++) {
        
      t.push(t[i - 1] + t[i - 2])
  
    }
    return t
  
  }