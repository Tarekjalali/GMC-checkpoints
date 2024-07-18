function prime(a){
    if (a < 2) {
      return "not prime";
    }
    for (i=2 ; i<= Math.sqrt(a) ; i++){
      if (a % i == 0) {
        return "not prime"
  
      }
   }
    return "prime"
  }