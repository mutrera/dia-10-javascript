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

    // LOOPS FOR

    console.clear()


    var lletres = ["a","b","c","d"]
    
    var i = 1
    for(i; i <100;i = i + 2)
    {
        console.log("posició",i)
    }
    
    // posicio++ es igual posicio = posicio + 1
    for(var posicio=0;posicio<lletres.length;posicio++){
        console.log(posicio)
        console.log(lletres[posicio])
    }

    console.clear()

    function informacio(valor, posicio, arrayOriginal){
        console.log(posicio)
        console.log(valor)
    }

    function senseRes(){
        console.log('hola')
    }

    function ambElValor(elValor){
        console.log(elValor)
    }

    function ambElValorIlaPosicio(elVal, laPos){
        console.log(elVal,laPos)
    }
    lletres.forEach(informacio)
    lletres.forEach(senseRes)
    lletres.forEach(ambElValor)
    lletres.forEach(ambElValorIlaPosicio)

    lletres.forEach(function(val){
        console.log(val)
    })

    var lletres2=[
        "a",
        "b",
        "c"
    ]

    var excel = [
        ["Nom","Edat","es soci","telefon"],
        ["Jordi",42,true,"86846546854"],
        ["Sandra",34,false,"0928321092"],
        ["Laura",34,true,"321098321"]
    ]

    function mostraInfoExcel(fila,pos,original){
        console.log(original)
        if(pos == 0){
            console.log("Estem a la fila 0")
        }else{
            console.log("No estem a la fila 0")
            console.log(fila,pos)
            console.log("Nom soci:",fila[0])
            console.log("Edat:",fila[1])
            console.log(original[0][0],fila[0])
        }
    } 

    excel.forEach(mostraInfoExcel)



}




