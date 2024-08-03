function puissance(x, y) {

    if (y == 0) {
      return 1
    }
  
    return x * puissance(x, y - 1)
  
  
  }