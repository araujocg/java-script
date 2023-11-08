const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function(){
      console.log(this.som)
    }
    
  }
  
  const gato = {
    tipo:'gato',
    som: 'miau',
  }
  
  const gatoRaivoso = {
    tipo:'gatoRaivoso',
    miarForte : function(){
      console.log(this.som.toUpperCase())
    }
  }
  Object.setPrototypeOf(gato, animal)
  Object.setPrototypeOf(gatoRaivoso, gato)
  gatoRaivoso.miarForte()
  