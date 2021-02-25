
/* Ex 1  */

// console.log("Olá Mundo");

/* Ex 2  */

//alert("Mensagem");

/* Ex 3  */

//console.log(45 + 32);

/* Ex 4  */

function mostrarNome(){

    const inputNome = document.getElementById("nome-completo");
    
    let mensagem = `O Nome Completo é: ${inputNome.value}`;

    alert(mensagem);
}

/* Ex 5  */

function contarLestras(){
    
    c

    let mensagem = `A quantidade é: ${inputTexto.value.length}`;

    alert(mensagem);
}

/* Ex 6  */

function interruptorLampada(){

    let img = document.getElementById("lampada");

    img.src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg";
    
}

/* Ex 7  */

function oveLampada(){

    let img = document.getElementById("lampada2");

    img.src = "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg";
    
}

/* Ex 8 */

function saudacao(){

    const inputSobrenome = document.getElementById("sobre-nome");
    const inputNome      = document.getElementById("nome");

    let mensagem = `Olá ${inputNome.value} ${inputSobrenome.value}`;

    alert(mensagem);
}
