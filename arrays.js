console.log('Proves amb arrays')



function demoArrays(){

    // Creem un array buid (llista)
    var persones = []

    // Afegir elements
    persones.push("Anna")
    persones.push("Eva")

    // Creem un array i l'inicialitzem
    var alumnes = [
        "Pere",
        "Laura",
        "Dani"
    ]

    alumnes.push("Jordi")
    alumnes.push("Sandra")
    alumnes.pop()

    alumnes.splice(2,0,"Jose")
    alumnes.sort()

    console.log(persones,alumnes)

    var numeros = [34,12,10,2]
    var total = 0
    var mitjana = 0
    console.log("Abans del sumatori")
    numeros.forEach(sumatori)
    console.log("Després del sumatori")
    console.log(total)
    function sumatori(valor, index, llista){
        // Mirem que ens està passant
        console.log("Dins del sumatori")
        console.log(valor,index,llista)
        total = total + valor
    }

    function calcularMitjana(valor){
        mitjana = (mitjana + valor)/2
    }

    numeros.forEach(calcularMitjana)
    console.log(mitjana)
}




