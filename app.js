
//FUNCTION 1
//#########################################################
function funcionSuma(n1,n2){
    const primerNumero = Number(n1);
    const segundoNumero = Number(n2);
    let suma = 0;
    suma = primerNumero + segundoNumero;
    console.log(
        `
        -----------------------
        La suma es
        -----------------------
        ${suma}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let numero1 = 10;
// let numero2 = 45;
// funcionSuma(numero1,numero2);

//#########################################################

//FUNCTION 2
//#########################################################
function funcionPromedio(ex1,ex2,ex3,ex4){
    const examen1 = Number(ex1);
    const examen2 = Number(ex2);
    const examen3 = Number(ex3);
    const examen4 = Number(ex4);
    let promedio = examen1 + examen2 + examen3 + examen4 / 4;
    console.log(
        `
        -----------------------
        El promedio es
        -----------------------
        ${promedio}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let exa1 = 10;
// let exa2 = 20;
// let exa3 = 10;
// let exa4 = 18;
// funcionPromedio(exa1,exa2,exa3,exa4);
//#########################################################

//FUNCTION 3
//#########################################################
function areaRectangulo(b,h){
    const base = Number(b);
    const altura = Number(h);
    let area = base * altura ;
    console.log(
        `
        -----------------------
        El area del rectangulo es
        -----------------------
        ${area}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let rectanguloBase = 10;
// let rectanguloAltura = 45;
// areaRectangulo(rectanguloBase,rectanguloAltura);
//#########################################################

//FUNCTION 4
//#########################################################
function areaTriangulo(b,h){
    const base = Number(b);
    const altura = Number(h);
    let area = base * altura / 2;
    console.log(
        `
        -----------------------
        El area del triangulo es
        -----------------------
        ${area}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let trianguloBase = 10;
// let trianguloAltura = 45;
// areaTriangulo(trianguloBase,trianguloAltura);

//#########################################################

//FUNCTION 5
//#########################################################
function areaCircunferencia(r){
    const radio = Number(r);
    let area = radio * radio * Math.PI
    console.log(
        `
        -----------------------
        El area de la circunferencia es
        -----------------------
        ${area}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let circunferenciaRadio = 10;
// areaCircunferencia(circunferenciaRadio);

//#########################################################

//FUNCTION 6
//#########################################################
function sueldoSemanal(hora,salhora){
    const horasTrabajadas = Number(hora);
    const salarioxHora = Number(salhora);
    let sueldo = horasTrabajadas * salarioxHora;
    console.log(
        `
        -----------------------
        El sueldo semanal es
        -----------------------
        ${sueldo}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let cantidadHorasTrabajadas = 10;
// let salarioPorHora = 45;
// sueldoSemanal(cantidadHorasTrabajadas,salarioPorHora);

//#########################################################

//FUNCTION 7
//#########################################################
function metrosApulgadas(met){
    const cantidadMetros = Number(met);
    const valor1Pulgada = 1;
    const valor1Metro = 0.0254;
    let medidaFinal = cantidadMetros * valor1Pulgada / valor1Metro;
    console.log(
        `
        -----------------------
        El tamanio en pulgadas es
        -----------------------
        ${medidaFinal}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let metros = 10;
// metrosApulgadas(metros);

//#########################################################

//FUNCTION 8
//#########################################################
function solesADolares(sol){
    const cantidadSoles = Number(sol);
    const tipoCambio = 3.85;
    let totalDolares = cantidadSoles / tipoCambio;
    console.log(
        `
        -----------------------
        El total en dolares es
        -----------------------
        ${totalDolares}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let soles = 1064;
// solesADolares(soles);

//#########################################################

//FUNCTION 9
//#########################################################
function calcularEdad(anioNaci){
    const anioNacimiento = Number(anioNaci);
    let anioActual = new Date().getFullYear();
    let edad = anioActual - anioNacimiento;
    // console.log(edad);
    console.log(
        `
        -----------------------
        Su edad es la siguiente
        -----------------------
        ${edad}
        -----------------------
    `);
}
//APLICANDO FUNCION
// let anio = 1991;
// calcularEdad(anio);

//#########################################################

//FUNCTION 10
//#########################################################
function getMenor(ed1,ed2,ed3){
    const edad1 = Number(ed1);
    const edad2 = Number(ed2);
    const edad3 = Number(ed3);
    let menor = 0;
    if (edad1 < edad2)
    {
        menor = edad1;
    } 
    else 
    {
        menor = edad2;
    }

    if (edad3 < menor)
    {
        menor = edad3;
    }

    console.log(
    `
    ------------------------------
    La edad menor es la siguiente
    ------------------------------
    ${menor}
    ------------------------------
    `);
}
//APLICANDO FUNCION
// let edadPersona1 = 10;
// let edadPersona2 = 45;
// let edadPersona3 = 21;
// getMenor(edadPersona1,edadPersona2,edadPersona3);

//#########################################################

//FUNCTION 11
//#########################################################
function getBono(antiguedad){
    const aniosAntiguedad = Number(antiguedad);
    let pago = 0;
    if (aniosAntiguedad == 1)
    {
        pago = 100;
    } 
    else if (aniosAntiguedad == 2)
    {
        pago = 200;
    }
    else if (aniosAntiguedad == 3)
    {
        pago = 300;
    }
    else if (aniosAntiguedad == 4)
    {
        pago = 400;
    }
    else if (aniosAntiguedad == 5)
    {
        pago = 500;
    }
    else if (aniosAntiguedad > 5)
    {
        pago = 1000;
    }
    

    console.log(
    `
    ------------------------------
    El bono a recibir es
    ------------------------------
    ${pago}
    ------------------------------
    `);
}
//APLICANDO FUNCION
// let tiempoAntiguedad = 10;
// getBono(tiempoAntiguedad);

//#########################################################

//FUNCTION 12
//#########################################################
function getSalario(inicial){

    let salario = Number(inicial);
    const incrementoPorcentaje = 0.1;
    const rangoAnios = 6;
    const aumento = salario * incrementoPorcentaje;
    let pago = 0;

    for (let index = 1; index <= rangoAnios; index++) {
        salario += aumento;
        pago = salario;
        console.log(`Salario en el anio ${index} :  ${pago}`);
    }

    console.log(
    `
    --------------------------------
    El salario al cabo de 6 anios es
    --------------------------------
    ${salario}
    --------------------------------
    `);
}
//APLICANDO FUNCION
// let salarioInicial = 1500;
// getSalario(salarioInicial);

//#########################################################


//FUNCTION 13
//#########################################################
//ARREGLO DE ALUMNOS
// const alumnos =
// [
//     alumno = {nombre:'Juan',nota:10},
//     alumno = {nombre:'Raul',nota:20},
//     alumno = {nombre:'Pedro',nota:11},
//     alumno = {nombre:'Luis',nota:13},
//     alumno = {nombre:'Rosa',nota:18},
// ];
//FUNCION
function getAprobadosDesaprobados(alumnos){

    let aprobados = 0;
    let desaprobados = 0;

    for (let index = 0; index < alumnos.length; index++) {
        let nota = alumnos[index].nota;
        if (nota > 10)
        {
            aprobados++;
        }
        else
        {
            desaprobados++;
        }
    }

    console.log(
    `   
    -------------------------------
    Aprobados    : ${aprobados}
    -------------------------------
    Desaprobados : ${desaprobados}
    -------------------------------
    `);
}
//APLICANDO FUNCION
// getAprobadosDesaprobados(alumnos);

//#########################################################


//FUNCTION 14
//#########################################################
//ARREGLO DE ALUMNOS
// const focos =
// [
//     foco = {marca:'Beam',color:'verde'},
//     foco = {marca:'Beam',color:'verde'},
//     foco = {marca:'Beam',color:'blanco'},
//     foco = {marca:'Beam',color:'rojo'},
//     foco = {marca:'Beam',color:'rojo'},
//     foco = {marca:'Beam',color:'azul'},
//     foco = {marca:'Beam',color:'rojo'},
// ];
//FUNCION
function contabilizarFocos(focos){

    let verdes = 0;
    let blancos = 0;
    let rojos = 0;

    for (let index = 0; index < focos.length; index++) {
        const colorFoco = focos[index].color;
        if (colorFoco == 'verde')
        {
            verdes++;
        } 
        else if (colorFoco == 'blanco')
        {
            blancos++;
        } 
        else if (colorFoco == 'rojo')
        {
            rojos++;
        }
        
    }

    console.log(
    `   
    -------------------------------
    Focos Verdes    : ${verdes}
    -------------------------------
    Focos Blancos : ${blancos}
    -------------------------------
    Focos Rojos : ${rojos}
    -------------------------------
    `);
}
//APLICANDO FUNCION
// contabilizarFocos(focos);

//#########################################################

//FUNCTION 15
//#########################################################
function puedoVotar(ed){

    const edad = Number(ed);
    if ((edad > 18) && (edad < 70))
    {
        console.log(
            `   
            -------------------------------
            Usted SI puede votar
            -------------------------------
            `);
    }
    else
    {
        console.log(
            `   
            -------------------------------
            Usted NO puede votar
            -------------------------------
            `);
    }

    
}
//APLICANDO FUNCION
// let edadVotante = 65;
// puedoVotar(edadVotante);

//#########################################################