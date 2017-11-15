//@ts-check

import { Pessoa } from "./Pessoa";

class Engenheiro extends Pessoa {

    /**
    * Um Engenheiro
    * @param {string} nome - O nome do engenheiro
    * @param {number} idade - A idade do engenheiro
    * @param {string} area - A área de atuação do engenheiro
    */
    constructor(nome, idade, area) {
        super(nome, idade);
        this.area = area;
    }

    /**
     * Se apresenta, falando o nome e a área de atuação
     * @returns {string}
     */
    introduceYourself() {
        return `Olá, meu nome é ${this.nome} e eu sou um Engenheiro ${this.area}`;
    }

    /**
     * Facinho, só pegar a minha 50G.
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    add(x, y) {
        console.log(x+y);
    }
}

export { Engenheiro };