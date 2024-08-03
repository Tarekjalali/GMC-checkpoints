function Pal(s,d,f){
    if(d == f){
      return true
    }
  
    if(s[d] != s[f]){
      return false
    }
  
    if(d<f){
      return Pal(s,d+1,f-1)
    }
  
    return true
  }