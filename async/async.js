const promesa = new Promise(function(resolve, reject){
   setTimeout(() => {
    resolve('resolvido')
   }, 1000)
})


promesa.then(function(resolver) {
    console.log(resolver)
})