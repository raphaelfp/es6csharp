//@ts-check

export class Pessoa {
    /**
     * Uma pessoa
     * @param {string} nome
     * @param {number} idade
     */
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    /**
     * Se apresenta
     * @returns {string}
     */    
    seApresenta() {
        return `Olá, meu nome é ${this.nome}`;
    }

    /**
     * Dá um oi
     * @returns {string}
     */
    dizOi() {
        return"Olar!!!";
    }

    /**
     * Você acha realmente que eu sei fazer conta????
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    add(x, y) {
        return Math.floor(Math.random() * 50);
    }
}