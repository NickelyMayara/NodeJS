const fs = require('node:fs')

fs.readFile('teste.txt', 'utf-8', (err, data) => {      //sync: função síncrona, 3 parâmentros, local do arquivo, que tipo de biblioteca ele utiliza e uma função callback
    if(err){
        console.log(err)
    }
    console.log(data)
})    