//@ts-check

/**
 * Uma função simples que retorna a soma de duas variáveis
 * @param {number} x - Primeira variável a ser somada.
 * @param {number} y - Primeira variável a ser somada.
 * @returns {number} - Retorna a soma das duas variáveis.
 */
function soma(x, y) {
    return x + y;
}

//Não existe a função sum, provavelmente o correto era soma (3,5)
var typo = sum(3, 5);

// O primeiro parâmetro deveria ser um number, e não uma string
var somaComString = soma("três", 5);

// Não existe uma função soma com apenas um atributo
var somaSemParametro = soma(5);

// Não se pode comparar uma função com number. 
// Provavelmente o esperado era if(soma(3,5) > 7)
if (soma > 37) {
}

/** @type{Array.<number>} */
var x = [];
x.push(1);        // OK
x.push("string"); // NOT OK, o VS espera que o tipo seja number e não string

