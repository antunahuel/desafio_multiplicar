// validación de ingreso número


function validacion(num) {
 if (num < 1 || num > 20){
    return false;
 } else {
    return true;
 }
}

// console.log(validacion());
 
// FUNCIÓN MULTIPLICAR 

function multiplicar(num){
    let resultadoMultiplicar="";
    for ( let i = 1; i <=num ; i++){
        resultadoMultiplicar += `${i} X ${num} = ${i*num}<br>`;
        console.log(`${i} X ${num} = ${i*num}`);
    }
    return resultadoMultiplicar;
}

// FUNCIÓN NÚMERO FACTORIAL

function factorial (num) {
    let numeroFactorial="";
    for (let i = 1; i <=num; i++){
        let total=1;
        for ( j = 1; j <= i; j++){
            r=total=total*j;
        }
        numeroFactorial+=`el factorial de: ${i} es ${total}<br>`;
        console.log(`el factorial de: ${i} es ${total}`);
    }
    return numeroFactorial; 
    }
  
// FUNCIÓN PRINCIPAL 

function main() {
    let ingresoNumero=Number(prompt("ingrese un número del 10 al 20"));
    let respuestaValidar=validacion(ingresoNumero);

    if (respuestaValidar){
        //RESPUESTA MULTIPLICACIÓN
        let respuestaMultiplicacion=multiplicar(ingresoNumero);
        document.writeln(respuestaMultiplicacion);
        // RESPUESTA NÚMERO FACTORIAL
        let respuestaNumeroFactorial=factorial(ingresoNumero);
        document.writeln(respuestaNumeroFactorial);
    } else {
        alert("el número esta fuera de rango debe ingresar del 1 al 20, usted ingreso", ingresoNumero);
    }
}

main();





