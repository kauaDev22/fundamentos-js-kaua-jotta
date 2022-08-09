function encontrarSomMultiplode3ou5Ate1000(){
    var soma = 0
   for( var i = 0; i < 1000; i++){
        if (i %3 ===0 || 5 === 0){
            soma+= 1

        }
   }
   console.log(soma)
}

encontrarSomMultiplode3ou5Ate1000()