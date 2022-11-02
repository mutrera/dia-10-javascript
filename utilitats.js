console.log("Carregant arxiu..")

const pi = 3.1416

function prova(){
    console.log("hola")
}

function mostraInformacio(laVariable)
{
    console.log('Contingut:',laVariable)
    console.log('Tipus:',typeof(laVariable))
    let esArray = Array.isArray(laVariable)
    console.log('És array:',esArray)
}

function primeraPart(){
    console.log(pi)
   var elMeuNom = "Jordi"
   console.log("El contingut de la variable és",
    elMeuNom, " i el tipus de la variable és ",
    typeof elMeuNom
    )
    // console.log(ElMeuNom)

    var laMevaEdat = "42"
    var elTipusdeVariableDeLaMevaEdat = typeof laMevaEdat

    console.log("Contingut",laMevaEdat)
    console.log("Tipus",elTipusdeVariableDeLaMevaEdat)

    var edat = 42
    console.log(edat,typeof edat)
    var edat2030 = edat + 8
    console.log('El 2030 tindré',edat2030,' anys')

    var tipus = typeof(edat)

    function suma(a,b){
        return a + b
    }

    var resultat = suma(10,20)
    console.log(resultat)
    console.log(suma(300,12))

    //alert(suma(12,3))
    //alert("Hola")

    

    var variable1 = "Jordi"
    var variable2 = 13
    var variable3 = false

    mostraInformacio(variable1,variable2,variable3)
    mostraInformacio(variable2)
    mostraInformacio(variable3);

    var suma2 = function(a,b){
        console.log('dins la variable')
        return a+b
    }
    
    
    mostraInformacio(suma)

    suma2(20,11)
    
    // Exemple d'array
    var noms = ["jordi","pere","laura"]
    // Exemple d'objecte
    var persona ={
        nom:'Jordi',
        dni:'404040404H'
    }
    mostraInformacio(noms)
    mostraInformacio(persona)

    prova()
}

console.log("Arxiu carregat..")
