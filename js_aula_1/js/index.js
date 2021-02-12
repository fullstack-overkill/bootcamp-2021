let numero = 0;

function contador1(){
    let novoNumero = numero + 1;
    numero = novoNumero;

    let texto = document.getElementById("paragrafo");
    texto.innerHTML = novoNumero;
}

function contador2(){
    let novoNumero = numero + 2;
    numero = novoNumero;

    let texto = document.getElementById("paragrafo");
    texto.innerHTML = novoNumero;
}

function contador3(){
    let novoNumero = numero + 3;
    numero = novoNumero;

    let texto = document.getElementById("paragrafo");
    texto.innerHTML = novoNumero;
}
